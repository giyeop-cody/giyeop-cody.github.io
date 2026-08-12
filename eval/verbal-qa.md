# B4-1 동료평가 대비 가이드

## 1. 이 과제가 뭔가요?
순수 HTML/CSS/JavaScript로 반응형 포트폴리오 웹페이지를 만드는 과제. React 학습 전 필수 개념(DOM 조작, 이벤트, 비동기)을 체득.

## 2. 평가 예상 질문

### 학습 목표 #1: 이벤트 → 상태 → 렌더링 흐름

Q1. "이벤트→상태→렌더링" 흐름을 설명해주세요.
A. 다크모드를 예로 들면:
1. **이벤트**: 사용자가 테마 토글 버튼 클릭 → addEventListener가 클릭 감지
2. **상태**: `state.theme` 값을 'light'→'dark'로 변경
3. **렌더링**: `document.documentElement.setAttribute('data-theme', state.theme)`로 data-theme 속성 변경 → CSS 변수가 자동으로 교체 → 화면 색상 즉시 변경

이 흐름의 핵심은 이벤트가 직접 DOM을 조작하는 게 아니라, 상태를 변경하고 상태가 렌더링을 트리거한다는 점입니다. React의 useState와 같은 패턴입니다.

### 학습 목표 #2: DOM 조작, 이벤트, 비동기 체득

Q2. addEventListener vs onclick 차이?
A. addEventListener를 선택한 이유:
1. **분리**: HTML과 JS 분리 (인라인 onclick은 HTML에 JS 섞음)
2. **복수 핸들러**: 한 요소에 여러 리스너 추가 가능
3. **removeEventListener**: 필요 시 제거 가능
4. **CSP 보안**: 인라인 이벤트 핸들러는 Content Security Policy 위반 가능

### 학습 목표 #3: addEventListener로 이벤트 처리

Q3. 시맨틱 태그를 왜 사용하나요?
A. 접근성, SEO, 가독성 — 의미 없는 div 대신 header, nav, main, section, footer 등 역할이 명확한 태그 사용. 스크린 리더가 문서 구조를 이해할 수 있고, 검색 엔진이 콘텐츠를 더 잘 파악합니다.

### 학습 목표 #4: const/let 사용, var 피하기

Q4. var 대신 const/let을 사용한 이유?
A. var는 함수 스코프라서 블록 밖에서도 접근 가능하여 의도치 않은 버그를 만듭니다. 또한 호이스팅으로 인해 선언 전에 접근해도 에러가 안 나서 디버깅이 어렵습니다.
- **const**: 재할당 불가 → 의도치 않은 변경 방지 (기본적으로 const 사용)
- **let**: 재할당 필요할 때만 사용 (루프 카운터 등)
- 이 프로젝트에서 var 사용량: 0개, const/let: 67개

### 학습 목표 #5: fetch API로 비동기 데이터 fetching

Q5. GitHub API에서 프로젝트 데이터를 어떻게 가져왔나요?
A. `fetch()` API로 GitHub REST API를 비동기 호출합니다:
```js
const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
```
이때 4가지 상태를 처리합니다:
1. **로딩 중**: 스피너 표시
2. **성공**: 프로젝트 카드 리스트 렌더링
3. **에러**: "프로젝트를 불러올 수 없습니다. 다시 시도" 버튼 표시
4. **빈 데이터**: "표시할 프로젝트가 없습니다."

### 제약사항: GitHub API 레이트 리밋 처리

Q6. GitHub API 레이트 리밋을 어떻게 처리했나요?
A. GitHub API는 인증 없이 호출 시 시간당 60회 제한이 있습니다. 코드에서는 `response.ok`를 확인하고, 403 응답(레이트 리밋)을 포함한 모든 에러를 catch 블록에서 잡아서 `state.status = 'error'`로 설정하고 에러 UI를 표시합니다. 짧은 시간 내 반복 새로고침을 피하도록 안내합니다.

### 기타

Q7. 4상태 왜 구분하나요?
A. 빈 데이터≠에러, 로딩≠빈 화면 → 각각 다른 피드백을 줘야 사용자가 "왜 화면이 이렇지?" 혼란하지 않습니다.

Q8. state 객체를 왜 만들었나요?
A. 단일 진실 공급원(single source of truth) — 상태가 한 곳에 모여 있으면 예측 가능하고 디버깅이 쉽습니다. 이것이 React가 state를 사용하는 이유와 같습니다.

Q9. Flex vs Grid 차이?
A. 1차원(가로 또는 세로) 레이아웃=Flex, 2차원(행+열) 레이아웃=Grid. 헤더 메뉴는 Flex, 프로젝트 카드 그리드는 Grid를 사용했습니다.
