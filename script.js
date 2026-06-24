/* ===========================================================
   트릭컬 사도 이름 외우기 — 게임 로직
   - APOSTLES 배열은 data.js 에 들어 있습니다. (가나다 정렬, 이격은 기본 사도 뒤)
   - 각 원소: { name, race, img, aliases, isSkin, base, title }

   첫 화면에서 두 옵션을 체크박스로 조합해 시작:
   - 가나다순(isSequence) : 켜면 가나다 순서대로 입력해야 함 / 끄면 자유 순서
   - 이격 포함(includeSkins): 켜면 이격(스킨) 사도까지 포함 / 끄면 기본 사도만
   =========================================================== */

// ----- 화면 요소 가져오기 -----
const startScreen  = document.getElementById('start-screen');
const gameScreen   = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn    = document.getElementById('start-btn');
const restartBtn  = document.getElementById('restart-btn');
const optGanada   = document.getElementById('opt-ganada');
const optSkins    = document.getElementById('opt-skins');

const form      = document.getElementById('input-form');
const input     = document.getElementById('name-input');
const feedback  = document.getElementById('feedback');

const timerEl    = document.getElementById('timer');
const progressEl = document.getElementById('progress');
const hintCountEl = document.getElementById('hint-count');

const recentCard    = document.getElementById('recent-card');
const recentImgWrap = document.getElementById('recent-img-wrap');
const recentName    = document.getElementById('recent-name');

const enteredList = document.getElementById('entered-list');
const listCount   = document.getElementById('list-count');

const resultModeSummary = document.getElementById('result-mode-summary');

const hintBtn           = document.getElementById('hint-btn');
const giveupBtn         = document.getElementById('giveup-btn');
const resultTitle       = document.getElementById('result-title');
const resultSubtitleText = document.getElementById('result-subtitle-text');
const resultCount       = document.getElementById('result-count');
const resultHints       = document.getElementById('result-hints');
const missingSection    = document.getElementById('missing-section');
const missingList        = document.getElementById('missing-list');
const missingCount      = document.getElementById('missing-count');

// ----- 게임 상태 -----
// 기본 사도만 / 전체(이격 포함) 인원수
const BASE_COUNT = APOSTLES.filter(a => !a.isSkin).length;
const FULL_COUNT = APOSTLES.length;

let apostles     = [];         // 이번 판에서 사용할 사도 목록 (이격 포함 여부에 따라 달라짐)
let total        = 0;          // apostles.length
let isSequence   = false;      // 가나다순 모드 여부
let includeSkins = false;      // 이격 포함 여부
let currentIndex = 0;          // (가나다 모드) 지금 입력해야 할 사도의 순서
let entered      = new Set();  // 이미 맞춘 사도들의 인덱스
let enteredCount = 0;          // 맞춘 사도 수
let hintsUsed    = 0;          // 힌트 사용 횟수
let startTime    = 0;
let timerId      = null;
let nameToIndex  = new Map();  // 정규화된 이름/별칭 -> apostles 내 인덱스

// 첫 화면 설명문의 인원수: 이격 체크 여부에 따라 갱신
function updateRulesTotal() {
  document.getElementById('rules-total').textContent =
    optSkins.checked ? FULL_COUNT : BASE_COUNT;
}

// 첫 화면에 사도 명단 업데이트 일자 표시 (data.js 의 LAST_UPDATED)
if (typeof LAST_UPDATED !== 'undefined') {
  document.getElementById('update-date').textContent = LAST_UPDATED;
}

// ----- 이름 비교용 정규화: 모든 공백 제거 + 소문자 -----
// (띄어쓰기는 너그럽게, 철자는 엄격하게)
function normalize(text) {
  return text.replace(/\s+/g, '').toLowerCase();
}

// 이격(스킨) 사도가 받아들이는 모든 입력 형태 (이격 제외 모드에서 안내용)
const skinForms = new Set();
APOSTLES.forEach(a => {
  if (a.isSkin) [a.name, ...(a.aliases || [])].forEach(n => skinForms.add(normalize(n)));
});

// ===========================================================
//  소리 (Web Audio API — 별도 음원 파일 없이 코드로 소리 생성)
// ===========================================================
let audioCtx = null;
function initAudio() {
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
    catch (e) { audioCtx = null; }
  }
}
function beep(freq, durationMs, type, volume) {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.value = volume;
  osc.connect(gain); gain.connect(audioCtx.destination);
  const now = audioCtx.currentTime;
  gain.gain.setValueAtTime(volume, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + durationMs / 1000);
  osc.start(now);
  osc.stop(now + durationMs / 1000);
}
function playCorrect() {  // 맑은 '딩' 두 음
  beep(880, 90, 'sine', 0.15);
  setTimeout(() => beep(1175, 110, 'sine', 0.15), 90);
}
function playWrong() {    // 낮은 '부-' 부저음
  beep(160, 220, 'square', 0.12);
}

// ===========================================================
//  타이머
// ===========================================================
function formatTime(ms) {
  const totalSec = ms / 1000;
  const m = Math.floor(totalSec / 60);
  const s = Math.floor(totalSec % 60);
  const tenths = Math.floor((ms % 1000) / 100);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${tenths}`;
}
function startTimer() {
  startTime = Date.now();
  timerId = setInterval(() => {
    timerEl.textContent = formatTime(Date.now() - startTime);
  }, 100);
}
function stopTimer() {
  clearInterval(timerId);
  return Date.now() - startTime;
}

// ===========================================================
//  게임 진행
// ===========================================================
function startGame() {
  initAudio();

  // 첫 화면 옵션 읽기
  isSequence   = optGanada.checked;
  includeSkins = optSkins.checked;
  // 이번 판에서 사용할 사도 목록 구성 (이격 포함 여부)
  apostles = includeSkins ? APOSTLES.slice() : APOSTLES.filter(a => !a.isSkin);
  total = apostles.length;
  document.getElementById('total').textContent = total;  // 게임 화면 HUD 총원
  // 이름/별칭 -> 인덱스 사전 (이번 목록 기준으로 새로 만듦)
  nameToIndex = new Map();
  apostles.forEach((a, idx) => {
    [a.name, ...(a.aliases || [])].forEach(n => nameToIndex.set(normalize(n), idx));
  });

  // 상태 초기화
  currentIndex = 0;
  entered = new Set();
  enteredCount = 0;
  hintsUsed = 0;
  enteredList.innerHTML = '';
  progressEl.textContent = '0';
  hintCountEl.textContent = '0';
  listCount.textContent = '(0)';
  timerEl.textContent = '00:00.0';
  feedback.textContent = ' ';
  feedback.className = 'feedback';
  // 최근 사도 카드 초기화
  recentCard.classList.add('empty');
  recentImgWrap.innerHTML = '';
  recentName.innerHTML = '첫 사도의 이름을<br />입력해 보세요!';
  // 결과 화면의 '입력 못한 사도' 목록 초기화
  missingSection.classList.remove('show');
  missingList.innerHTML = '';

  // 화면 전환
  showScreen(gameScreen);
  input.value = '';
  input.focus();
  startTimer();
}

function showScreen(screen) {
  [startScreen, gameScreen, resultScreen].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

// 정답 처리 (idx = 맞춘 사도의 인덱스)
function accept(idx) {
  const apostle = apostles[idx];
  entered.add(idx);
  enteredCount++;
  playCorrect();

  // 1) 오른쪽 목록에 추가 (이름만, 입력한 순서대로 번호 매김)
  const li = document.createElement('li');
  li.innerHTML = `<span class="num">${enteredCount}</span><span>${apostle.name}</span>`;
  enteredList.appendChild(li);
  // 목록 컨테이너 '내부'에서만 맨 아래로 스크롤 (페이지 전체 스크롤은 건드리지 않음)
  enteredList.scrollTop = enteredList.scrollHeight;

  // 2) 왼쪽 '최근 입력 사도' 카드 갱신 (이름 + 사진)
  recentCard.classList.remove('empty');
  recentImgWrap.innerHTML = `<img src="${apostle.img}" alt="${apostle.name}" />`;
  recentName.textContent = apostle.name;
  recentImgWrap.classList.remove('pop'); void recentImgWrap.offsetWidth; // 애니메이션 재시작 트릭
  recentImgWrap.classList.add('pop');

  // 3) 진행도 갱신
  progressEl.textContent = enteredCount;
  listCount.textContent = `(${enteredCount})`;

  // feedback.textContent = '정답! 👍';
  // feedback.className = 'feedback good';
  input.placeholder = '정답!';

  // 4) 가나다 모드는 다음 순서로 포인터 이동
  if (isSequence) currentIndex = idx + 1;

  // 5) 다 맞혔으면 결과 화면으로
  if (enteredCount >= total) finishGame();
}

// 아직 입력하지 못한 사도 목록을 결과 화면에 채움
function fillMissingList() {
  missingList.innerHTML = '';
  let n = 0;
  apostles.forEach((a, idx) => {
    if (entered.has(idx)) return;
    n++;
    const li = document.createElement('li');
    li.innerHTML = `<span class="num">${n}</span><span>${a.name}</span>`;
    missingList.appendChild(li);
  });
  missingCount.textContent = `(${n}명)`;
}

// 오답 처리 (message = 상황별 안내 문구)
function handleWrong(message) {
  playWrong();

  //feedback.textContent = message;
  //feedback.className = 'feedback bad';

  // 입력칸 흔들림 효과
  form.classList.remove('shake'); void form.offsetWidth;
  form.classList.add('shake');

  input.placeholder = message;
}

// 제출 처리
function handleSubmit(event) {
  event.preventDefault();
  const guess = normalize(input.value);
  if (guess === '') return;  // 빈 입력은 무시

  if (nameToIndex.has(guess)) {
    const idx = nameToIndex.get(guess);
    if (entered.has(idx)) {
      // 이미 맞춘 사도
      handleWrong('이미 맞춘 사도에요!');
    } else if (isSequence && idx !== currentIndex) {
      // 존재하지만 아직 순서가 아닌 사도 (가나다 모드 전용)
      handleWrong('아직 순서가 아니에요!');
    } else {
      // 정답!
      accept(idx);
    }
  } else if (!includeSkins && skinForms.has(guess)) {
    // 이격 제외 모드인데 이격 사도를 입력함 (가나다 모드여도 이 안내가 우선)
    handleWrong('여기서 찾으시면 안돼요...');
  } else {
    // 명단에 아예 없는 이름
    handleWrong('그런 사도는 없어요...');
  }

  // 입력칸 비우고 다시 포커스
  input.value = '';
  input.focus();
}

// 결과 화면 공통 처리 (completed = 완주 여부)
function showResult(completed) {
  const elapsed = stopTimer();
  document.getElementById('result-time').textContent = formatTime(elapsed);
  resultCount.textContent = `${enteredCount} / ${total}`;
  resultHints.textContent = hintsUsed;
  // 진행 모드 요약
  const orderLabel = isSequence ? '가나다순' : '자유 순서';
  const skinLabel  = includeSkins ? '이격 포함' : '이격 제외';
  resultModeSummary.innerHTML = `🎮 진행 모드 &nbsp;<b>${orderLabel}</b> · <b>${skinLabel}</b>`;

  if (completed) {
    resultTitle.textContent = '🎉 축하합니다! 🎉';
    resultSubtitleText.textContent = '모든 사도의 이름을 입력했어요!';
    missingSection.classList.remove('show');
  } else {
    resultTitle.textContent = '🏳️ 여기까지!';
    resultSubtitleText.textContent = '다음엔 끝까지 도전해 봐요!';
    fillMissingList();           // 입력 못한 사도 목록 채우기
    missingSection.classList.add('show');
  }
}

// 완주 시: 마지막 정답 효과를 잠깐 보여주고 전환
function finishGame() {
  showResult(true);
  setTimeout(() => showScreen(resultScreen), 400);
}

// 도중 포기
function giveUp() {
  if (!confirm('정말 포기할까요? 입력하지 못한 사도 목록을 보여드릴게요.')) return;
  showResult(false);
  showScreen(resultScreen);
}

// 힌트: 다음(가나다 모드) 또는 아직 입력 안 한(자유 모드) 사도 이름의 첫 글자를 보여줌
function showHint() {
  const target = isSequence
    ? apostles[currentIndex]                          // 다음에 입력해야 할 사도
    : apostles.find((a, idx) => !entered.has(idx));   // 첫 번째 미입력 사도
  if (!target) return;                                // 더 입력할 사도가 없음
  hintsUsed++;
  hintCountEl.textContent = hintsUsed;
  const firstChar = Array.from(target.name)[0];       // 이름 첫 글자
  feedback.textContent = `💡 힌트: 「${firstChar}」(으)로 시작하는 사도예요!`;
  feedback.className = 'feedback hint';
  input.focus();
}

// ----- 이벤트 연결 -----
// 시작하기: 체크박스 옵션대로 게임 시작
startBtn.addEventListener('click', startGame);
// 이격 포함 체크 시 첫 화면 설명문 인원수 즉시 갱신
optSkins.addEventListener('change', updateRulesTotal);
updateRulesTotal();  // 초기값(이격 제외) 반영
// 다시 하기: 첫 화면(옵션 선택)으로 돌아가기
restartBtn.addEventListener('click', () => showScreen(startScreen));
// 힌트 보기
hintBtn.addEventListener('click', showHint);
// 도중 포기
giveupBtn.addEventListener('click', giveUp);
form.addEventListener('submit', handleSubmit);
// 흔들림 애니메이션이 끝나면 클래스 제거
form.addEventListener('animationend', () => form.classList.remove('shake'));
