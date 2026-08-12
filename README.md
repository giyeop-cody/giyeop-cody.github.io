# Vanilla Portfolio Mission


## 📌 과제 정보

| 항목 | 내용 |
|------|------|
| **과목** | 웹 기초와 프론트엔드 |
| **난이도** | ★☆☆ (Lv.1) |
| **학습 시간** | 80분 |
| **필수 여부** | ✅ 필수 |
| **과제 번호** | 185010 |


## 🎓 학습 목표

이 과제를 완료한 뒤, 다음을 설명할 수 있어야 한다:

1. UI 고퀄리티보다 '이벤트 → 상태 → 렌더링' 흐름 이해가 우선
2. React 학습 전 필수 개념(DOM 조작, 이벤트, 비동기)을 체득한다
3. addEventListener로 이벤트를 처리할 수 있다
4. const/let을 사용하고 var를 피할 수 있다
5. 비동기 데이터 fetching(fetch API)을 구현할 수 있다

## ⚠️ 제약 사항

- React, Vue, jQuery, Bootstrap, Tailwind CSS 등 외부 라이브러리 사용 금지
- 순수 HTML, CSS, JavaScript만 사용
- 아이콘(Font Awesome), 웹 폰트(Google Fonts)는 허용
- var 대신 const, let 사용
- HTML에 onclick 대신 addEventListener 사용
- 인라인 스타일(style="...") 사용 금지
- GitHub API 인증 없이 호출 시 시간당 60회 제한, 403 시 에러 UI 표시

순수 **HTML / CSS / JavaScript**만으로 구현한 반응형 포트폴리오 웹사이트입니다.
이 프로젝트는 `portfolio-mission.md`를 기준으로 제작되었으며, **사용자 이벤트 → 상태 변경 → DOM 업데이트** 흐름을 직접 구현하는 것을 목표로 합니다.

---

## 1. 프로젝트 개요

이 프로젝트는 HTML, CSS, JavaScript의 기초를 바탕으로 다음 내용을 직접 구현하는 학습용 포트폴리오입니다.

- 시맨틱 HTML 구조 설계
- CSS 변수, Flexbox, Grid 기반 반응형 UI
- DOM 선택과 이벤트 처리
- 다크 모드와 `localStorage`를 활용한 상태 유지
- `fetch`, `async/await`, `try/catch` 기반 GitHub API 연동
- 로딩 / 성공 / 에러 / 빈 상태 처리
- 폼 유효성 검사와 상태 기반 렌더링

현재 GitHub API 연동에는 **GitHub 계정 `giyeop-cody`** 가 사용됩니다.

---

## 2. 프로젝트 설명

이 포트폴리오는 단순히 정적인 화면을 만드는 것이 아니라, 아래 흐름을 직접 코드로 구현하는 데 집중했습니다.

1. 사용자가 버튼을 클릭한다.
2. 이벤트가 발생한다.
3. 상태가 변경된다.
4. 변경된 상태에 따라 DOM이 업데이트된다.
5. 화면이 달라진다.

즉, React 학습 이전에 반드시 이해해야 하는 **웹의 기본 동작 원리**를 순수 JavaScript로 직접 구현한 결과물입니다.

---

## 3. 사용 기술

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- GitHub REST API
- localStorage
- Intersection Observer

---

## 4. 주요 기능

### 필수 기능

- 반응형 레이아웃
- Hero / About / Skills / Projects / Contact / Footer 섹션
- 햄버거 메뉴
- 부드러운 스크롤
- 스크롤 탑 버튼
- 스크롤 시 네비게이션 스타일 변경
- 다크 모드 토글 및 상태 유지
- Contact 폼 유효성 검사
- GitHub API 프로젝트 렌더링
- 로딩 / 성공 / 에러 / 빈 상태 UI
- 재시도 버튼

### 보너스 기능

- 프로젝트 언어 필터링
- Hero 타이핑 효과
- 시스템 다크 모드 감지 (`prefers-color-scheme`)

---

## 5. 상태 관리 흐름

이 프로젝트는 아래 상태 기반 렌더링 흐름을 구현합니다.

### 1) 다크 모드 토글

- 사용자 클릭 → `theme` 상태 변경 → `data-theme` 갱신 → 전체 화면 테마 변경

### 2) GitHub API 상태 처리

- API 호출 → `status`가 `loading/success/error/empty`로 변경 → Projects 섹션 UI 갱신

### 3) 폼 유효성 검사

- 사용자 입력 → 필드별 검증 상태 변경 → 에러 메시지 표시/숨김

### 4) 프로젝트 필터 상태

- 필터 버튼 클릭 → `activeFilter` 변경 → 목록 재필터링 및 재렌더링

---

## 6. 기준값

| 항목 | 값 |
|------|-----|
| 스크롤 탑 버튼 표시 기준 | **300px** |
| 네비게이션 스타일 변경 기준 | **60px** |
| `IntersectionObserver` threshold | **0.25** |

---

## 7. 폴더 구조

```text
.
├─ index.html
├─ css/
│  └─ style.css
├─ js/
│  └─ main.js
├─ images/
│  └─ profile.jpg
├─ README.md
├─ QUEST.md
├─ LEARNING.md
├─ screenshots/
│  ├─ desktop.png
│  ├─ mobile.png
│  └─ dark-mode.png
└─ mission.jpg
```

---

## 8. 실행 방법

### 로컬 실행

1. VS Code에서 프로젝트 폴더를 연다.
2. Live Server 확장으로 `index.html`을 실행한다.
3. 브라우저에서 `http://localhost:5500` 접속.

### 자동 검증 실행

```bash
node validate-portfolio.mjs
```

---

## 9. 검증 결과

자동 검증 결과:

| 항목 | 값 |
|------|-----|
| total | 41 |
| passed | 41 |
| failed | 0 |

추가 스모크 테스트:

- GitHub API `giyeop-cody` 엔드포인트 응답: **200 OK**
- 로컬 정적 서버 기준 `index.html` 핵심 섹션/폼 구조 확인 완료

즉, **문서 기준 핵심 구현 항목은 모두 통과**했습니다.

---

## 10. 저장소 및 배포 정보

| 항목 | URL |
|------|-----|
| GitHub 저장소 | `https://github.com/giyeop-cody/giyeop-cody.github.io` |
| GitHub Pages 배포 | `https://giyeop-cody.github.io` |

---

## 11. 스크린샷

### 데스크톱

![데스크톱 화면](screenshots/desktop.png)

### 모바일

![모바일 화면](screenshots/mobile.png)

### 다크 모드

![다크 모드 화면](screenshots/dark-mode.png)

---

## 12. 평가 항목과 답

> eval 브랜치에서 추가된 섹션입니다. 평가 화면의 항목(질문)과, 이 저장소 코드를 근거로 한 답을 정리했습니다.
>
> **인용 표기**: `html` = `index.html`, `css` = `css/style.css`, `js` = `js/main.js` (라인 번호)

---

### 항목 1: 기능 동작

#### Q1. 브라우저 창 크기를 줄였을 때 레이아웃이 모바일에 맞게 변경되는가?

**A.** 네. 모바일 퍼스트로 설계되어 기본 스타일이 모바일(1단 구조, 햄버거 메뉴) 기준이며, `@media (min-width: 768px)`(css:622)과 `(min-width: 1024px)`(css:671)에서 점진적으로 확장됩니다. 창을 줄이면 768px 미만에서 `.nav-toggle`이 표시되고 `.nav-menu`가 드롭다운 형태로 전환되며, `.about__grid`·`.contact__grid` 등이 다시 1단으로 쌓입니다.

#### Q2. 테마 토글 버튼 클릭 시 다크/라이트 모드가 전환되고, 새로고침 후에도 유지되는가?

**A.** 네. `.theme-toggle` 클릭 → `setTheme()`이 `document.documentElement`의 `data-theme` 속성을 변경(js:51-58)하면 CSS의 `[data-theme="dark"]`(css:31)이 동일 변수 세트를 교체해 전체 화면이 전환됩니다. 동시에 `localStorage.setItem('theme', ...)`(js:56)으로 저장하고, 새로고침 시 `initializeTheme()`이 저장값을 먼저 읽어 적용(js:64-67)하므로 유지됩니다.

#### Q3. 햄버거 메뉴, 스크롤 애니메이션, 맨 위로 가기 버튼 등이 정상 동작하는가?

**A.** 네.

- **햄버거**: 클릭 시 `state.menuOpen`을 토글해 `.nav-menu`에 `.active` 클래스를 추가/제거하고 `aria-expanded`도 갱신합니다 (js:70-82).
- **스크롤 애니메이션**: `.reveal` 요소들을 `IntersectionObserver(threshold 0.25)`로 관찰하다 뷰포트 진입 시 `.is-visible`을 부여해 페이드인됩니다 (js:102-118).
- **맨 위로 버튼**: 스크롤 300px 이상에서 `.visible`이 되고 (js:94-99), 클릭 시 `window.scrollTo({top: 0, behavior: 'smooth'})`로 이동합니다.

#### Q4. GitHub API에서 데이터를 불러와 화면에 표시되고, 로딩/에러/빈 상태가 구분되는가?

**A.** 네. `fetchProjects()`가 `https://api.github.com/users/giyeop-cody/repos`를 호출(js:310-339)하고, `state.status`에 따라 `renderProjects()`(js:237-270)가 넷으로 분기합니다.

| 상태 | 표시 |
|------|------|
| `loading` | 스피너 + "로딩 중..." |
| `error` | "프로젝트를 불러올 수 없습니다." + 다시 시도 버튼 |
| `empty` | "표시할 프로젝트가 없습니다." |
| `success` | 프로젝트 카드 그리드 |

#### Q5. 필수 입력값 누락, 이메일 형식 오류 시 즉각적인 피드백이 표시되는가?

**A.** 네. 각 필드의 `input` 이벤트마다 `validateField()`가 실시간 실행됩니다 (js:389-394).

| 상황 | 메시지 | 코드 위치 |
|------|--------|-----------|
| 빈 값 | "필수 항목입니다." | js:157 |
| 이메일 형식 오류 | "올바른 이메일 형식을 입력해주세요." | js:161 (정규식 js:151) |
| 메시지 10자 미만 | 길이 오류 메시지 | — |

에러는 `.error-message`에 표시되고 `.input-error` 클래스로 테두리가 빨갛게 변합니다. 제출 시 `validateForm()`으로 전체 재검증합니다 (js:179-192).

---

### 항목 2: 구조/설계

#### Q1. HTML, CSS, JavaScript가 각각의 파일로 분리되어 있고, 분리한 이유와 각 파일의 역할을 구분하여 답변할 수 있는가?

**A.** 네. 세 파일로 분리했습니다.

| 파일 | 역할 |
|------|------|
| `index.html` | 문서 구조와 의미 |
| `css/style.css` | 변수·레이아웃·테마 등 모든 시각적 표현 |
| `js/main.js` | 이벤트·상태·렌더링 |

**분리 이유:**

1. **관심사 분리** — 역할이 명확해져 유지보수 용이
2. **브라우저 캐싱** — 재방문 시 로드 속도 향상
3. **협업** — 충돌 최소화

HTML은 시맨틱 구조를, CSS는 `:root` 변수 기반의 테마/반응형을, JS는 "이벤트 → 상태 변경 → DOM 업데이트" 흐름을 담당합니다.

#### Q2. header, nav, main, section, footer 등 시맨틱 태그를 사용했고, 어떤 기준으로 태그를 선택했는지 설명할 수 있는가?

**A.** 네. 의미 없는 `div` 대신 의미 있는 태그를 사용했습니다.

| 태그 | 위치 | 기준 |
|------|------|------|
| `<header>` | html:17 | 사이트 헤더 |
| `<nav>` | html:18 | 내비게이션 링크 묶음 |
| `<main>` | html:50 | 문서의 핵심 콘텐츠 (1개) |
| `<section>` | html:51·75·104·129·145 | 주제별로 묶인 콘텐츠 단위 |
| `<article>` | — | 스킬/프로젝트/문의 카드 (독립적으로 이해되는 단위) |
| `<footer>` | html:200 | 마무리 정보 |

스크린 리더 등 접근성과 SEO, 코드 가독성을 높이는 것이 기준입니다.

#### Q3. CSS 변수(:root)로 색상, 폰트 등을 정의했고, 변수로 관리하면 어떤 이점이 있는지 구체적으로 답변할 수 있는가?

**A.** 네. `:root`(css:1-29)에 색상(`--color-*`), 여백(`--space-1~8`), 반경, 그림자, 전환 시간 등을 정의했고 본문 전반에서 참조합니다.

**3가지 이점:**

1. **단일 공급원 (single source of truth)** — 한 곳만 수정하면 전체에 반영되어 색상 불일치를 방지
2. **다크 모드 간단 구현** — `[data-theme="dark"]`(css:31-47)에서 같은 이름의 변수만 재정의하면 테마 전환 코드가 간결해짐
3. **디자인 토큰 문서화** — 유지보수와 확장이 쉬워짐

#### Q4. onclick 인라인 속성 대신 addEventListener를 사용한 이유를 두 방식의 차이를 비교하여 제시할 수 있는가?

**A.** 네. 이 프로젝트에는 인라인 `onclick`이 **0건**이고 전부 `addEventListener`(**10곳**, `bindEvents()` js:361-)로 연결했습니다.

| 차이점 | onclick (인라인) | addEventListener |
|--------|-----------------|------------------|
| 파일 분리 | ❌ HTML에 JS 섞임 | ✅ JS 별도 파일 |
| 여러 핸들러 | ❌ 1개만 가능 (덮어쓰기) | ✅ 여러 개 등록 가능 |
| 옵션 | 없음 | ✅ `capture`/`once`/`passive` |
| 제거 | 어려움 | ✅ `removeEventListener` |
| 보안 (CSP) | ❌ 취약 | ✅ 안전 |

동작을 JS 한 곳(`bindEvents`)에 모아 관리할 수 있고, CSP(콘텐츠 보안 정책) 측면에서도 인라인 핸들러보다 안전합니다.

---

### 항목 3: React 개념 이해

#### Q1. 다크 모드, API 호출, 폼 유효성 검사 중 하나를 예시로 들어, "이벤트 → 상태 변경 → 화면 업데이트" 흐름이 코드에서 어떻게 이어지는지 따라가며 짚어줄 수 있는가?

**A.** 네. 다크 모드 예시:

1. **이벤트** — `themeToggle.addEventListener('click', ...)` (js:371-374)이 클릭을 받음
2. **상태 변경** — `nextTheme`을 계산해 `setTheme()`에서 `state.theme` 갱신 (js:52)
3. **화면 업데이트** — `data-theme` 속성 설정 (js:53)으로 CSS 변수 세트가 교체되어 전체 색상이 변하고, 버튼 아이콘(🌙/☀️)과 `aria-pressed`도 갱신

API 호출은 `state.status` 변경 → `renderProjects()`, 폼은 `input` 이벤트 → 검증 결과 → `showFieldError()`(js:171)로 같은 흐름을 따릅니다.

#### Q2. async/await와 try/catch를 사용하여 API 호출 성공과 실패를 어떻게 분기 처리했는지 코드 흐름을 따라 답변할 수 있는가?

**A.** 네. `fetchProjects`는 `async` 함수(js:310)로, 시작 시 `state.status = 'loading'`으로 스피너를 표시합니다.

```
try {
  await fetch(...)           // 응답 기다림 (js:315)
  if (!response.ok) throw    // HTTP 오류를 예외로 전환
  await response.json()      // 데이터 파싱
  status = success/empty     // 정상 분기
} catch {
  status = 'error'           // 에러 UI + 다시 시도 버튼 (js:334)
}
```

성공 시 `filter`/`map`하여 `status`를 `success`/`empty`로 설정해 렌더링하고, 예외 발생 시 `catch`(js:334)가 `status = 'error'`로 바꿔 에러 UI와 다시 시도 버튼을 그립니다.

#### Q3. map, filter 등 배열 메서드를 활용하여 GitHub 데이터를 카드 UI로 변환하는 과정을 단계별로 정리할 수 있는가?

**A.** 네. 5단계로 진행됩니다.

| 단계 | 메서드 | 내용 | 코드 위치 |
|------|--------|------|-----------|
| 1 | `.filter()` | fork/아카이브 저장소 제외 | js:323 |
| 2 | `.map()` + `.slice(0, 9)` | 표시할 데이터 정리 | js:324-325 |
| 3 | `.map()` + `.filter()` | 중복 없는 언어 목록 → 필터 버튼 렌더링 | js:272-279 |
| 4 | `.filter()` | 필터 클릭 시 언어별 재선별 | js:298-306 |
| 5 | `.map(createProjectCard)` | 카드 HTML 문자열 생성 → `.join('')`로 그리드에 주입 | js:200-235 |

#### Q4. Flexbox와 Grid를 각각 어디에 적용했는지 확인하고 해당 상황에서 그 방식을 선택한 이유를 비교하여 설명할 수 있는가?

**A.** 네.

| 방식 | 적용 곳 | 선택 이유 |
|------|---------|-----------|
| **Flexbox** (1차원) | `.nav` (로고·메뉴·버튼 가로 배분), `.hero__actions`, `.hero__highlights`, `.project-filters`, `.contact__links`, `.footer__links` | 너비가 들쭉날쭉한 요소를 한 방향으로 나열 |
| **Grid** (2차원) | `.skills__grid`, `.projects-grid` (`repeat(auto-fit, minmax(...))`), `.about__grid`, `.contact__grid`, `.form-group` | 균등한 크기의 카드를 행과 열로 정렬 |

즉 "한 방향으로 내용물 크기대로 늘어놓는" 곳은 Flex, "행과 열을 모두 갖추어 면으로 정렬하는" 곳은 Grid를 선택했습니다.

---

### 항목 4: 통합 설명

#### Q1. 상태(STATE) 객체를 따로 만들어서 관리한 이유는 무엇이며, 그냥 변수로 처리하면 안 되는지 설명할 수 있는가?

**A.** 네. 화면이 의존하는 값들을 `const state`(js:11-24) 객체 한 곳에 모았습니다.

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

**3가지 이유:**

1. **단일 진실 공급원** — 여기저기 흩어진 변수가 제각각 수정되는 것을 방지
2. **"화면 = 상태의 함수"** — `renderProjects()` 같은 렌더 함수들이 모두 같은 상태를 읽어 일관된 화면을 만듦
3. **예측 가능한 흐름** — "이벤트 → 상태 변경 → 렌더링" 한 방향으로만 흐름 → 디버깅과 기능 추가가 쉬움

그냥 변수로 흩어두면 무엇이 언제 변해 화면이 갱신되는지 추적하기 어렵고 화면과 상태가 불일치하기 쉽습니다.

#### Q2. 반응형 디자인에서 "모바일 퍼스트"로 작성한 이유를 이야기할 수 있는가?

**A.** 네. 모바일 퍼스트는 모바일(좁은 화면) 스타일을 기본으로 작성하고 `min-width` 미디어쿼리로 점차 확장하는 방식입니다.

**3가지 이유:**

1. **단순성** — 기본 스타일이 단순해져(1단, 최소 UI) CSS 분기 복잡도가 줄음
2. **성능** — 모바일 기기가 불필요한 데스크톱용 오버라이드를 다운로드하지 않음
3. **점진적 향상 (Progressive Enhancement)** — 핵심 경험을 먼저 만들고 확장하는 원칙과 맞음

이 프로젝트도 `max-width` 쿼리 없이 `min-width: 768px`/`1024px`(css:622·671) 두 개만으로 확장합니다.
