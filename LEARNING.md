# B4-1 학습 노트: 나를 소개하는 웹페이지 처음부터 만들기

> **문과 중졸도 이해할 수 있게** — 전에 코딩을 한 번도 해본 적 없는 사람이 읽어도 이해할 수 있도록 쓴 학습 노트입니다.

---

## 📖 목차

1. [초심자를 위한 용어집](#1-초심자를-위한-용어집)
2. [과제 해석 및 분석](#2-과제-해석-및-분석)
3. [과제를 진행하기 위한 기초](#3-과제를-진행하기-위한-기초)
4. [각 기초를 익히기 위한 간단한 체험 예제](#4-각-기초를-익히기-위한-간단한-체험-예제)
5. [과제를 작게 쪼개기: 잡 → 워크 → 워크플로우](#5-과제를-작게-쪼개기-잡--워크--워크플로우)
6. [워크플로우별 트레이드오프, 이슈, 트러블슈팅](#6-워크플로우별-트레이드오프-이슈-트러블슈팅)
7. [과제 완료 후 학습한 내용 정리](#7-과제-완료-후-학습한-내용-정리)

---

## 1. 초심자를 위한 용어집

> "이 단어들이 전부 외계어처럼 보여도 괜찮습니다. 하나씩, 일상어로 풀어 설명합니다."

### 🌐 웹 페이지의 세 가지 재료

| 용어 | 쉬운 설명 | 비유 |
|------|-----------|------|
| **HTML** | 웹 페이지의 뼈대. 글자, 그림, 버튼이 어디에 놓일지 정하는 문서 | 건물의 골조 (어디에 방을 만들지 정함) |
| **CSS** | 웹 페이지의 외형. 색깔, 크기, 위치, 애니메이션을 꾸며주는 규칙 | 건물의 인테리어 (벽지, 조명, 가구 배치) |
| **JavaScript (JS)** | 웹 페이지에 움직임을 넣는 프로그램. 버튼 클릭 → 화면 변화 같은 동작 | 건물의 전기/수도/엘리베이터 (움직이게 만듦) |

### 🏗️ HTML 관련

| 용어 | 쉬운 설명 | 비유 |
|------|-----------|------|
| **태그 (Tag)** | HTML에서 "이 부분은 제목", "이 부분은 문단"이라고 표시하는 표지판 | 방문에 붙인 표지판 ("주방", "침실") |
| **시맨틱 태그 (Semantic Tag)** | 의미를 담은 태그. `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` 등 | "1층 안내데스크", "복도", "메인 홀"처럼 역할이 명확한 표지판 |
| **`<div>`** | 의미 없는 박스. "여기는 이걸로 묶자" 할 때 쓰지만 의미는 없음 | "방 1", "방 2"처럼 이름만 있고 용도는 모르는 표지판 |
| **요소 (Element)** | 여는 태그 + 내용 + 닫는 태그 하나 묶음. `<p>안녕</p>` 전체 | 한 방 전체 (문 + 내용 + 문) |
| **속성 (Attribute)** | 태그에 추가 정보를 주는 것. `<a href="...">`에서 `href` | 방문에 붙인 비상구 표시 (추가 정보) |
| **`id`** | 한 페이지에 하나만 있는 고유 이름. CSS나 JS에서 "이거 찾아" 할 때 사용 | 주민등록번호 (한 사람만 가짐) |
| **`class`** | 여러 요소가 공유할 수 있는 그룹 이름 | 학교 반 이름 (여러 명이 같은 반) |

### 🎨 CSS 관련

| 용어 | 쉬운 설명 | 비유 |
|------|-----------|------|
| **셀렉터 (Selector)** | "이 태그에 이 스타일을 적용해라"라고 지목하는 방법 | "3반 학생들 전부 일어나세요" (지목) |
| **CSS 변수 (:root)** | 색깔, 크기 등을 이름으로 저장해 두고 여러 곳에서 재사용 | "우리 집 기본 색은 연한 파랑"이라고 정해두고 이곳저곳에 씀 |
| **Flexbox** | 요소들을 한 줄(가로 또는 세로)로 정렬하는 CSS 기능 | 책을 책장에 한 줄로 꽂는 것 |
| **Grid** | 요소들을 바둑판처럼 행과 열로 정렬하는 CSS 기능 | 책상에 책을 격자 모양으로 배열하는 것 |
| **미디어 쿼리 (Media Query)** | "화면이 이만큼 좁으면 이 스타일로 바꿔라"는 조건문 | "창문이 768px보다 좁아지면 커튼을 반만 열어라" |
| **반응형 디자인 (Responsive)** | 화면 크기에 따라 레이아웃이 자동으로 바뀌는 설계 | 스마트폰을 돌리면 가로로 화면이 바뀌는 것 |
| **모바일 퍼스트 (Mobile First)** | 모바일 화면을 먼저 만들고, 점점 큰 화면으로 확장하는 방식 | 작은 방부터 꾸미고, 점점 큰 집으로 옮기며 확장 |
| **다크 모드 (Dark Mode)** | 배경을 어둡게, 글자를 밝게 바꾸는 테마 | 방의 조명을 무드등으로 바꾸는 것 |
| **`data-theme` 속성** | HTML 태그에 `data-theme="dark"`를 넣어 CSS가 테마를 바꾸게 하는 표시 | 방에 "무드등 모드" 스위치를 다는 것 |

### ⚡ JavaScript 관련

| 용어 | 쉬운 설명 | 비유 |
|------|-----------|------|
| **변수 (Variable)** | 데이터를 담는 상자. 이름을 붙여서 값을 저장 | 라벨이 붙은 서랍 (이름 서랍에 값을 넣음) |
| **`const`** | 한 번 넣으면 바꿀 수 없는 상자 (상수) | 봉인한 상자 (다시 열어 바꿀 수 없음) |
| **`let`** | 필요할 때 바꿀 수 있는 상자 (변수) | 열어보고 다시 넣을 수 있는 서랍 |
| **`var`** | 옛날 방식의 변수. 지금은 사용 안 함 (오류의 원인) | 낡은 서랍 (잘 안 닫혀서 위험 — 쓰지 말 것) |
| **함수 (Function)** | "이렇게 하면 저렇게 해라"는 작업 지시서. 이름을 붙여서 재사용 | 요리 레시피 (같은 재료로 같은 요리를 여러 번 만듦) |
| **객체 (Object)** | 여러 데이터를 이름과 함께 하나로 묶은 것 | 명함 (이름, 전화번호, 이메일이 한 장에) |
| **배열 (Array)** | 데이터를 순서대로 나열한 목록 | 책장 (책이 순서대로 꽂혀 있음) |
| **DOM** | HTML 문서를 JavaScript가 조작할 수 있게 만든 구조 | 건물의 설계도를 원격 조종 패널로 바꾼 것 |
| **이벤트 (Event)** | 사용자의 행동. 클릭, 스크롤, 키보드 입력 등 | 초인종 ("누가 왔다"는 신호) |
| **`addEventListener`** | "이 버튼 클릭하면 이 함수 실행해라"라고 연결하는 것 | 초인종을 누르면 집 안에서 "누구세요?" 하고 대답하게 연결 |
| **`onclick` (인라인)** | HTML 태그 안에 직접 `onclick="..."` 쓰는 방식 — 사용 금지 | 건물 벽에 칠판으로 직접 적는 것 (유지보수 어려움) |
| **`fetch`** | 다른 곳(서버)에서 데이터를 가져오는 JS 명령 | 택배 주문 ("이 주소에서 물건 배달해 줘") |
| **`async / await`** | "데이터 올 때까지 기다렸다가 다음 줄 실행"이라는 지시 | 배달이 올 때까지 기다렸다가 식사하기 |
| **`try / catch`** | "혹시 에러 나면 여기서 처리해라"는 안전망 | 요리하다가 불이 나면 소화기를 쓰는 대비책 |
| **`localStorage`** | 브라우저 안에 데이터를 저장하는 작은 공간. 새로고침해도 남음 | 브라우저 안의 작은 서랍 (꺼도 데이터가 남아 있음) |
| **상태 (State)** | 지금 화면이 어떤 상황인지를 나타내는 데이터 | 방의 현재 상태 ("불 켜짐", "에어컨 켜짐") |
| **렌더링 (Rendering)** | 데이터를 바탕으로 화면을 그리는 것 | 빈 캔버스에 그림을 그리는 것 |
| **화살표 함수 (Arrow Function)** | `function` 대신 `() => {}` 쓰는 간결한 함수 문법 | "요리사" 대신 "요리"라고 줄여 부르는 것 |

### 📡 API / 통신 관련

| 용어 | 쉬운 설명 | 비유 |
|------|-----------|------|
| **API** | 프로그램끼리 대화하는 창구. 데이터를 요청하고 받는 규칙 | 은행 창구 (요청 → 처리 → 결과 전달) |
| **GitHub API** | GitHub에서 "이 사용자의 저장소 목록을 줘"라고 데이터를 받아오는 창구 | GitHub에 전화해서 "이 사람이 만든 프로젝트 목록 불러줘" |
| **레이트 리밋 (Rate Limit)** | 너무 많이 요청하면 "잠깐만, 너무 많이 묻지 마"하고 차단하는 제한 | 식당에서 "1인 1주문만 가능합니다" 제한 |
| **JSON** | 데이터를 텍스트로 표현하는 형식. API가 데이터를 보낼 때 주로 사용 | 데이터를 담은 표준화된 편지 양식 |
| **HTTP 상태 코드** | 서버가 "어떻게 됐는지" 알려주는 번호. 200=성공, 403=거부, 404=없음 | 우편물 배달 결과 (200=배달 완료, 404=주소 없음) |
| **`IntersectionObserver`** | "이 요소가 화면에 보이면 알려줘"라고 감시하는 브라우저 기능 | CCTV가 "이 구역에 사람 들어오면 알려줘" 하고 감시 |
| **Formspree** | 폼 데이터를 이메일로 전송해주는 외부 서비스 | 우체국 대행 서비스 (편지를 대신 보내줌) |

### 🚀 배포 관련

| 용어 | 쉬운 설명 | 비유 |
|------|-----------|------|
| **GitHub Pages** | GitHub 저장소의 파일을 인터넷에 올려주는 무료 배포 서비스 | GitHub에서 무료로 빌려주는 전시장 |
| **배포 (Deploy)** | 만든 웹사이트를 인터넷에 올려서 누구나 접속할 수 있게 하는 것 | 연극을 무대에서 공연하는 것 (연습 → 실제 공연) |
| **정적 호스팅 (Static Hosting)** | 서버 프로그램 없이 미리 만들어진 HTML/CSS/JS 파일만 배포 | 완성된 책을 책장에 진열하는 것 (실시간 제작 X) |

---

## 2. 과제 해석 및 분석

> "이 과제가 도대체 뭘 만들라는 건지, 처음부터 끝까지 풀어서 설명합니다."

### 2.1 한 줄 요약

**순수 HTML, CSS, JavaScript만으로 자기소개 포트폴리오 웹페이지를 만들고, GitHub Pages에 배포하라.**

### 2.2 과제가 원하는 것

이 과제는 React나 Vue 같은 프레임워크를 배우기 **전에**, 웹이 원리적으로 어떻게 동작하는지 직접 체험하는 것이 목표입니다. 핵심은 "예쁜 디자인"이 아니라 **"이벤트 → 상태 → 렌더링" 흐름**을 이해하는 것입니다.

```
프레임워크가 없다 (React, Vue, jQuery 전부 금지)
    ↓
직접 만들어야 한다 (HTML로 구조, CSS로 외형, JS로 동작)
    ↓
"버튼 클릭 → 상태 바뀜 → 화면 바뀜" 흐름을 직접 구현
    ↓
이것이 React가 대신 해주는 일의 원리
    ↓
나중에 React를 배울 때 "아, 이걸 자동으로 해주는구나" 하고 이해
```

### 2.3 반드시 해야 하는 것 (필수)

| # | 요구사항 | 왜 필요한가? |
|---|---------|-------------|
| 1 | **순수 HTML/CSS/JS만 사용** | 프레임워크의 도움 없이 웹의 원리 직접 체득 |
| 2 | **반응형 레이아웃** | 모바일/데스크톱 어디서든 보이게 |
| 3 | **다크 모드 + 새로고침 후 유지** | 이벤트 → 상태 → 렌더링 + localStorage |
| 4 | **GitHub API로 프로젝트 목록 불러오기** | 비동기 데이터 처리 (fetch, async/await) |
| 5 | **로딩/성공/에러/빈 상태 UI** | 비동기 처리의 현실적 경험 |
| 6 | **Contact 폼 유효성 검사** | 실시간 입력 검증 + 에러 메시지 |
| 7 | **`addEventListener` 사용 (인라인 onclick 금지)** | 관심사 분리 (HTML과 JS를 섞지 않음) |
| 8 | **`const`/`let` 사용 (`var` 금지)** | 모던 JS 문법 습관 |
| 9 | **GitHub Pages 배포** | 실제 인터넷에 공개 |
| 10 | **스크린샷 3종 (데스크톱/모바일/다크모드)** | 결과물 증빙 |

### 2.4 금지 사항

| 금지 | 이유 |
|------|------|
| React, Vue, jQuery, Bootstrap, Tailwind | 순수 웹 기술로 원리를 체득하는 것이 목적 |
| `var` | `const`/`let`이 더 안전 (변수 범위 오류 방지) |
| 인라인 `onclick` | HTML과 JS가 섞여 유지보수 어려움 |
| 인라인 `style="..."` | HTML과 CSS가 섞여 유지보수 어려움 |

### 2.5 허용 사항

| 허용 | 비고 |
|------|------|
| Font Awesome (아이콘) | 외부 아이콘 라이브러리 |
| Google Fonts (웹 폰트) | 외부 폰트 |
| Formspree (폼 메일 전송) | 백엔드 없이 폼을 이메일로 전송하는 서비스 |

### 2.6 평가 기준 분석

| 항목 | 무엇을 보는가 | 우리가 대비한 것 |
|------|-------------|-----------------|
| **기능 동작** | 반응형, 다크모드 유지, 햄버거 메뉴, 스크롤, API 로딩/에러/빈, 폼 검증 | 688줄 CSS + 471줄 JS로 전부 구현, 자동 검증 41/41 통과 |
| **구조/설계** | 파일 분리 이유, 시맨틱 태그 기준, CSS 변수 이점, addEventListener vs onclick | README에 분리 이유, 시맨틱 태그 기준, CSS 변수 3가지 이점, 인라인 0건 |
| **개념 이해** | "이벤트 → 상태 → 렌더링" 흐름 추적, async/await 분기, 배열 메서드, Flex vs Grid | README에 다크모드/API/폼 3가지 흐름 추적, try/catch 분기 설명, map/filter 단계, Flex/Grid 비교 |
| **통합 설명** | state 객체를 따로 만든 이유, 모바일 퍼스트 이유 | README에 단일 진실 공급원 설명, 점진적 향상 원칙 설명 |

### 2.7 핵심 도전: "이벤트 → 상태 → 렌더링" 흐름

이 과제의 핵심은 다음 흐름을 **프레임워크 없이** 직접 구현하는 것입니다:

```
사용자가 버튼을 누른다 (이벤트)
    ↓
state 객체의 값이 바뀐다 (상태 변경)
    ↓
바뀐 state를 바탕으로 화면을 다시 그린다 (렌더링)
```

본 프로젝트에서 이 흐름이 나타나는 4곳:

| # | 예시 | 이벤트 | 상태 변경 | 렌더링 |
|---|------|--------|-----------|--------|
| 1 | 다크 모드 | 테마 토글 클릭 | `state.theme = 'dark'` | `data-theme` 속성 설정 → CSS 변수 교체 → 전체 화면 색상 변경 |
| 2 | GitHub API | 페이지 로드 | `state.status = 'loading'` → `'success'` | `renderProjects()`가 status별로 스피너/카드/에러/빈 UI 출력 |
| 3 | 폼 검증 | 입력 타이핑 | `validateField()` 결과 | `showFieldError()`로 에러 메시지 표시/숨김 |
| 4 | 프로젝트 필터 | 필터 버튼 클릭 | `state.activeFilter = 'JavaScript'` | `renderProjects()`가 필터된 목록으로 재렌더링 |

> **왜 이것이 중요한가?** React는 이 흐름을 자동화합니다. "state 바꾸면 화면이 자동으로 바뀜". 하지만 그 "자동"이 뭘 하는지 모르면 React도 이해할 수 없습니다. 이 과제는 그 "자동"을 직접 손으로 해보는 것입니다.

---

## 3. 과제를 진행하기 위한 기초

> "이 과제를 하려면 무엇을 알아야 하는지, 그리고 그것이 왜 필요한지 설명합니다."

### 3.1 기초 1: HTML 구조와 시맨틱 태그

**무엇을 아야 하나?** 웹 페이지의 뼈대를 의미 있는 태그로 만드는 방법

**왜 필요한가?** 화면의 구조가 있어야 CSS로 꾸미고 JS로 움직일 수 있습니다. 그리고 `<div>`만 쓰면 "이 부분이 왜 있는지" 모르지만, `<header>`, `<nav>`, `<section>`을 쓰면 "이건 헤더", "이건 메뉴"가 명확해집니다.

**핵심 개념:**
- 시맨틱 태그 = 의미를 담은 태그
- `<header>`: 사이트 상단 (로고, 메뉴)
- `<nav>`: 내비게이션 링크 묶음
- `<main>`: 문서의 핵심 콘텐츠 (한 페이지에 1개)
- `<section>`: 주제별로 묶인 콘텐츠 단위
- `<article>`: 독립적으로 이해되는 단위 (카드 하나)
- `<footer>`: 사이트 하단 (저작권, 링크)

**본 프로젝트의 구조:**
```html
<header>   ← 사이트 헤더 (로고, 메뉴, 테마 토글)
<main>
  <section id="hero">      ← 소개 영역
  <section id="about">     ← 자기소개
  <section id="skills">    ← 기술 스택
  <section id="projects">  ← GitHub 프로젝트 (API 연동)
  <section id="contact">   ← 연락처 + 폼
</main>
<footer>   ← 저작권, 링크
```

### 3.2 기초 2: CSS 변수와 테마 관리

**무엇을 아야 하나?** 색상, 크기 등을 변수로 정의하고, 변수만 바꿔서 전체 테마를 전환하는 방법

**왜 필요한가?** 다크 모드를 구현하려면 "라이트 모드의 모든 색"을 "다크 모드의 모든 색"으로 바꿔야 합니다. CSS 변수가 없으면 색상을 쓰는 모든 곳을 일일이 바꿔야 합니다. 변수가 있으면 변수 정의만 바꾸면 됩니다.

**핵심 개념:**
```css
/* 라이트 모드 (기본) */
:root {
  --color-bg: #f8fafc;      /* 배경: 밝은 회색 */
  --color-text: #0f172a;    /* 글자: 어두운 남색 */
  --color-primary: #7c3aed; /* 포인트: 보라 */
}

/* 다크 모드 — 같은 이름의 변수만 재정의 */
[data-theme="dark"] {
  --color-bg: #020617;      /* 배경: 거의 검정 */
  --color-text: #e2e8f0;    /* 글자: 밝은 회색 */
  --color-primary: #a78bfa; /* 포인트: 밝은 보라 */
}

/* 본문에서는 변수 이름만 사용 */
body {
  background: var(--color-bg);
  color: var(--color-text);
}
```

**마법:** `data-theme="dark"`가 붙으면, `--color-bg`가 자동으로 검정으로 바뀌고, `var(--color-bg)`를 쓴 모든 곳이 자동으로 바뀝니다.

### 3.3 기초 3: 이벤트 처리 (addEventListener)

**무엇을 아야 하나?** "버튼 클릭하면 이 함수 실행"을 연결하는 방법

**왜 필요한가?** 모든 상호작용(클릭, 스크롤, 입력)은 이벤트로 시작합니다. 이벤트를 처리하지 못하면 화면이 정적입니다.

**핵심 개념:**
```javascript
// ❌ 인라인 onclick (사용 금지 — HTML과 JS가 섞임)
<button onclick="toggleMenu()">메뉴</button>

// ✅ addEventListener (사용 — HTML과 JS가 분리됨)
// HTML: <button class="nav-toggle">메뉴</button>
// JS:
const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', toggleMenu);
```

**addEventListener가 좋은 이유:**
1. 하나의 이벤트에 여러 함수 연결 가능
2. HTML과 JS가 분리됨 (유지보수 용이)
3. `removeEventListener`로 제거 가능
4. 캡처/once/passive 등 세부 옵션 사용 가능

**본 프로젝트의 이벤트 연결 (10곳):**
- `navToggle.click` → `toggleMenu()` (햄버거 메뉴)
- `themeToggle.click` → `setTheme()` (다크 모드)
- `scrollTopButton.click` → `window.scrollTo()` (맨 위로)
- `window.scroll` → `updateScrollUI()` (스크롤 시 헤더/버튼)
- `navLink.click` → `smoothScrollToSection()` (부드러운 스크롤)
- `formField.input` → `validateField()` (실시간 폼 검증)
- `contactForm.submit` → `validateForm() + fetch()` (폼 제출)
- `filters.click` → `applyProjectFilter()` (프로젝트 필터)
- `projectsStatus.click` → `fetchProjects()` (에러 시 다시 시도)
- `prefersDarkScheme.change` → `setTheme()` (시스템 다크모드 감지)

### 3.4 기초 4: 상태 관리와 렌더링

**무엇을 아야 하나?** 화면이 의존하는 데이터를 한 곳에 모으고, 데이터가 바뀌면 화면을 다시 그리는 방법

**왜 필요한가?** 이 과제의 핵심입니다. "이벤트 → 상태 변경 → 렌더링" 흐름을 구현하려면, 상태를 체계적으로 관리해야 합니다.

**핵심 개념:**

```javascript
// 1. 상태를 한 곳에 모음 (단일 진실 공급원)
const state = {
  theme: 'light',      // 현재 테마
  menuOpen: false,     // 메뉴 열림/닫힘
  projects: [],        // GitHub에서 받아온 프로젝트
  filteredProjects: [],// 필터된 프로젝트
  status: 'idle',      // loading/success/error/empty
  activeFilter: 'All', // 현재 필터
};

// 2. 이벤트 발생 → 상태 변경
function toggleMenu() {
  state.menuOpen = !state.menuOpen;  // 상태 바꿈
  // 3. 상태에 따라 화면 갱신 (렌더링)
  elements.navMenu.classList.toggle('active', state.menuOpen);
}
```

**왜 state 객체를 따로 만드는가?**
1. 단일 진실 공급원: 여기저기 흩어진 변수가 제각각 수정되는 것을 방지
2. "화면 = 상태의 함수": 렌더 함수가 같은 상태를 읽어 일관된 화면을 만듦
3. 예측 가능한 흐름: "이벤트 → 상태 → 렌더링" 한 방향으로만 흐름
4. 디버깅 용이: "state가 뭔지 보면 화면이 왜 이렇게 생겼는지 안다"

### 3.5 기초 5: 비동기 데이터 처리 (fetch, async/await, try/catch)

**무엇을 아야 하나?** 외부 서버(GitHub API)에서 데이터를 가져오는 동안 화면이 멈추지 않게 하는 방법

**왜 필요한가?** GitHub API에서 데이터를 가져오려면 인터넷을 거쳐야 하므로 시간이 걸립니다. 그동안 "로딩 중"을 표시하지 않으면 빈 화면만 보입니다.

**핵심 개념: 4가지 상태**

```
fetchProjects() 시작
    ↓
state.status = 'loading' → "로딩 중..." 스피너 표시
    ↓
try {
  데이터 도착
    ↓
  데이터가 있음 → state.status = 'success' → 프로젝트 카드 그리드
  데이터가 없음 → state.status = 'empty'   → "표시할 프로젝트가 없습니다."
}
catch {
  에러 발생 → state.status = 'error' → "불러올 수 없습니다" + 다시 시도 버튼
}
```

**본 프로젝트의 구현:**
```javascript
const fetchProjects = async () => {
  state.status = 'loading';     // 1. 로딩 시작
  renderProjects();              // 스피너 표시

  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
    if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);

    const repos = await response.json();
    const visibleProjects = repos
      .filter(({ fork, archived }) => !fork && !archived)
      .slice(0, 9);

    state.projects = visibleProjects;
    state.status = visibleProjects.length ? 'success' : 'empty';
    renderProjects();            // 카드 또는 빈 상태
  } catch (error) {
    state.status = 'error';      // 2. 에러 처리
    renderProjects();            // 에러 UI + 다시 시도 버튼
  }
};
```

### 3.6 기초 6: 반응형 디자인 (모바일 퍼스트)

**무엇을 아야 하나?** 화면 크기에 따라 레이아웃이 자동으로 바뀌게 만드는 방법

**왜 필요한가?** 같은 페이지를 스마트폰, 태블릿, 데스크톱에서 모두 잘 보이게 해야 합니다.

**핵심 개념: 모바일 퍼스트**

```css
/* 1단계: 모바일 기본 스타일 (1단 구조, 햄버거 메뉴) */
.nav-menu { display: none; }      /* 모바일에서는 메뉴 숨김 */
.about__grid { display: block; }  /* 모바일에서는 1단으로 쌓음 */

/* 2단계: 768px 이상에서 태블릿/데스크톱 확장 */
@media (min-width: 768px) {
  .nav-menu { display: flex; }    /* 태블릿부터는 메뉴 보임 */
  .about__grid { display: grid; grid-template-columns: 1fr 2fr; }
}

/* 3단계: 1024px 이상에서 대형 데스크톱 확장 */
@media (min-width: 1024px) {
  .skills__grid { grid-template-columns: repeat(4, 1fr); }
}
```

**왜 모바일을 먼저 만드는가?**
1. 기본 스타일이 단순해짐 (1단, 최소 UI)
2. 모바일 기기가 데스크톱용 오버라이드를 다운로드하지 않음 (성능)
3. 핵심 경험을 먼저 만들고 점진적 향상 (Progressive Enhancement)

### 3.7 기초 7: localStorage로 상태 유지

**무엇을 아야 하나?** 브라우저에 데이터를 저장해서 새로고침해도 유지되게 만드는 방법

**왜 필요한가?** 사용자가 다크 모드를 켜고 새로고침했을 때, 다시 라이트 모드로 돌아가면 짜증납니다. localStorage에 테마를 저장하면 새로고침해도 유지됩니다.

**핵심 개념:**
```javascript
// 저장: 테마를 localStorage에 넣음
localStorage.setItem('theme', 'dark');

// 읽기: localStorage에서 테마를 가져옴
const savedTheme = localStorage.getItem('theme');  // 'dark' 또는 null

// 삭제 (필요 시)
localStorage.removeItem('theme');
```

**본 프로젝트의 다크 모드 유지 흐름:**
```
페이지 로드
    ↓
initializeTheme() 실행
    ↓
localStorage.getItem('theme') 확인
    ↓
저장된 값이 있음 → 그 값으로 테마 적용
저장된 값이 없음 → 시스템 설정(prefers-color-scheme) 확인 → 적용
    ↓
사용자가 토글 클릭 → setTheme() → localStorage.setItem()으로 저장
```

---

## 4. 각 기초를 익히기 위한 간단한 체험 예제

> "이론만 읽으면 잊어버립니다. 직접 타이핑해 보면 남습니다."

### 4.1 체험 1: 시맨틱 HTML 만들기 (기초 1)

**목표:** 의미 있는 태그로 웹 페이지 뼈대를 만들어 본다.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>내 소개</title>
</head>
<body>
  <header>
    <h1>홍길동의 홈페이지</h1>
    <nav>
      <a href="#about">소개</a>
      <a href="#contact">연락처</a>
    </nav>
  </header>

  <main>
    <section id="about">
      <h2>소개</h2>
      <p>안녕하세요. 저는 홍길동입니다.</p>
    </section>
    <section id="contact">
      <h2>연락처</h2>
      <p>email: hong@test.com</p>
    </section>
  </main>

  <footer>
    <p>© 2026 홍길동</p>
  </footer>
</body>
</html>
```

**체험 포인트:**
- `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` — 전부 시맨틱 태그
- `<div>`를 쓰지 않고 의미를 담은 태그 사용
- 스크린 리더가 "이건 헤더", "이건 메뉴"라고 인식 가능

### 4.2 체험 2: CSS 변수로 테마 만들기 (기초 2)

**목표:** CSS 변수를 정의하고, `data-theme`로 테마를 바꿔 본다.

```html
<!-- theme.html -->
<html data-theme="light">
<head>
<style>
:root {
  --color-bg: #ffffff;
  --color-text: #333333;
}
[data-theme="dark"] {
  --color-bg: #1a1a1a;
  --color-text: #e0e0e0;
}
body {
  background: var(--color-bg);
  color: var(--color-text);
  transition: background 0.3s, color 0.3s;
}
</style>
</head>
<body>
  <h1>테마 체험</h1>
  <p>이 버튼을 누르면 배경이 바뀝니다.</p>
  <button id="theme-btn">🌙 다크 모드</button>

<script>
const btn = document.getElementById('theme-btn');
btn.addEventListener('click', () => {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  btn.textContent = next === 'dark' ? '☀️ 라이트 모드' : '🌙 다크 모드';
});
</script>
</body>
</html>
```

**체험 포인트:**
- `:root`에 라이트 모드 색상 정의, `[data-theme="dark"]`에 다크 모드 색상 정의
- `body`는 `var(--color-bg)`만 참조 → 테마 바꾸면 자동으로 색이 바뀜
- `setAttribute('data-theme', 'dark')` 한 줄로 전체 화면 색상 전환
- 본 프로젝트의 `setTheme()` 함수가 바로 이 패턴

### 4.3 체험 3: addEventListener로 카운터 만들기 (기초 3)

**목표:** 버튼 클릭 → 상태 변경 → 화면 갱신 흐름을 만들어 본다.

```html
<!-- counter.html -->
<html>
<head><style>
body { font-family: sans-serif; text-align: center; padding: 50px; }
#count { font-size: 48px; }
button { font-size: 20px; padding: 10px 30px; margin: 10px; }
</style></head>
<body>
  <p id="count">0</p>
  <button id="up">+1</button>
  <button id="down">-1</button>

<script>
// 1. 상태 객체
const state = { count: 0 };

// 2. 화면 갱신 함수 (렌더링)
function render() {
  document.getElementById('count').textContent = state.count;
}

// 3. 이벤트 → 상태 변경 → 렌더링
document.getElementById('up').addEventListener('click', () => {
  state.count += 1;  // 상태 변경
  render();           // 화면 갱신
});

document.getElementById('down').addEventListener('click', () => {
  state.count -= 1;  // 상태 변경
  render();           // 화면 갱신
});

// 초기 렌더링
render();
</script>
</body>
</html>
```

**체험 포인트:**
- `state.count`가 상태, `render()`가 렌더링
- "버튼 클릭(이벤트) → count 바꿈(상태) → render()로 화면 갱신(렌더링)"
- 이것이 본 프로젝트의 모든 기능이 따르는 패턴
- 인라인 `onclick` 없이 `addEventListener`만 사용

### 4.4 체험 4: fetch로 데이터 불러오기 (기초 5)

**목표:** 외부 API에서 데이터를 가져와 4가지 상태를 처리해 본다.

```html
<!-- fetch-demo.html -->
<html>
<head><style>
body { font-family: sans-serif; padding: 30px; }
#status { padding: 20px; margin: 10px 0; }
.loading { color: #666; }
.error { color: red; }
.empty { color: #999; }
.card { border: 1px solid #ddd; padding: 15px; margin: 10px 0; }
</style></head>
<body>
  <h1>사용자 목록</h1>
  <div id="status"></div>
  <div id="list"></div>

<script>
const state = { status: 'idle', users: [] };
const statusEl = document.getElementById('status');
const listEl = document.getElementById('list');

function render() {
  if (state.status === 'loading') {
    statusEl.className = 'loading';
    statusEl.textContent = '로딩 중...';
    listEl.innerHTML = '';
    return;
  }
  if (state.status === 'error') {
    statusEl.className = 'error';
    statusEl.innerHTML = '에러가 발생했습니다. <button onclick="fetchUsers()">다시 시도</button>';
    listEl.innerHTML = '';
    return;
  }
  if (state.status === 'empty') {
    statusEl.className = 'empty';
    statusEl.textContent = '데이터가 없습니다.';
    listEl.innerHTML = '';
    return;
  }
  // success
  statusEl.textContent = '';
  listEl.innerHTML = state.users
    .map(u => `<div class="card"><strong>${u.name}</strong> — ${u.email}</div>`)
    .join('');
}

async function fetchUsers() {
  state.status = 'loading';
  render();
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error('API 에러');
    const data = await res.json();
    state.users = data.slice(0, 5);
    state.status = state.users.length ? 'success' : 'empty';
  } catch (err) {
    state.status = 'error';
  }
  render();
}

fetchUsers();
</script>
</body>
</html>
```

**체험 포인트:**
- 4가지 상태: `loading` → `success`/`empty` → `error`
- `async/await`로 데이터를 기다림
- `try/catch`로 에러 처리
- `render()` 함수가 `state.status`를 보고 4가지로 분기
- 본 프로젝트의 `fetchProjects()` + `renderProjects()`가 바로 이 패턴

### 4.5 체험 5: localStorage로 상태 유지 (기초 7)

**목표:** 새로고침해도 테마가 유지되게 만들어 본다.

```html
<!-- persist-theme.html -->
<html data-theme="light">
<head><style>
:root { --bg: #fff; --text: #333; }
[data-theme="dark"] { --bg: #1a1a1a; --text: #e0e0e0; }
body { background: var(--bg); color: var(--text); font-family: sans-serif; padding: 40px; }
button { font-size: 18px; padding: 10px 20px; }
</style></head>
<body>
  <h1>새로고침해도 유지되는 테마</h1>
  <button id="toggle">🌙 테마 바꾸기</button>

<script>
// 1. 페이지 로드 시 저장된 테마 읽기
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

// 2. 토글 클릭 시 테마 바꾸고 저장
document.getElementById('toggle').addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);  // ← 저장! 새로고침해도 유지
});
</script>
</body>
</html>
```

**체험 포인트:**
- `localStorage.setItem('theme', next)`: 테마를 브라우저에 저장
- `localStorage.getItem('theme')`: 페이지 로드 시 저장된 테마 읽기
- 새로고침해도 저장된 테마가 적용됨
- 본 프로젝트의 `initializeTheme()` + `setTheme()`이 바로 이 패턴

### 4.6 체험 6: 미디어 쿼리로 반응형 만들기 (기초 6)

**목표:** 화면 크기에 따라 레이아웃이 바뀌게 만들어 본다.

```html
<!-- responsive.html -->
<html>
<head><style>
/* 모바일 기본: 1단 */
.container { display: block; padding: 15px; }
.box {
  background: #7c3aed; color: white;
  padding: 30px; margin: 10px 0; text-align: center;
  border-radius: 12px;
}

/* 768px 이상: 2단 그리드 */
@media (min-width: 768px) {
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
}

/* 1024px 이상: 3단 그리드 */
@media (min-width: 1024px) {
  .container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style></head>
<body>
  <div class="container">
    <div class="box">박스 1</div>
    <div class="box">박스 2</div>
    <div class="box">박스 3</div>
  </div>
</body>
</html>
```

**체험 포인트:**
- 모바일(기본): 박스가 세로로 1단 쌓임
- 768px 이상: 2단 가로 배치
- 1024px 이상: 3단 가로 배치
- `min-width`를 쓰는 것 = 모바일 퍼스트
- 브라우저 창을 줄이거나 늘려보면 레이아웃이 자동으로 바뀜
- 본 프로젝트가 `@media (min-width: 768px)`와 `@media (min-width: 1024px)`를 사용한 것과 동일

### 4.7 체험 7: 폼 유효성 검사 (기초 4 + 3)

**목표:** 입력할 때마다 실시간으로 에러를 검사해 본다.

```html
<!-- form-validation.html -->
<html>
<head><style>
body { font-family: sans-serif; padding: 40px; max-width: 400px; }
.form-group { margin: 15px 0; }
label { display: block; margin-bottom: 5px; }
input, textarea { width: 100%; padding: 8px; border: 1px solid #ccc; }
.input-error { border-color: red; }
.error-message { color: red; font-size: 13px; margin-top: 3px; }
</style></head>
<body>
  <form id="my-form">
    <div class="form-group">
      <label>이름</label>
      <input id="name" type="text">
      <p class="error-message" id="name-error"></p>
    </div>
    <div class="form-group">
      <label>이메일</label>
      <input id="email" type="email">
      <p class="error-message" id="email-error"></p>
    </div>
    <button type="submit">제출</button>
  </form>

<script>
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name, value) {
  if (!value.trim()) return '필수 항목입니다.';
  if (name === 'email' && !emailPattern.test(value.trim()))
    return '올바른 이메일 형식이 아닙니다.';
  return '';  // 에러 없음
}

function showFieldError(fieldName, message) {
  const field = document.getElementById(fieldName);
  const errorEl = document.getElementById(fieldName + '-error');
  errorEl.textContent = message;
  field.classList.toggle('input-error', Boolean(message));
}

// 실시간 검증: 타이핑할 때마다 실행
['name', 'email'].forEach(name => {
  document.getElementById(name).addEventListener('input', (e) => {
    const message = validateField(name, e.target.value);
    showFieldError(name, message);
  });
});

// 제출 시 전체 검증
document.getElementById('my-form').addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;
  ['name', 'email'].forEach(name => {
    const message = validateField(name, document.getElementById(name).value);
    showFieldError(name, message);
    if (message) isValid = false;
  });
  if (isValid) alert('제출 성공!');
});
</script>
</body>
</html>
```

**체험 포인트:**
- `input` 이벤트: 타이핑할 때마다 실시간 검증
- 정규식(`/^[^\s@]+@.../`): 이메일 형식 검사
- `classList.toggle('input-error', ...)`: 에러 시 빨간 테두리
- 제출 시 전체 재검증
- 본 프로젝트의 `validateField()` + `showFieldError()`가 바로 이 패턴

---

## 5. 과제를 작게 쪼개기: 잡 → 워크 → 워크플로우

> "큰 산을 한 번에 오르지 말고, 캠프 → 베이스캠프 → 정상으로 나누듯이, 과제도 잡(Job) → 워크(Work) → 워크플로우(Workflow)로 나눕니다."

### 5.1 쪼개기 원칙

```
과제 (전체)
  └── 잡 (Job): 큰 단위의 작업. "이 잡이 끝나면 의미 있는 결과물이 나온다"
       └── 워크 (Work): 잡 안의 작은 단위. "이 워크가 끝나면 한 가지가 완성된다"
            └── 워크플로우 (Workflow): 워크를 실행하는 구체적 순서
```

### 5.2 전체 잡 분해도

```
과제: 순수 HTML/CSS/JS 포트폴리오 웹페이지 만들기
│
├── Job 1: HTML 구조 설계 (Structure)
├── Job 2: CSS 스타일링 및 반응형 (Style)
├── Job 3: 다크 모드 및 상태 관리 (Theme)
├── Job 4: GitHub API 연동 (API)
├── Job 5: 폼 유효성 검사 및 전송 (Form)
├── Job 6: 인터랙션 및 애니메이션 (Interaction)
├── Job 7: 배포 및 스크린샷 (Deploy)
└── Job 8: 문서화 및 평가 대비 (Docs)
```

### 5.3 각 잡별 워크 분해

#### Job 1: HTML 구조 설계 (Structure)

| 워크 | 내용 | 워크플로우 |
|------|------|-----------|
| W1-1 | 문서 뼈대 | `<!DOCTYPE html>`, `<html lang="ko">`, `<head>` (meta, title) |
| W1-2 | 시맨틱 섹션 | `<header>` + `<nav>`, `<main>`, 5개 `<section>`, `<footer>` |
| W1-3 | 각 섹션 내용 | Hero(소개), About(자기소개), Skills(기술), Projects(프로젝트), Contact(연락) |
| W1-4 | 접근성 속성 | `aria-label`, `aria-expanded`, `aria-controls`, `aria-live`, `skip-link` |
| W1-5 | 폼 구조 | `<form>` + 3개 `.form-group` (label + input + error message) |

#### Job 2: CSS 스타일링 및 반응형 (Style)

| 워크 | 내용 | 워크플로우 |
|------|------|-----------|
| W2-1 | CSS 변수 정의 | `:root`에 색상, 여백, 반경, 그림자, 전환 시간 정의 |
| W2-2 | 다크 모드 변수 | `[data-theme="dark"]`에 같은 이름 변수 재정의 |
| W2-3 | 기본 레이아웃 | 모바일 기본 (1단, 햄버거 메뉴, 세로 쌓기) |
| W2-4 | 태블릿 확장 | `@media (min-width: 768px)` — 2단 그리드, 메뉴 보임 |
| W2-5 | 데스크톱 확장 | `@media (min-width: 1024px)` — 4단 스킬 그리드 |
| W2-6 | 컴포넌트 스타일 | 카드, 버튼, 스피너, 필터 버튼, 배지 |
| W2-7 | 스크롤 애니메이션 | `.reveal` → `.is-visible` 전환 (페이드인) |

#### Job 3: 다크 모드 및 상태 관리 (Theme)

| 워크 | 내용 | 워크플로우 |
|------|------|-----------|
| W3-1 | state 객체 | `state.theme`, `state.menuOpen`, `state.status` 등 정의 |
| W3-2 | setTheme 함수 | `data-theme` 속성 설정 + `localStorage` 저장 + 아이콘 갱신 |
| W3-3 | initializeTheme | 페이지 로드 시 저장된 테마 읽기 + 시스템 설정 감지 |
| W3-4 | 토글 이벤트 | `themeToggle.addEventListener('click', ...)` 연결 |
| W3-5 | 시스템 감지 | `prefersDarkScheme.addEventListener('change', ...)` |

#### Job 4: GitHub API 연동 (API)

| 워크 | 내용 | 워크플로우 |
|------|------|-----------|
| W4-1 | fetchProjects | `async` 함수 + `fetch` + `try/catch` |
| W4-2 | 4가지 상태 | loading → success/empty → error 분기 |
| W4-3 | renderProjects | status별 UI 생성 (스피너/카드/에러/빈) |
| W4-4 | createProjectCard | 프로젝트 데이터 → HTML 카드 문자열 |
| W4-5 | 언어 필터 | `getProjectLanguages()` + `renderFilters()` + `applyProjectFilter()` |
| W4-6 | 다시 시도 | 에러 상태에서 "다시 시도" 버튼 → `fetchProjects()` 재호출 |
| W4-7 | 레이트 리밋 대응 | 403 응답 시 에러 UI 표시 (시간당 60회 제한 안내) |

#### Job 5: 폼 유효성 검사 및 전송 (Form)

| 워크 | 내용 | 워크플로우 |
|------|------|-----------|
| W5-1 | validateField | 필수값, 이메일 형식, 메시지 길이(10자) 검사 |
| W5-2 | showFieldError | 에러 메시지 표시 + `.input-error` 클래스 토글 |
| W5-3 | 실시간 검증 | `input` 이벤트 → `validateField()` → `showFieldError()` |
| W5-4 | 제출 검증 | `submit` 이벤트 → `validateForm()` 전체 재검증 |
| W5-5 | Formspree 연동 | `fetch` POST로 폼 데이터 전송 → 성공/실패 UI |

#### Job 6: 인터랙션 및 애니메이션 (Interaction)

| 워크 | 내용 | 워크플로우 |
|------|------|-----------|
| W6-1 | 햄버거 메뉴 | `toggleMenu()` + `closeMenu()` + `aria-expanded` 갱신 |
| W6-2 | 부드러운 스크롤 | `scrollIntoView({ behavior: 'smooth' })` |
| W6-3 | 스크롤 UI | 60px 이상 → 헤더 스타일 변경, 300px 이상 → 맨 위 버튼 표시 |
| W6-4 | Reveal 애니메이션 | `IntersectionObserver` (threshold 0.25) → `.is-visible` |
| W6-5 | 타이핑 효과 | `setTimeout`으로 글자 하나씩 타이핑/삭제 (보너스) |

#### Job 7: 배포 및 스크린샷 (Deploy)

| 워크 | 내용 | 워크플로우 |
|------|------|-----------|
| W7-1 | GitHub 저장소 생성 | `giyeop-cody.github.io` (사용자 페이지 — URL이 `username.github.io`) |
| W7-2 | 파일 업로드 | `index.html`, `css/`, `js/`, `images/` 푸시 |
| W7-3 | GitHub Pages 활성화 | Settings → Pages → main 브랜치 → Save |
| W7-4 | 배포 확인 | `https://giyeop-cody.github.io` 접속 → 페이지 로드 |
| W7-5 | 스크린샷 3종 | 데스크톱, 모바일(DevTools), 다크모드(토글) 캡처 |

#### Job 8: 문서화 및 평가 대비 (Docs)

| 워크 | 내용 | 워크플로우 |
|------|------|-----------|
| W8-1 | README | 프로젝트 개요, 기능, 기술, 구조, 실행 방법, 스크린샷 |
| W8-2 | QUEST.md | 미션 소개, 학습 목표, 결과물, 요구사항, 제약사항 |
| W8-3 | eval 답변 | 평가 항목별 Q&A (기능/구조/개념/통합 4항목) |
| W8-4 | 자동 검증 | `validate-portfolio.mjs`로 41개 항목 자동 검증 |

### 5.4 워크플로우 실행 순서 (의존성 그래프)

```
Job 1 (HTML 구조)
  ↓
Job 2 (CSS 스타일) ← 구조가 있어야 꾸밀 수 있음
  ↓
Job 3 (다크 모드) ← CSS 변수가 있어야 테마 전환
Job 4 (API 연동)  ← HTML에 프로젝트 영역이 있어야 렌더링
Job 5 (폼 검사)   ← HTML에 폼이 있어야 검증
Job 6 (인터랙션)  ← HTML 요소가 있어야 이벤트 연결
  ↓ (Job 3~6 병렬 가능)
  ↓
Job 7 (배포) ← 전부 완성되어야 배포
  ↓
Job 8 (문서화) ← 배포 URL이 있어야 README에 작성
```

> **왜 이 순서인가?** 뼈대(1)가 있어야 꾸밀 수 있고(2), 꾸며야 테마를 바꿀 수 있고(3), 화면 요소가 있어야 데이터를 렌더링하고(4), 폼이 있어야 검증하고(5), 요소가 있어야 이벤트를 연결합니다(6). 전부 완성되어야 배포하고(7), 배포 URL이 있어야 문서를 씁니다(8).

---

## 6. 워크플로우별 트레이드오프, 이슈, 트러블슈팅

> "길을 걷다 보면 갈림길을 만납니다. 왜 이 길을 선택했는지, 다른 길은 왜 포기했는지, 그리고 길에서 넘어졌을 때 어떻게 일어났는지를 기록합니다."

### 6.1 Job 1 (HTML): 시맨틱 태그 vs `<div>` 남용

#### 🤔 선택의 기로

| 기준 | 시맨틱 태그 (`<header>`, `<nav>`, ...) | `<div>`만 쓰기 |
|------|---------------------------------------|----------------|
| 접근성 | ✅ 스크린 리더가 역할 인식 | ❌ 모두 "그룹"으로만 인식 |
| SEO | ✅ 검색엔진이 구조 파악 | ❌ 의미 전달 안 됨 |
| 코드 가독성 | ✅ "이건 헤더" 바로 앎 | ❌ class를 봐야 앎 |
| 지원 | 모든 현대 브라우저 지원 | 모든 브라우저 |

#### ✅ 선택: 시맨틱 태그

**이유:**
1. 과제에서 "시맨틱 태그를 사용했는가"를 평가
2. 스크린 리더 사용자가 페이지 구조를 이해할 수 있음
3. 코드를 읽을 때 `<section id="projects">`가 `<div class="projects">`보다 명확

#### ⚖️ 트레이드오프

- **포기한 것:** 없음 (시맨틱 태그는 단점이 거의 없음)
- **얻은 것:** 접근성, SEO, 가독성, 평가 기준 충족
- **판단:** 시맨틱 태그는 "안 쓸 이유가 없는" 선택

---

### 6.2 Job 2 (CSS): CSS 변수 vs 하드코딩

#### 🤔 선택의 기로

| 기준 | CSS 변수 (`var(--color)`) | 하드코딩 (`#7c3aed`) |
|------|--------------------------|---------------------|
| 다크 모드 | ✅ 변수만 재정의 → 전체 전환 | ❌ 모든 색상을 일일이 바꿔야 |
| 유지보수 | ✅ 한 곳만 수정 | ❌ 여러 곳 수정 |
| 일관성 | ✅ 같은 변수 = 같은 색 | ❌ 복사하다 보면 미세하게 다를 수 있음 |
| 브라우저 지원 | 모든 현대 브라우저 | 모든 브라우저 |

#### ✅ 선택: CSS 변수

**이유:**
1. 다크 모드 구현이 압도적으로 간단해짐 (변수 재정의만으로 전체 전환)
2. 색상을 바꾸고 싶으면 `:root` 한 곳만 수정
3. "디자인 토큰"이 문서화되어 확장이 쉬움

#### ⚖️ 트레이드오프

- **포기한 것:** 구형 브라우저(IE) 지원 — 하지만 과제에서 "최신 Chrome" 명시
- **얻은 것:** 다크 모드 1줄 구현, 유지보수성, 일관성
- **판단:** 다크 모드가 필수인 이 과제에서 CSS 변수는 선택이 아닌 필수

---

### 6.3 Job 2 (CSS): 모바일 퍼스트 vs 데스크톱 퍼스트

#### 🤔 선택의 기로

| 기준 | 모바일 퍼스트 (`min-width`) | 데스크톱 퍼스트 (`max-width`) |
|------|----------------------------|------------------------------|
| 기본 스타일 | 모바일 (단순) | 데스크톱 (복잡) |
| 확장 방향 | 점진적 향상 | 점진적 축소 |
| 성능 | ✅ 모바일이 데스크톱 코드 안 받음 | ❌ 모바일이 데스크톱 코드 다운 후 오버라이드 |
| CSS 복잡도 | ✅ 기본이 단순 | ❌ 기본이 복잡, 오버라이드 많음 |

#### ✅ 선택: 모바일 퍼스트

**이유:**
1. 기본 스타일이 단순 (1단, 햄버거 메뉴) → CSS 분기 복잡도 감소
2. 모바일 기기가 불필요한 데스크톱용 오버라이드를 다운로드하지 않음
3. 핵심 경험을 먼저 만들고 점진적 향상(Progressive Enhancement) 원칙

#### ⚖️ 트레이드오프

- **포기한 것:** 데스크톱 먼저 설계하는 익숙함 (많은 튜토리얼이 데스크톱 기준)
- **얻은 것:** 성능, 단순성, 모바일 사용자 경험
- **판단:** 과제에서 "반응형"을 요구하고 모바일 트래픽이 많은 시대 → 모바일 퍼스트

---

### 6.4 Job 2 (CSS): Flexbox vs Grid

#### 🤔 선택의 기로

| 기준 | Flexbox (1차원) | Grid (2차원) |
|------|----------------|-------------|
| 정렬 방향 | 한 방향 (가로 또는 세로) | 두 방향 (행과 열 동시) |
| 적합한 상황 | 너비가 다른 요소를 한 줄로 나열 | 균등한 크기의 카드를 바둑판으로 |
| 콘텐츠 크기 | 요소 크기에 맞춤 | 컨테이너를 나눔 |

#### ✅ 선택: 상황에 따라 둘 다 사용

**Flexbox를 쓴 곳 (1차원 정렬):**
- `.nav`: 로고, 메뉴, 토글 버튼을 가로로 배분
- `.hero__actions`: "프로젝트 보기", "문의하기" 버튼을 가로로
- `.contact__links`: 링크를 가로로 나열

**Grid를 쓴 곳 (2차원 배치):**
- `.skills__grid`: 4개 스킬 카드를 균등하게 바둑판으로
- `.projects-grid`: 프로젝트 카드를 `repeat(auto-fit, minmax(...))`로 균등 다열
- `.about__grid`: 사진 + 소개를 2열로

#### ⚖️ 트레이드오프

- **포기한 것:** 하나만 쓰는 단순함
- **얻은 것:** 각 상황에 맞는 최적의 레이아웃
- **판단:** "한 방향으로 늘어놓는 곳은 Flex, 행과 열로 정렬하는 곳은 Grid" — 둘을 상황에 맞게 쓰는 것이 정답

---

### 6.5 Job 3 (다크 모드): localStorage vs 시스템 설정 우선

#### 🤔 선택의 기로

| 기준 | localStorage 우선 | 시스템 설정 우선 |
|------|-------------------|-----------------|
| 사용자 의도 | ✅ 사용자가 명시적으로 선택한 것 | 시스템 설정이 사용자 의도와 다를 수 있음 |
| 첫 방문 | 시스템 설정 따름 (저장된 값 없을 때) | 시스템 설정 따름 |
| 새로고침 | ✅ 저장된 값 유지 | 시스템 설정이 바뀌면 따라감 |

#### ✅ 선택: localStorage 우선 + 시스템 설정 보조

**구현:**
```javascript
const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme');     // 1. 저장된 값 먼저 확인
  const initialTheme = savedTheme ||                     // 2. 있으면 그걸로
    (prefersDarkScheme.matches ? 'dark' : 'light');      // 3. 없으면 시스템 설정
  setTheme(initialTheme, Boolean(savedTheme));
};
```

**이유:**
1. 사용자가 명시적으로 선택한 테마가 시스템 설정보다 우선 — "내가 다크 모드를 켰으니 다크로 유지해라"
2. 첫 방문 시 저장된 값이 없으면 시스템 설정을 따름 — "시스템이 다크 모드면 다크로 시작"
3. 시스템 설정이 바뀌어도, 사용자가 명시적으로 선택한 적이 있으면(`localStorage`에 있으면) 유지

#### ⚖️ 트레이드오프

- **포기한 것:** 시스템 설정 변경 시 자동 반응 (사용자가 명시 선택한 경우)
- **얻은 것:** 사용자 의도 존중, 일관된 경험
- **판단:** "내가 선택한 테마가 내가 모르게 바뀌는 것"보다 "내가 선택한 테마가 유지되는 것"이 더 좋은 UX

---

### 6.6 Job 4 (API): GitHub API 레이트 리밋 — 🐛 이슈

#### 🐛 발생한 문제

GitHub API를 인증 없이 호출하면 시간당 60회 제한(레이트 리밋). 짧은 시간에 반복 새로고침하면 403 응답.

#### 🔍 원인 분석

GitHub API는 인증 없이 호출할 때 IP당 시간당 60회로 제한합니다. 개발 중 자주 새로고침하면 이 제한에 걸립니다.

#### 💡 해결책

1. **에러 상태 UI**: 403 응답 시 `state.status = 'error'` → "프로젝트를 불러올 수 없습니다" + 다시 시도 버튼
2. **안내**: README에 "짧은 시간 내 반복 새로고침을 피한다" 명시
3. **캐싱**: `fetch` 결과를 한 번 받아오면 페이지가 켜져 있는 동안 다시 요청하지 않음

#### ⚖️ 트레이드오프

- **포기한 것:** 실시간 최신 프로젝트 목록 (캐싱하지 않으므로)
- **얻은 것:** 레이트 리밋 대응, 사용자에게 상황 알림
- **판단:** 포트폴리오는 실시간이 필요 없음 → 에러 처리만으로 충분

---

### 6.7 Job 4 (API): 상태를 4가지로 분기 vs 2가지(성공/실패)

#### 🤔 선택의 기로

| 기준 | 4가지 상태 (loading/success/error/empty) | 2가지 (성공/실패) |
|------|----------------------------------------|-------------------|
| 사용자 경험 | ✅ "로딩 중", "빈 데이터" 명확히 구분 | ❌ 빈 데이터도 "실패"로 보일 수 있음 |
| 정확성 | ✅ 각 상황에 맞는 메시지 | ❌ "에러"인지 "데이터 없음"인지 구분 안 됨 |
| 코드 복잡도 | 분기 4개 | 분기 2개 |

#### ✅ 선택: 4가지 상태

**이유:**
1. "데이터가 없는 것"과 "에러가 난 것"은 다른 상황 → 다른 메시지가 필요
2. "로딩 중"을 표시하지 않으면 빈 화면 → 사용자가 "고장났나?" 오해
3. 과제에서 "로딩/에러/빈 상태가 구분되는가"를 평가

#### ⚖️ 트레이드오프

- **포기한 것:** 코드 단순함 (분기가 2개 더 많음)
- **얻은 것:** 정확한 상태 전달, 사용자 경험, 평가 기준 충족
- **판단:** "빈 데이터"를 "에러"로 표시하면 사용자가 혼란 → 4가지 분기가 정답

---

### 6.8 Job 5 (폼): 실시간 검증 vs 제출 시 검증

#### 🤔 선택의 기로

| 기준 | 실시간 검증 (input 이벤트) | 제출 시 검증 (submit 이벤트) |
|------|--------------------------|----------------------------|
| 사용자 경험 | ✅ 타이핑하자마자 피드백 | ❒ 제출할 때 한 번에 에러 표시 |
| 에러 수정 | ✅ 즉시 고칠 수 있음 | ❒ 어디가 틀렸는지 한 번에 봐야 함 |
| 성능 | 매 입력마다 검증 실행 | 제출 1회만 실행 |

#### ✅ 선택: 실시간 검증 + 제출 시 재검증 (둘 다)

**구현:**
```javascript
// 실시간: 타이핑할 때마다
field.addEventListener('input', () => {
  const message = validateField(name, field.value);
  showFieldError(name, message);
});

// 제출 시: 전체 재검증
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { isValid } = validateForm();  // 전체 필드 재검증
  if (!isValid) { /* 에러 표시 */ return; }
  // 전송...
});
```

**이유:**
1. 실시간: 사용자가 타이핑하자마자 "이메일 형식이 틀렸어요" 알려줌 → 즉시 수정
2. 제출 시: 실시간 검증을 우회해서 제출할 수 있는 경우 대비 (모든 필드 재검증)
3. 과제에서 "즉각적인 피드백이 표시되는가"를 평가

#### ⚖️ 트레이드오프

- **포기한 것:** 매 입력마다 검증 실행 (미세한 성능 오버헤드)
- **얻은 것:** 즉각적 피드백, 사용자 경험, 평가 기준 충족
- **판단:** 폼 검증은 사용자 경험이 우선 → 실시간 + 제출 시 둘 다

---

### 6.9 Job 5 (폼): Formspree 연동 — 🔥 트러블슈팅

#### 🐛 발생한 문제

포트폴리오는 정적 호스팅(GitHub Pages)이므로 백엔드 서버가 없음. 폼 제출 데이터를 이메일로 보낼 방법 필요.

#### 🔍 원인 분석

GitHub Pages는 정적 파일만 배포하므로, 서버 코드(PHP, Node.js 등)를 실행할 수 없습니다. 폼 데이터를 처리하려면 외부 서비스가 필요합니다.

#### 💡 해결책: Formspree

```javascript
const response = await fetch('https://formspree.io/f/xxxxxxx', {
  method: 'POST',
  body: formData,
  headers: { 'Accept': 'application/json' }
});
```

- Formspree: 폼 데이터를 받아서 이메일로 전송해주는 서비스
- 백엔드 없이 폼 기능 구현 가능
- 무료 요금제로 충분 (월 50건)

#### ⚖️ 트레이드오프

- **포기한 것:** 데이터 제어권 (Formspree 서버를 거침)
- **얻은 것:** 백엔드 없이 폼 전송 구현, 무료, 간단
- **판단:** 정적 호스팅에서 폼을 구현하는 가장 간단한 방법

---

### 6.10 Job 6 (인터랙션): IntersectionObserver vs 스크롤 이벤트

#### 🤔 선택의 기로

| 기준 | IntersectionObserver | scroll 이벤트 + 계산 |
|------|---------------------|-------------------|
| 성능 | ✅ 브라우저가 최적화 | ❌ 매 스크롤마다 계산 (CPU 부담) |
| 코드 | ✅ 간단 (콜백만) | ❌ `getBoundingClientRect()` + 계산 |
| 정확성 | ✅ 브라우저가 정확히 판단 | △ 계산이 복잡하면 부정확 |

#### ✅ 선택: IntersectionObserver

**이유:**
1. 스크롤 이벤트는 매 프레임 실행 → 성능 부담
2. IntersectionObserver는 브라우저가 최적화하여 "요소가 뷰포트에 들어왔을 때"만 콜백
3. `threshold: 0.25`로 "요소의 25%가 보일 때" 정확히 지정

#### ⚖️ 트레이드오프

- **포기한 것:** 구형 브라우저 지원 (IE) — 과제에서 "최신 Chrome" 명시
- **얻은 것:** 성능, 코드 단순성, 정확한 타이밍
- **판단:** 현대 브라우저에서는 IntersectionObserver가 스크롤 이벤트보다 압도적으로 좋음

---

## 7. 과제 완료 후 학습한 내용 정리

> "과제를 끝내고 나서, 무엇을 알게 되었는지, 무엇이 바뀌었는지 정리합니다."

### 7.1 배운 것: "이벤트 → 상태 → 렌더링" 흐름

**과제 전:** "웹 페이지는 정적인 문서다"
**과제 후:** "웹 페이지는 상태(state)의 거울이다. 상태가 바뀌면 화면이 바뀐다."

이 과제의 핵심은 "이벤트 → 상태 변경 → 렌더링" 흐름을 직접 구현하는 것이었습니다. 이 흐름을 4곳에서 경험했습니다:

| 기능 | 이벤트 | 상태 변경 | 렌더링 |
|------|--------|-----------|--------|
| 다크 모드 | 토글 클릭 | `state.theme = 'dark'` | `data-theme` 속성 → CSS 변수 교체 |
| GitHub API | 페이지 로드 | `state.status = 'success'` | `renderProjects()` → 카드 그리드 |
| 폼 검증 | 타이핑 | `validateField()` 결과 | `showFieldError()` → 에러 메시지 |
| 필터 | 버튼 클릭 | `state.activeFilter = 'JS'` | `renderProjects()` → 필터된 목록 |

> **이것이 왜 중요한가?** React가 자동으로 해주는 일이 바로 이것입니다. React에서는 `setState()` 한 줄로 상태를 바꾸면 화면이 자동으로 갱신됩니다. 이 과제에서는 그 "자동"을 직접 손으로 구현했습니다. 다음에 React를 배울 때 "아, 이걸 자동으로 해주는구나" 하고 이해할 수 있습니다.

### 7.2 배운 것: 상태를 한 곳에 모으는 것의 가치

```javascript
const state = {
  theme: 'light',
  menuOpen: false,
  projects: [],
  filteredProjects: [],
  status: 'idle',
  activeFilter: 'All',
};
```

state 객체 하나에 화면이 의존하는 모든 데이터를 모았습니다. 이것이 좋은 이유:

1. **단일 진실 공급원**: "지금 테마가 뭐야?" → `state.theme` 하나만 보면 됨
2. **예측 가능한 흐름**: 이벤트 → state 변경 → render() → 화면. 한 방향으로만 흐름
3. **디버깅 용이**: "화면이 이상해" → `console.log(state)` 한 줄로 원인 파악

> **React에서는?** `useState()`가 이 state 객체의 역할을 합니다. React는 state가 바뀌면 자동으로 render를 호출합니다. 이 과제에서는 그것을 수동으로 했습니다.

### 7.3 배운 것: 비동기 처리의 4가지 상태

```
로딩 (loading) → "기다려 주세요"
  ↓
성공 (success) → 데이터 있음 → 화면에 표시
빈 (empty)    → 데이터 없음 → "데이터가 없습니다"
에러 (error)  → 실패 → "다시 시도" 버튼
```

이 4가지를 구분하지 않으면:
- 로딩 중 빈 화면 → "고장났나?"
- 빈 데이터를 에러로 표시 → "왜 에러가 났지?" (실제로는 데이터가 없을 뿐)
- 에러를 빈 데이터로 표시 → "데이터가 없다고?" (실제로는 네트워크 문제)

> **이것은 모든 웹 앱의 기본입니다.** B4-2(React)에서도 `StateView` 컴포넌트로 같은 4가지를 처리했습니다. 이 패턴은 프레임워크가 바뀌어도 변하지 않습니다.

### 7.4 배운 것: CSS 변수의 마법

다크 모드를 CSS 변수 없이 구현하려면:
```css
/* 라이트 → 다크로 바꿀 때 일일이 수정 */
body { background: #020617; } /* was #f8fafc */
.header { background: #0f172a; } /* was #ffffff */
.card { background: #0f172a; } /* was #ffffff */
/* ... 수십 개 ... */
```

CSS 변수로 구현하면:
```css
[data-theme="dark"] {
  --color-bg: #020617;      /* 이것만 바꾸면 */
  --color-surface: #0f172a;  /* 이것만 바꾸면 */
}
/* body, header, card는 전부 var(--color-bg)를 참조하므로 자동으로 바뀜 */
```

> **핵심 인사이트:** "한 곳에서 바꾸면 전체가 바뀌는" 구조가 "여러 곳을 일일이 바꾸는" 구조보다 낫다. 이것이 "단일 진실 공급원" 원칙이다. JS의 state 객체도 같은 원리다.

### 7.5 배운 것: 관심사 분리

| 파일 | 역할 | 섞이면? |
|------|------|--------|
| `index.html` | 구조 (무엇이 있는가) | CSS/JS가 섞이면 구조를 보기 어려움 |
| `css/style.css` | 외형 (어떻게 보이는가) | HTML에 인라인 style이 섞이면 수정이 어려움 |
| `js/main.js` | 동작 (무엇을 하는가) | HTML에 onclick이 섞이면 로직을 찾기 어려움 |

이 과제에서:
- 인라인 `onclick`: **0건** (전부 `addEventListener`)
- 인라인 `style="..."`: **0건** (전부 CSS 파일)
- `var`: **0건** (전부 `const`/`let`)

> **왜 중요한가?** 나중에 "버튼 클릭이 안 되는데 왜 그래?"라고 할 때, HTML 파일이 아니라 `js/main.js`의 `bindEvents()`만 보면 됩니다. "색이 왜 이래?"라고 할 때, HTML이 아니라 `css/style.css`만 보면 됩니다. 파일이 분리되어 있으면 찾는 시간이 줄어듭니다.

### 7.6 배운 것: 모바일 퍼스트의 장점

모바일 퍼스트로 만들면:
1. 기본 스타일이 단순 (1단, 최소 UI) → CSS가 짧아짐
2. `min-width` 미디어쿼리로 "점점 더 큰 화면에서 추가" → 확장이 자연스러움
3. 모바일 사용자가 데스크톱용 CSS를 다운로드하지 않음 → 성능

> **핵심 인사이트:** "작은 것부터 만들고 점점 키우는 것"이 "큰 것부터 만들고 점점 줄이는 것"보다 쉽다. 이것이 "점진적 향상(Progressive Enhancement)" 원칙이다.

### 7.7 핵심 인사이트 3가지

1. **"화면 = 상태의 거울"**: state가 바뀌면 화면을 다시 그린다. 직접 DOM을 조작하는 것이 아니라, state를 바꾸고 render()를 호출한다. 이것이 React가 자동으로 해주는 일의 원리다.

2. **"한 곳에서 관리하면 전체가 통제된다"**: state 객체, CSS 변수 — 둘 다 "한 곳에서 정의하고 여러 곳에서 참조"하는 패턴이다. 이 패턴이 있으면 수정이 쉽고 일관성이 유지된다.

3. **"에러는 언제나 온다. 대비하자"**: API 호출은 언제나 실패할 수 있다. 레이트 리밋, 네트워크 끊김, 서버 다운 — 에러 상태 UI를 만들어 두면 사용자가 "왜 안 되지?" 당황하지 않는다.

### 7.8 다음 단계로 나아가기 위한 메모

| 주제 | 이 과제에서 | 다음에 배울 것 (B4-2) |
|------|-----------|----------------------|
| 상태 관리 | `const state = {}` 수동 관리 | React `useState()` 자동 관리 |
| 렌더링 | `innerHTML = ...` 수동 | React 자동 재렌더링 |
| 이벤트 → 상태 → 렌더링 | 수동으로 3단계 연결 | React가 자동으로 연결 |
| 컴포넌트 분리 | 없음 (파일 3개) | React 컴포넌트로 화면을 조각으로 나눔 |
| 라우팅 | 없음 (단일 페이지) | React Router로 여러 페이지 |
| API 상태 처리 | 수동 4분기 (loading/success/error/empty) | React `StateView` 또는 React Query |
| 폼 검증 | 수동 `validateField()` | React 폼 라이브러리 (React Hook Form) |
| 배포 | GitHub Pages (정적) | Vercel (빌드 + 배포) |

> **이 과제의 위치:** B4-1은 "프레임워크 없이 웹의 원리 체험"이고, B4-2는 "React로 그 원리를 구조화"하는 과제입니다. B4-1에서 수동으로 했던 것(상태 관리, 렌더링, 이벤트 연결)을 B4-2에서 React가 자동으로 해줍니다. "왜 React를 쓰는가?"에 대한 답이 B4-1에 있습니다.

---

> *이 학습 노트는 Codyssey AI/SW 기초 과정 B4-1 과제를 수행하며 학습한 내용을 정리한 것입니다.*
