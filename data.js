// 트릭컬 사도 데이터. index.html을 그냥 열어도 동작하도록 JS 변수로 내보냄.
// 리소스를 업데이트할 때마다 아래 날짜를 함께 갱신하세요 (YYYY-MM-DD).
// 각 원소: name(표시이름) / race(종족) / img(사진) / aliases(허용 입력) / isSkin(이격 여부) / base(기본 사도) / title(이격 타이틀)
const LAST_UPDATED = "2026-06-23";

const APOSTLES = [
 {
  "name": "가비아",
  "race": "정령",
  "img": "images/023.webp",
  "aliases": [],
  "isSkin": false,
  "base": "가비아",
  "title": ""
 },
 {
  "name": "그윈",
  "race": "수인",
  "img": "images/082.webp",
  "aliases": [],
  "isSkin": false,
  "base": "그윈",
  "title": ""
 },
 {
  "name": "나이아",
  "race": "정령",
  "img": "images/055.webp",
  "aliases": [],
  "isSkin": false,
  "base": "나이아",
  "title": ""
 },
 {
  "name": "네르",
  "race": "요정",
  "img": "images/005.webp",
  "aliases": [],
  "isSkin": false,
  "base": "네르",
  "title": ""
 },
 {
  "name": "네르 (빡침)",
  "race": "요정",
  "img": "images/123.webp",
  "aliases": [
   "네르빡침",
   "빡침네르",
   "네르(빡침)"
  ],
  "isSkin": true,
  "base": "네르",
  "title": "빡침"
 },
 {
  "name": "네티",
  "race": "용족",
  "img": "images/092.webp",
  "aliases": [],
  "isSkin": false,
  "base": "네티",
  "title": ""
 },
 {
  "name": "다야",
  "race": "용족",
  "img": "images/001.webp",
  "aliases": [],
  "isSkin": false,
  "base": "다야",
  "title": ""
 },
 {
  "name": "다야 (퓨어샤인)",
  "race": "용족",
  "img": "images/121.webp",
  "aliases": [
   "다야퓨어샤인",
   "퓨어샤인다야",
   "다야(퓨어샤인)"
  ],
  "isSkin": true,
  "base": "다야",
  "title": "퓨어샤인"
 },
 {
  "name": "델리아",
  "race": "수인",
  "img": "images/108.webp",
  "aliases": [],
  "isSkin": false,
  "base": "델리아",
  "title": ""
 },
 {
  "name": "디아나",
  "race": "수인",
  "img": "images/022.webp",
  "aliases": [],
  "isSkin": false,
  "base": "디아나",
  "title": ""
 },
 {
  "name": "디아나 (왕년)",
  "race": "수인",
  "img": "images/116.webp",
  "aliases": [
   "디아나왕년",
   "왕년디아나",
   "디아나(왕년)"
  ],
  "isSkin": true,
  "base": "디아나",
  "title": "왕년"
 },
 {
  "name": "라이카",
  "race": "정령",
  "img": "images/090.webp",
  "aliases": [],
  "isSkin": false,
  "base": "라이카",
  "title": ""
 },
 {
  "name": "란",
  "race": "수인",
  "img": "images/086.webp",
  "aliases": [],
  "isSkin": false,
  "base": "란",
  "title": ""
 },
 {
  "name": "레비",
  "race": "마녀",
  "img": "images/029.webp",
  "aliases": [],
  "isSkin": false,
  "base": "레비",
  "title": ""
 },
 {
  "name": "레비 (졸업)",
  "race": "마녀",
  "img": "images/126.webp",
  "aliases": [
   "레비졸업",
   "졸업레비",
   "레비(졸업)"
  ],
  "isSkin": true,
  "base": "레비",
  "title": "졸업"
 },
 {
  "name": "레이지",
  "race": "엘프",
  "img": "images/042.webp",
  "aliases": [],
  "isSkin": false,
  "base": "레이지",
  "title": ""
 },
 {
  "name": "레테",
  "race": "유령",
  "img": "images/073.webp",
  "aliases": [],
  "isSkin": false,
  "base": "레테",
  "title": ""
 },
 {
  "name": "로네",
  "race": "엘프",
  "img": "images/037.webp",
  "aliases": [],
  "isSkin": false,
  "base": "로네",
  "title": ""
 },
 {
  "name": "로네 (시장)",
  "race": "엘프",
  "img": "images/117.webp",
  "aliases": [
   "로네시장",
   "시장로네",
   "로네(시장)"
  ],
  "isSkin": true,
  "base": "로네",
  "title": "시장"
 },
 {
  "name": "롤렛",
  "race": "마녀",
  "img": "images/068.webp",
  "aliases": [],
  "isSkin": false,
  "base": "롤렛",
  "title": ""
 },
 {
  "name": "루드",
  "race": "용족",
  "img": "images/020.webp",
  "aliases": [],
  "isSkin": false,
  "base": "루드",
  "title": ""
 },
 {
  "name": "루포",
  "race": "수인",
  "img": "images/015.webp",
  "aliases": [],
  "isSkin": false,
  "base": "루포",
  "title": ""
 },
 {
  "name": "리뉴아",
  "race": "엘프",
  "img": "images/071.webp",
  "aliases": [],
  "isSkin": false,
  "base": "리뉴아",
  "title": ""
 },
 {
  "name": "리스티",
  "race": "엘프",
  "img": "images/070.webp",
  "aliases": [],
  "isSkin": false,
  "base": "리스티",
  "title": ""
 },
 {
  "name": "리온",
  "race": "수인",
  "img": "images/084.webp",
  "aliases": [],
  "isSkin": false,
  "base": "리온",
  "title": ""
 },
 {
  "name": "리츠",
  "race": "용족",
  "img": "images/062.webp",
  "aliases": [],
  "isSkin": false,
  "base": "리츠",
  "title": ""
 },
 {
  "name": "리코타",
  "race": "요정",
  "img": "images/093.webp",
  "aliases": [],
  "isSkin": false,
  "base": "리코타",
  "title": ""
 },
 {
  "name": "림",
  "race": "유령",
  "img": "images/006.webp",
  "aliases": [],
  "isSkin": false,
  "base": "림",
  "title": ""
 },
 {
  "name": "림 (혼돈)",
  "race": "유령",
  "img": "images/114.webp",
  "aliases": [
   "림혼돈",
   "혼돈림",
   "림(혼돈)"
  ],
  "isSkin": true,
  "base": "림",
  "title": "혼돈"
 },
 {
  "name": "마고",
  "race": "수인",
  "img": "images/035.webp",
  "aliases": [],
  "isSkin": false,
  "base": "마고",
  "title": ""
 },
 {
  "name": "마리",
  "race": "요정",
  "img": "images/030.webp",
  "aliases": [],
  "isSkin": false,
  "base": "마리",
  "title": ""
 },
 {
  "name": "마에스트로 2호",
  "race": "엘프",
  "img": "images/004.webp",
  "aliases": [],
  "isSkin": false,
  "base": "마에스트로 2호",
  "title": ""
 },
 {
  "name": "마요",
  "race": "요정",
  "img": "images/036.webp",
  "aliases": [],
  "isSkin": false,
  "base": "마요",
  "title": ""
 },
 {
  "name": "마요 (멋짐)",
  "race": "요정",
  "img": "images/115.webp",
  "aliases": [
   "마요멋짐",
   "멋짐마요",
   "마요(멋짐)"
  ],
  "isSkin": true,
  "base": "마요",
  "title": "멋짐"
 },
 {
  "name": "마카샤",
  "race": "마녀",
  "img": "images/098.webp",
  "aliases": [],
  "isSkin": false,
  "base": "마카샤",
  "title": ""
 },
 {
  "name": "메죵",
  "race": "유령",
  "img": "images/043.webp",
  "aliases": [],
  "isSkin": false,
  "base": "메죵",
  "title": ""
 },
 {
  "name": "멜루나",
  "race": "정령",
  "img": "images/031.webp",
  "aliases": [],
  "isSkin": false,
  "base": "멜루나",
  "title": ""
 },
 {
  "name": "모모",
  "race": "수인",
  "img": "images/074.webp",
  "aliases": [],
  "isSkin": false,
  "base": "모모",
  "title": ""
 },
 {
  "name": "뮤트",
  "race": "정령",
  "img": "images/100.webp",
  "aliases": [],
  "isSkin": false,
  "base": "뮤트",
  "title": ""
 },
 {
  "name": "미로",
  "race": "정령",
  "img": "images/102.webp",
  "aliases": [],
  "isSkin": false,
  "base": "미로",
  "title": ""
 },
 {
  "name": "밍스",
  "race": "수인",
  "img": "images/044.webp",
  "aliases": [],
  "isSkin": false,
  "base": "밍스",
  "title": ""
 },
 {
  "name": "바나",
  "race": "수인",
  "img": "images/069.webp",
  "aliases": [],
  "isSkin": false,
  "base": "바나",
  "title": ""
 },
 {
  "name": "바롱",
  "race": "유령",
  "img": "images/075.webp",
  "aliases": [],
  "isSkin": false,
  "base": "바롱",
  "title": ""
 },
 {
  "name": "바리에",
  "race": "마녀",
  "img": "images/076.webp",
  "aliases": [],
  "isSkin": false,
  "base": "바리에",
  "title": ""
 },
 {
  "name": "버터",
  "race": "수인",
  "img": "images/027.webp",
  "aliases": [],
  "isSkin": false,
  "base": "버터",
  "title": ""
 },
 {
  "name": "베니",
  "race": "수인",
  "img": "images/025.webp",
  "aliases": [],
  "isSkin": false,
  "base": "베니",
  "title": ""
 },
 {
  "name": "베니 (베니)",
  "race": "수인",
  "img": "images/119.webp",
  "aliases": [
   "베니베니",
   "베니베니",
   "베니(베니)"
  ],
  "isSkin": true,
  "base": "베니",
  "title": "베니"
 },
 {
  "name": "베루",
  "race": "유령",
  "img": "images/045.webp",
  "aliases": [],
  "isSkin": false,
  "base": "베루",
  "title": ""
 },
 {
  "name": "벨라",
  "race": "유령",
  "img": "images/091.webp",
  "aliases": [],
  "isSkin": false,
  "base": "벨라",
  "title": ""
 },
 {
  "name": "벨리타",
  "race": "마녀",
  "img": "images/013.webp",
  "aliases": [],
  "isSkin": false,
  "base": "벨리타",
  "title": ""
 },
 {
  "name": "벨벳",
  "race": "마녀",
  "img": "images/009.webp",
  "aliases": [],
  "isSkin": false,
  "base": "벨벳",
  "title": ""
 },
 {
  "name": "블랑셰",
  "race": "정령",
  "img": "images/064.webp",
  "aliases": [],
  "isSkin": false,
  "base": "블랑셰",
  "title": ""
 },
 {
  "name": "비비",
  "race": "용족",
  "img": "images/057.webp",
  "aliases": [],
  "isSkin": false,
  "base": "비비",
  "title": ""
 },
 {
  "name": "빅우드",
  "race": "정령",
  "img": "images/010.webp",
  "aliases": [],
  "isSkin": false,
  "base": "빅우드",
  "title": ""
 },
 {
  "name": "사리",
  "race": "유령",
  "img": "images/046.webp",
  "aliases": [],
  "isSkin": false,
  "base": "사리",
  "title": ""
 },
 {
  "name": "샤샤",
  "race": "요정",
  "img": "images/088.webp",
  "aliases": [],
  "isSkin": false,
  "base": "샤샤",
  "title": ""
 },
 {
  "name": "셀리네",
  "race": "유령",
  "img": "images/059.webp",
  "aliases": [],
  "isSkin": false,
  "base": "셀리네",
  "title": ""
 },
 {
  "name": "셰럼",
  "race": "마녀",
  "img": "images/080.webp",
  "aliases": [],
  "isSkin": false,
  "base": "셰럼",
  "title": ""
 },
 {
  "name": "셰이디",
  "race": "유령",
  "img": "images/021.webp",
  "aliases": [],
  "isSkin": false,
  "base": "셰이디",
  "title": ""
 },
 {
  "name": "셰이디 (역전)",
  "race": "유령",
  "img": "images/120.webp",
  "aliases": [
   "셰이디역전",
   "역전셰이디",
   "셰이디(역전)"
  ],
  "isSkin": true,
  "base": "셰이디",
  "title": "역전"
 },
 {
  "name": "슈로",
  "race": "수인",
  "img": "images/089.webp",
  "aliases": [],
  "isSkin": false,
  "base": "슈로",
  "title": ""
 },
 {
  "name": "슈팡",
  "race": "요정",
  "img": "images/066.webp",
  "aliases": [],
  "isSkin": false,
  "base": "슈팡",
  "title": ""
 },
 {
  "name": "스노키",
  "race": "마녀",
  "img": "images/077.webp",
  "aliases": [],
  "isSkin": false,
  "base": "스노키",
  "title": ""
 },
 {
  "name": "스피키",
  "race": "유령",
  "img": "images/007.webp",
  "aliases": [],
  "isSkin": false,
  "base": "스피키",
  "title": ""
 },
 {
  "name": "스피키 (메이드)",
  "race": "유령",
  "img": "images/113.webp",
  "aliases": [
   "스피키메이드",
   "메이드스피키",
   "스피키(메이드)"
  ],
  "isSkin": true,
  "base": "스피키",
  "title": "메이드"
 },
 {
  "name": "시스트",
  "race": "용족",
  "img": "images/026.webp",
  "aliases": [],
  "isSkin": false,
  "base": "시스트",
  "title": ""
 },
 {
  "name": "시온 더 다크불릿",
  "race": "유령",
  "img": "images/038.webp",
  "aliases": [
   "시온"
  ],
  "isSkin": false,
  "base": "시온 더 다크불릿",
  "title": ""
 },
 {
  "name": "시저",
  "race": "정령",
  "img": "images/099.webp",
  "aliases": [],
  "isSkin": false,
  "base": "시저",
  "title": ""
 },
 {
  "name": "실라",
  "race": "정령",
  "img": "images/008.webp",
  "aliases": [],
  "isSkin": false,
  "base": "실라",
  "title": ""
 },
 {
  "name": "실비아",
  "race": "용족",
  "img": "images/111.webp",
  "aliases": [],
  "isSkin": false,
  "base": "실비아",
  "title": ""
 },
 {
  "name": "실피르",
  "race": "용족",
  "img": "images/056.webp",
  "aliases": [],
  "isSkin": false,
  "base": "실피르",
  "title": ""
 },
 {
  "name": "아네트",
  "race": "용족",
  "img": "images/097.webp",
  "aliases": [],
  "isSkin": false,
  "base": "아네트",
  "title": ""
 },
 {
  "name": "아라그니아",
  "race": "용족",
  "img": "images/109.webp",
  "aliases": [],
  "isSkin": false,
  "base": "아라그니아",
  "title": ""
 },
 {
  "name": "아르코",
  "race": "정령",
  "img": "images/095.webp",
  "aliases": [],
  "isSkin": false,
  "base": "아르코",
  "title": ""
 },
 {
  "name": "아멜리아",
  "race": "엘프",
  "img": "images/012.webp",
  "aliases": [],
  "isSkin": false,
  "base": "아멜리아",
  "title": ""
 },
 {
  "name": "아멜리아 (R41)",
  "race": "엘프",
  "img": "images/122.webp",
  "aliases": [
   "아멜리아R41",
   "R41아멜리아",
   "아멜리아(R41)"
  ],
  "isSkin": true,
  "base": "아멜리아",
  "title": "R41"
 },
 {
  "name": "아사나",
  "race": "마녀",
  "img": "images/103.webp",
  "aliases": [],
  "isSkin": false,
  "base": "아사나",
  "title": ""
 },
 {
  "name": "아야",
  "race": "마녀",
  "img": "images/040.webp",
  "aliases": [],
  "isSkin": false,
  "base": "아야",
  "title": ""
 },
 {
  "name": "아이시아",
  "race": "엘프",
  "img": "images/087.webp",
  "aliases": [],
  "isSkin": false,
  "base": "아이시아",
  "title": ""
 },
 {
  "name": "아일라",
  "race": "정령",
  "img": "images/105.webp",
  "aliases": [],
  "isSkin": false,
  "base": "아일라",
  "title": ""
 },
 {
  "name": "알레트",
  "race": "엘프",
  "img": "images/047.webp",
  "aliases": [],
  "isSkin": false,
  "base": "알레트",
  "title": ""
 },
 {
  "name": "앨리스",
  "race": "유령",
  "img": "images/061.webp",
  "aliases": [],
  "isSkin": false,
  "base": "앨리스",
  "title": ""
 },
 {
  "name": "에르핀",
  "race": "요정",
  "img": "images/014.webp",
  "aliases": [],
  "isSkin": false,
  "base": "에르핀",
  "title": ""
 },
 {
  "name": "에르핀 (왕도)",
  "race": "요정",
  "img": "images/124.webp",
  "aliases": [
   "에르핀왕도",
   "왕도에르핀",
   "에르핀(왕도)"
  ],
  "isSkin": true,
  "base": "에르핀",
  "title": "왕도"
 },
 {
  "name": "에슈르",
  "race": "요정",
  "img": "images/016.webp",
  "aliases": [],
  "isSkin": false,
  "base": "에슈르",
  "title": ""
 },
 {
  "name": "에스피",
  "race": "유령",
  "img": "images/034.webp",
  "aliases": [],
  "isSkin": false,
  "base": "에스피",
  "title": ""
 },
 {
  "name": "에피카",
  "race": "수인",
  "img": "images/060.webp",
  "aliases": [],
  "isSkin": false,
  "base": "에피카",
  "title": ""
 },
 {
  "name": "엘레나",
  "race": "엘프",
  "img": "images/017.webp",
  "aliases": [],
  "isSkin": false,
  "base": "엘레나",
  "title": ""
 },
 {
  "name": "오르",
  "race": "엘프",
  "img": "images/094.webp",
  "aliases": [],
  "isSkin": false,
  "base": "오르",
  "title": ""
 },
 {
  "name": "오팔",
  "race": "용족",
  "img": "images/085.webp",
  "aliases": [],
  "isSkin": false,
  "base": "오팔",
  "title": ""
 },
 {
  "name": "요미",
  "race": "미스틱",
  "img": "images/106.webp",
  "aliases": [],
  "isSkin": false,
  "base": "요미",
  "title": ""
 },
 {
  "name": "우로스",
  "race": "수인",
  "img": "images/101.webp",
  "aliases": [],
  "isSkin": false,
  "base": "우로스",
  "title": ""
 },
 {
  "name": "우이",
  "race": "정령",
  "img": "images/041.webp",
  "aliases": [],
  "isSkin": false,
  "base": "우이",
  "title": ""
 },
 {
  "name": "유미미",
  "race": "수인",
  "img": "images/048.webp",
  "aliases": [],
  "isSkin": false,
  "base": "유미미",
  "title": ""
 },
 {
  "name": "이드",
  "race": "엘프",
  "img": "images/065.webp",
  "aliases": [],
  "isSkin": false,
  "base": "이드",
  "title": ""
 },
 {
  "name": "이드 (재활)",
  "race": "엘프",
  "img": "images/127.webp",
  "aliases": [
   "이드재활",
   "재활이드",
   "이드(재활)"
  ],
  "isSkin": true,
  "base": "이드",
  "title": "재활"
 },
 {
  "name": "이프리트",
  "race": "정령",
  "img": "images/002.webp",
  "aliases": [],
  "isSkin": false,
  "base": "이프리트",
  "title": ""
 },
 {
  "name": "잉클",
  "race": "정령",
  "img": "images/107.webp",
  "aliases": [],
  "isSkin": false,
  "base": "잉클",
  "title": ""
 },
 {
  "name": "제이드",
  "race": "용족",
  "img": "images/011.webp",
  "aliases": [],
  "isSkin": false,
  "base": "제이드",
  "title": ""
 },
 {
  "name": "죠안",
  "race": "요정",
  "img": "images/081.webp",
  "aliases": [],
  "isSkin": false,
  "base": "죠안",
  "title": ""
 },
 {
  "name": "쥬비",
  "race": "정령",
  "img": "images/033.webp",
  "aliases": [],
  "isSkin": false,
  "base": "쥬비",
  "title": ""
 },
 {
  "name": "쵸피",
  "race": "수인",
  "img": "images/049.webp",
  "aliases": [],
  "isSkin": false,
  "base": "쵸피",
  "title": ""
 },
 {
  "name": "카렌",
  "race": "요정",
  "img": "images/050.webp",
  "aliases": [],
  "isSkin": false,
  "base": "카렌",
  "title": ""
 },
 {
  "name": "칸나",
  "race": "엘프",
  "img": "images/024.webp",
  "aliases": [],
  "isSkin": false,
  "base": "칸나",
  "title": ""
 },
 {
  "name": "칸타",
  "race": "요정",
  "img": "images/079.webp",
  "aliases": [],
  "isSkin": false,
  "base": "칸타",
  "title": ""
 },
 {
  "name": "캐시",
  "race": "엘프",
  "img": "images/096.webp",
  "aliases": [],
  "isSkin": false,
  "base": "캐시",
  "title": ""
 },
 {
  "name": "캬롯",
  "race": "요정",
  "img": "images/067.webp",
  "aliases": [],
  "isSkin": false,
  "base": "캬롯",
  "title": ""
 },
 {
  "name": "코미",
  "race": "수인",
  "img": "images/003.webp",
  "aliases": [],
  "isSkin": false,
  "base": "코미",
  "title": ""
 },
 {
  "name": "코미 (수영복)",
  "race": "수인",
  "img": "images/112.webp",
  "aliases": [
   "코미수영복",
   "수영복코미",
   "코미(수영복)"
  ],
  "isSkin": true,
  "base": "코미",
  "title": "수영복"
 },
 {
  "name": "큐이",
  "race": "요정",
  "img": "images/051.webp",
  "aliases": [],
  "isSkin": false,
  "base": "큐이",
  "title": ""
 },
 {
  "name": "클로에",
  "race": "요정",
  "img": "images/039.webp",
  "aliases": [],
  "isSkin": false,
  "base": "클로에",
  "title": ""
 },
 {
  "name": "키디언",
  "race": "용족",
  "img": "images/019.webp",
  "aliases": [],
  "isSkin": false,
  "base": "키디언",
  "title": ""
 },
 {
  "name": "키샤",
  "race": "유령",
  "img": "images/110.webp",
  "aliases": [],
  "isSkin": false,
  "base": "키샤",
  "title": ""
 },
 {
  "name": "타이다",
  "race": "엘프",
  "img": "images/052.webp",
  "aliases": [],
  "isSkin": false,
  "base": "타이다",
  "title": ""
 },
 {
  "name": "티그",
  "race": "수인",
  "img": "images/054.webp",
  "aliases": [],
  "isSkin": false,
  "base": "티그",
  "title": ""
 },
 {
  "name": "티그 (영웅)",
  "race": "수인",
  "img": "images/118.webp",
  "aliases": [
   "티그영웅",
   "영웅티그",
   "티그(영웅)"
  ],
  "isSkin": true,
  "base": "티그",
  "title": "영웅"
 },
 {
  "name": "파트라",
  "race": "요정",
  "img": "images/053.webp",
  "aliases": [],
  "isSkin": false,
  "base": "파트라",
  "title": ""
 },
 {
  "name": "페스타",
  "race": "엘프",
  "img": "images/028.webp",
  "aliases": [],
  "isSkin": false,
  "base": "페스타",
  "title": ""
 },
 {
  "name": "포셔",
  "race": "마녀",
  "img": "images/032.webp",
  "aliases": [],
  "isSkin": false,
  "base": "포셔",
  "title": ""
 },
 {
  "name": "폴랑",
  "race": "요정",
  "img": "images/083.webp",
  "aliases": [],
  "isSkin": false,
  "base": "폴랑",
  "title": ""
 },
 {
  "name": "프리클",
  "race": "마녀",
  "img": "images/018.webp",
  "aliases": [],
  "isSkin": false,
  "base": "프리클",
  "title": ""
 },
 {
  "name": "피라",
  "race": "용족",
  "img": "images/078.webp",
  "aliases": [],
  "isSkin": false,
  "base": "피라",
  "title": ""
 },
 {
  "name": "피코라",
  "race": "마녀",
  "img": "images/063.webp",
  "aliases": [],
  "isSkin": false,
  "base": "피코라",
  "title": ""
 },
 {
  "name": "하이디",
  "race": "엘프",
  "img": "images/104.webp",
  "aliases": [],
  "isSkin": false,
  "base": "하이디",
  "title": ""
 },
 {
  "name": "헤일리",
  "race": "엘프",
  "img": "images/072.webp",
  "aliases": [],
  "isSkin": false,
  "base": "헤일리",
  "title": ""
 },
 {
  "name": "헤일리 (멀쩡)",
  "race": "엘프",
  "img": "images/125.webp",
  "aliases": [
   "헤일리멀쩡",
   "멀쩡헤일리",
   "헤일리(멀쩡)"
  ],
  "isSkin": true,
  "base": "헤일리",
  "title": "멀쩡"
 },
 {
  "name": "힐데",
  "race": "엘프",
  "img": "images/058.webp",
  "aliases": [],
  "isSkin": false,
  "base": "힐데",
  "title": ""
 }
];
