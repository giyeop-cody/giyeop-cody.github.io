# B4-1 동료평가 시나리오 — 학습 → 고찰 → 시도 → 수정 → 선택 → 트러블슈팅

> **과제**: 나를 소개하는 웹페이지 처음부터 만들기
> **과목**: 웹 기초와 프론트엔드 | **난이도**: ★☆☆ | **과제번호**: 185010
> **GitHub**: giyeop-cody/giyeop-cody.github.io | **배포**: https://giyeop-cody.github.io

---

## 1. 학습

이 과제에서 학습한 핵심 개념 6가지:

### 1-1. 시맨틱 HTML

`<div>`로 감싸면 "이 부분이 헤더인지 메뉴인지 본문인지" 알 수 없다. `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`를 쓰면 스크린 리더가 "이건 헤더", "이건 내비게이션"이라고 인식하고, 검색엔진이 페이지 구조를 파악하며, 코드를 읽는 개발자도 `<section id="projects">`를 보면 "아, 프로젝트 섹션이구나" 바로 안다.

### 1-2. CSS 변수와 테마 관리

`:root`에 색상, 여백, 반경, 그림자 등을 변수로 정의하고 본문에서 `var(--color-primary)`로 참조한다. 다크 모드는 `[data-theme="dark"]`에서 같은 이름의 변수만 재정의하면 된다. 변수가 없으면 다크 모드를 켤 때 색상을 쓰는 모든 곳을 일일이 바꿔야 한다. 변수가 있으면 한 블록만 바꾸면 전체가 바뀐다.

### 1-3. addEventListener와 이벤트 처리

`onclick` 속성을 HTML에 직접 쓰면 HTML과 JS가 섞여 유지보수가 어렵다. `addEventListener`를 쓰면 JS 파일 안에서 모든 이벤트를 관리할 수 있고, 하나의 요소에 여러 핸들러를 등록할 수 있으며, `removeEventListener`로 제거도 가능하다. 이 프로젝트에서는 인라인 `onclick` 0건, `addEventListener` 10곳을 `bindEvents()` 함수 하나에 모아 관리한다.

### 1-4. 상태 관리 (state 객체)

화면이 의존하는 모든 데이터를 `const state = {}` 객체 하나에 모았다. `theme`(다크모드), `menuOpen`(햄버거), `projects`(GitHub 데이터), `status`(로딩/성공/에러/빈), `activeFilter`(언어 필터) 등이다. state를 한 곳에 모으면 "지금 어떤 상황인지" `console.log(state)` 한 줄로 파악할 수 있고, 이벤트 → state 변경 → 렌더링이라는 예측 가능한 흐름이 만들어진다.

### 1-5. 비동기 처리 (fetch, async/await, try/catch)

GitHub API에서 데이터를 가져오려면 시간이 걸린다. 그동안 화면이 멈추지 않게 하려면 비동기 처리가 필요하다. `async` 함수 안에서 `await fetch()`로 데이터를 기다리고, `try/catch`로 에러를 잡는다. 데이터가 오는 동안은 `state.status = 'loading'`으로 스피너를 표시하고, 도착하면 `success` 또는 `empty`, 실패하면 `error`로 4가지 상태를 구분하여 각각 다른 UI를 보여준다.

### 1-6. localStorage로 상태 유지

다크 모드를 켜고 새로고침하면 다시 라이트 모드로 돌아가면 불편하다. `localStorage.setItem('theme', 'dark')`로 저장하면 브라우저를 꺼도 남아 있다. 페이지 로드 시 `initializeTheme()`이 저장된 값을 먼저 확인하고, 없으면 시스템 설정(`prefers-color-scheme`)을 따른다.

---

## 2. 고찰

### 2-1. "이벤트 → 상태 → 렌더링" 흐름

이 과제의 핵심은 "사용자 이벤트 → state 변경 → DOM 업데이트" 흐름을 직접 구현하는 것이다. 이 흐름이 4곳에서 나타난다:

| 기능 | 이벤트 | 상태 변경 | 렌더링 |
|------|--------|-----------|--------|
| 다크 모드 | 토글 클릭 | `state.theme = 'dark'` | `data-theme` 속성 → CSS 변수 교체 → 전체 색상 변경 |
| GitHub API | 페이지 로드 | `state.status = 'success'` | `renderProjects()` → 카드 그리드 |
| 폼 검증 | 타이핑 | `validateField()` 결과 | `showFieldError()` → 에러 메시지 표시/숨김 |
| 프로젝트 필터 | 버튼 클릭 | `state.activeFilter = 'JS'` | `filter()` → 재렌더링 |

이것이 React가 자동으로 해주는 일을 수동으로 한 것이다. React에서는 `setState()` 한 줄로 state를 바꾸면 화면이 자동으로 갱신되지만, 여기서는 state를 바꾸고 `renderProjects()`를 직접 호출해야 한다.

### 2-2. state 객체를 따로 만든 이유

변수가 여기저기 흩어지면 "무엇이 언제 변해 화면이 갱신되는지" 추적이 어렵다. state 객체 하나에 모으면 단일 진실 공급원이 되어, state를 보면 화면이 어떻게 생겼는지 알 수 있다. "화면 = 상태의 함수"라는 원칙이다.

### 2-3. 4가지 상태를 구분한 이유

2가지(성공/실패)만 구분하면 빈 데이터도 "실패"로 보여 사용자가 혼란스럽다. 4가지로 나누면: 로딩 중일 때는 스피너, 데이터가 없을 때는 "표시할 프로젝트가 없습니다", 에러일 때는 "다시 시도" 버튼을 보여주어 각 상황에 맞는 명확한 피드백을 준다.

---

## 3. 시도

### 3-1. 프로젝트 구조

```
index.html          ← 메인 페이지 (시맨틱 태그)
css/style.css       ← 688줄 (변수, 반응형, 다크모드, hover, 애니메이션)
js/main.js          ← 471줄 (state, 이벤트, API, 폼, 타이핑)
images/             ← 프로필 이미지
screenshots/        ← 데스크톱/모바일/다크모드 스크린샷
```

### 3-2. HTML 구조 (시맨틱)

```html
<header>
  <nav> 로고, 메뉴, 테마 토글 </nav>
</header>
<main>
  <section id="hero">    인사말, CTA 버튼
  <section id="about">   자기소개, 프로필
  <section id="skills">  기술 스택
  <section id="projects"> GitHub API 카드
  <section id="contact"> 문의 폼
</main>
<footer> 저작권, 소셜 링크
```

aria 속성(`aria-expanded`, `aria-label`, `aria-live`), skip-link, label-for 매칭으로 접근성 확보.

### 3-3. CSS (변수 + 반응형 + 다크모드)

- `:root`에 색상 10개, 여백 8개, 반경 3개, 그림자 2개 정의
- `[data-theme="dark"]`에서 같은 이름 변수만 재정의 → 다크모드 1블록으로 구현
- 모바일 퍼스트: 기본이 1단, `@media (min-width: 768px)`에서 2단, `1024px`에서 4단
- hover + transition(220ms) + box-shadow로 카드 입체감

### 3-4. JavaScript (10개 요구사항 + 4개 보너스)

| # | 기능 | 구현 |
|---|------|------|
| 1 | 햄버거 메뉴 | `classList.toggle('active')` + `aria-expanded` 갱신 |
| 2 | 부드러운 스크롤 | `scrollIntoView({ behavior: 'smooth' })` |
| 3 | 스크롤 탑 버튼 | 300px 이상에서 `.visible`, 클릭 시 `scrollTo({ top: 0 })` |
| 4 | 네비 스타일 변경 | 60px 이상에서 `.scrolled` 클래스 |
| 5 | 다크 모드 | `setTheme()` → `data-theme` + `localStorage` |
| 6 | 스크롤 애니메이션 | `IntersectionObserver(threshold: 0.25)` → `.is-visible` |
| 7 | 폼 검증 | `validateField()` 실시간 + `validateForm()` 제출 시 |
| 8 | GitHub API | `fetchProjects()` async/await + try/catch + 4상태 |
| 9 | 상태 관리 | `const state = {}` + 4가지 흐름 |
| 10 | 배포 | GitHub Pages + 스크린샷 3종 |
| 보너스 1 | 언어 필터 | `filter()`로 언어별 재선별 |
| 보너스 2 | 타이핑 효과 | `setTimeout` 65ms 간격 한 글자씩 |
| 보너스 3 | 폼 실제 전송 | Formspree fetch POST |
| 보너스 4 | 시스템 다크모드 | `prefers-color-scheme` 감지 |

---

## 4. 수정

| 수정 항목 | 수정 전 | 수정 후 | 이유 |
|----------|--------|--------|------|
| JS 연결 | `<script src="js/main.js">` | `<script defer src="js/main.js">` | HTML 파싱 중간에 JS 실행되어 요소 못 찾는 문제 방지 |
| 매직 넘버 | 코드 내 300, 60 직접 사용 | `const SCROLL_TOP_THRESHOLD = 300` | 수정 시 맨 위 한 줄만, README에 명시 |
| 스크롤 애니메이션 | scroll 이벤트 + getBoundingClientRect | `IntersectionObserver(threshold: 0.25)` | 매 프레임 실행 vs 브라우저 최적화, unobserve로 효율 |
| 폼 제출 | 페이지 새로고침 | `preventDefault()` + Formspree fetch | 백엔드 없이 이메일 전송 |
| 다크모드 초기화 | 새로고침 시 리셋 | `initializeTheme()` + localStorage 우선 + 시스템 설정 보조 | 사용자 선택 존중 |

---

## 5. 선택과 선정

| 선택 기로 | 선택 | 포기한 것 | 근거 |
|----------|------|----------|------|
| 시맨틱 vs `<div>` | 시맨틱 | 없음 | 접근성, SEO, 가독성 — 단점 없음 |
| CSS 변수 vs 하드코딩 | CSS 변수 | 구형 브라우저 | 다크모드 1줄 구현, "최신 Chrome" 명시 |
| 모바일 퍼스트 vs 데스크톱 퍼스트 | 모바일 퍼스트 | 익숙함 | 단순성, 성능, 점진적 향상 |
| Flex vs Grid | 상황별 둘 다 | 하나만 | 1차원(네비, 버튼)=Flex, 2차원(카드 그리드)=Grid |
| addEventListener vs onclick | addEventListener | 간결함 | 분리, 여러 핸들러, CSP 보안 |
| 4상태 vs 2상태 | 4상태 | 단순함 | 빈≠에러, 로딩≠빈 화면, 평가 기준 |
| 실시간+제출 검증 | 둘 다 | 약간 성능 | 즉각 피드백 + 안전망 |
| localStorage 우선 vs 시스템 우선 | localStorage 우선 + 시스템 보조 | 자동 반응 | 사용자 명시적 선택 존중 |

---

## 6. 트러블슈팅

### 6-1. 다크모드 새로고침 시 초기화

**문제**: 다크모드 켜고 새로고침하면 라이트모드로 돌아감
**원인**: localStorage에 저장하지 않았음
**해결**: `setTheme()`에서 `localStorage.setItem('theme', theme)` 저장, `initializeTheme()`에서 저장값 먼저 확인. 저장값 없으면 `prefers-color-scheme`으로 시스템 설정 따름

### 6-2. GitHub API 403 에러

**문제**: 개발 중 반복 새로고침하면 403 Forbidden
**원인**: 인증 없이 호출 시 시간당 60회 제한 (rate limit)
**해결**: `state.status = 'error'`로 에러 UI 표시 + "다시 시도" 버튼. README에 "짧은 시간 내 반복 새로고침을 피한다" 명시

### 6-3. Formspree 연동

**문제**: GitHub Pages는 정적 호스팅이라 백엔드가 없어 폼 데이터를 받을 곳이 없음
**원인**: 서버 코드 실행 불가
**해결**: Formspree 외부 서비스로 폼 데이터를 받아 이메일로 전송. `fetch('https://formspree.io/f/xxx', { method: 'POST', body: formData })`

### 6-4. 타이핑 효과 무한 루프

**문제**: 타이핑 효과가 제어 없이 무한히 반복됨
**원인**: setTimeout 재귀 호출의 종료 조건 부족
**해결**: `state.typingDeleting` 플래그로 입력 모드/삭제 모드 전환. 다 쓰면 1.2초 대기 후 삭제 시작, 다 지우면 다음 메시지로 전환

---

## 7. 평가 예상 질문 대비

| 질문 | 답변 방향 | 코드 근거 |
|------|----------|-----------|
| 시맨틱 태그 왜 사용? | 접근성, SEO, 가독성 — 의미 없는 div 대신 역할 명확 | html:17-200 |
| Flex vs Grid 차이? | 1차원(한 방향)=Flex, 2차원(행+열)=Grid | `.nav`=Flex, `.skills__grid`=Grid |
| addEventListener vs onclick? | 분리, 여러 핸들러, removeEventListener, CSP 보안 | `bindEvents()` 10개, onclick 0건 |
| "이벤트→상태→렌더링" 설명? | 다크모드: 클릭→state.theme→data-theme→CSS 변수 교체 | `setTheme()` js:51-58 |
| 4상태 왜 구분? | 빈 데이터≠에러, 로딩≠빈 화면 → 각각 다른 피드백 | `renderProjects()` js:237-270 |
| state 객체 왜 만듦? | 단일 진실 공급원, 예측 가능, 디버깅 용이 | `const state` js:11-24 |
| 모바일 퍼스트 왜? | 단순, 성능(모바일이 데스크톱 코드 안 받음), 점진적 향상 | `min-width: 768px/1024px` |
| CSS 변수 이점? | 단일 공급원, 다크모드 간단, 디자인 토큰 | `:root` css:1-29, `[data-theme]` css:31-47 |
