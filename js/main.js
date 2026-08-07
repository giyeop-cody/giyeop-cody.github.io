const GITHUB_USERNAME = 'giyeop-cody';
const NAV_SCROLL_THRESHOLD = 60;
const SCROLL_TOP_THRESHOLD = 300;
const OBSERVER_THRESHOLD = 0.25;
const TYPING_MESSAGES = [
  'Vanilla JavaScript로 사용자 경험을 만드는 중입니다.',
  '이벤트 → 상태 → 렌더링 흐름을 직접 구현합니다.',
  'GitHub API와 반응형 UI를 함께 학습합니다.',
];

const state = {
  theme: 'light',
  menuOpen: false,
  projects: [],
  filteredProjects: [],
  status: 'idle',
  activeFilter: 'All',
  typingIndex: 0,
  typingMessageIndex: 0,
  typingDeleting: false,
};

const elements = {
  header: document.querySelector('.site-header'),
  navToggle: document.querySelector('.nav-toggle'),
  navMenu: document.querySelector('.nav-menu'),
  navLinks: document.querySelectorAll('.nav-link'),
  themeToggle: document.querySelector('.theme-toggle'),
  themeToggleIcon: document.querySelector('.theme-toggle__icon'),
  scrollTopButton: document.querySelector('#scroll-top'),
  typingText: document.querySelector('#typing-text'),
  filters: document.querySelector('#project-filters'),
  projectsStatus: document.querySelector('#projects-status'),
  projectsGrid: document.querySelector('#projects-grid'),
  contactForm: document.querySelector('#contact-form'),
  formSuccess: document.querySelector('#form-success'),
  formFields: {
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    message: document.querySelector('#message'),
  },
  formErrors: {
    name: document.querySelector('#name-error'),
    email: document.querySelector('#email-error'),
    message: document.querySelector('#message-error'),
  },
};

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

const setTheme = (theme, persist = true) => {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);

  if (persist) {
    localStorage.setItem('theme', theme);
  }

  const isDark = theme === 'dark';
  elements.themeToggleIcon.textContent = isDark ? '☀️' : '🌙';
  elements.themeToggle.setAttribute('aria-pressed', String(isDark));
};

const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  const initialTheme = savedTheme || (prefersDarkScheme.matches ? 'dark' : 'light');
  setTheme(initialTheme, Boolean(savedTheme));
};

const toggleMenu = () => {
  state.menuOpen = !state.menuOpen;
  elements.navMenu.classList.toggle('active');
  elements.navToggle.classList.toggle('active');
  elements.navToggle.setAttribute('aria-expanded', String(state.menuOpen));
};

const closeMenu = () => {
  state.menuOpen = false;
  elements.navMenu.classList.remove('active');
  elements.navToggle.classList.remove('active');
  elements.navToggle.setAttribute('aria-expanded', 'false');
};

const smoothScrollToSection = (targetId) => {
  const targetSection = document.querySelector(targetId);

  if (!targetSection) {
    return;
  }

  targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const updateScrollUI = () => {
  const scrolled = window.scrollY >= NAV_SCROLL_THRESHOLD;
  const showTopButton = window.scrollY >= SCROLL_TOP_THRESHOLD;

  elements.header.classList.toggle('scrolled', scrolled);
  elements.scrollTopButton.classList.toggle('visible', showTopButton);
};

const revealOnScroll = () => {
  const revealTargets = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: OBSERVER_THRESHOLD }
  );

  revealTargets.forEach((target) => observer.observe(target));
};

const renderTypingEffect = () => {
  if (!elements.typingText) {
    return;
  }

  const currentMessage = TYPING_MESSAGES[state.typingMessageIndex];
  const visibleText = currentMessage.slice(0, state.typingIndex);
  elements.typingText.textContent = visibleText;

  if (!state.typingDeleting && state.typingIndex < currentMessage.length) {
    state.typingIndex += 1;
    setTimeout(renderTypingEffect, 65);
    return;
  }

  if (!state.typingDeleting && state.typingIndex === currentMessage.length) {
    state.typingDeleting = true;
    setTimeout(renderTypingEffect, 1200);
    return;
  }

  if (state.typingDeleting && state.typingIndex > 0) {
    state.typingIndex -= 1;
    setTimeout(renderTypingEffect, 35);
    return;
  }

  state.typingDeleting = false;
  state.typingMessageIndex = (state.typingMessageIndex + 1) % TYPING_MESSAGES.length;
  setTimeout(renderTypingEffect, 300);
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateField = (name, value) => {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return '필수 항목입니다.';
  }

  if (name === 'email' && !emailPattern.test(trimmedValue)) {
    return '올바른 이메일 형식을 입력해주세요.';
  }

  if (name === 'message' && trimmedValue.length < 10) {
    return '메시지는 10자 이상 입력해주세요.';
  }

  return '';
};

const showFieldError = (fieldName, message) => {
  const field = elements.formFields[fieldName];
  const errorElement = elements.formErrors[fieldName];

  errorElement.textContent = message;
  field.classList.toggle('input-error', Boolean(message));
};

const validateForm = () => {
  const entries = Object.entries(elements.formFields);
  const errors = entries.reduce((acc, [name, field]) => {
    acc[name] = validateField(name, field.value);
    return acc;
  }, {});

  Object.entries(errors).forEach(([name, message]) => {
    showFieldError(name, message);
  });

  const hasError = Object.values(errors).some(Boolean);
  return { errors, isValid: !hasError };
};

const resetFormErrors = () => {
  Object.keys(elements.formErrors).forEach((fieldName) => {
    showFieldError(fieldName, '');
  });
};

const createProjectCard = (project) => {
  const {
    name,
    description,
    language,
    stargazers_count: stars,
    forks_count: forks,
    html_url: htmlUrl,
    homepage,
    updated_at: updatedAt,
  } = project;

  const summary = description || '저장소 설명이 없습니다.';
  const displayLanguage = language || 'Other';
  const formattedDate = new Date(updatedAt).toLocaleDateString('ko-KR');
  const liveLink = homepage
    ? `<a class="button button--secondary" href="${homepage}" target="_blank" rel="noreferrer">Live</a>`
    : '';

  return `
    <article class="project-card card">
      <span class="project-card__tag">${displayLanguage}</span>
      <h3>${name}</h3>
      <p>${summary}</p>
      <div class="project-card__meta">
        <span>⭐ ${stars}</span>
        <span>🍴 ${forks}</span>
        <span>업데이트 ${formattedDate}</span>
      </div>
      <div class="project-card__actions">
        <a class="button button--primary" href="${htmlUrl}" target="_blank" rel="noreferrer">GitHub</a>
        ${liveLink}
      </div>
    </article>
  `;
};

const renderProjects = () => {
  const { filteredProjects, status } = state;

  if (status === 'loading') {
    elements.projectsStatus.classList.remove('hidden');
    elements.projectsStatus.innerHTML = `
      <div class="spinner" aria-hidden="true"></div>
      <p>로딩 중...</p>
    `;
    elements.projectsGrid.innerHTML = '';
    return;
  }

  if (status === 'error') {
    elements.projectsStatus.classList.remove('hidden');
    elements.projectsStatus.innerHTML = `
      <p>프로젝트를 불러올 수 없습니다.</p>
      <button class="retry-button" type="button" id="retry-projects">다시 시도</button>
    `;
    elements.projectsGrid.innerHTML = '';
    return;
  }

  if (status === 'empty') {
    elements.projectsStatus.classList.remove('hidden');
    elements.projectsStatus.innerHTML = '<p>표시할 프로젝트가 없습니다.</p>';
    elements.projectsGrid.innerHTML = '';
    return;
  }

  elements.projectsStatus.classList.add('hidden');
  elements.projectsStatus.innerHTML = '';
  elements.projectsGrid.innerHTML = filteredProjects.map((project) => createProjectCard(project)).join('');
};

const getProjectLanguages = (projects) => {
  const languages = projects
    .map(({ language }) => language || 'Other')
    .filter((language, index, array) => array.indexOf(language) === index)
    .sort((a, b) => a.localeCompare(b));

  return ['All', ...languages];
};

const renderFilters = () => {
  const filterOptions = getProjectLanguages(state.projects);
  elements.filters.innerHTML = filterOptions
    .map(
      (filter) => `
        <button
          class="filter-button ${state.activeFilter === filter ? 'active' : ''}"
          type="button"
          data-filter="${filter}"
        >
          ${filter}
        </button>
      `
    )
    .join('');
};

const applyProjectFilter = (filterName) => {
  state.activeFilter = filterName;
  state.filteredProjects = state.projects.filter(({ language }) => {
    const displayLanguage = language || 'Other';
    return filterName === 'All' ? true : displayLanguage === filterName;
  });

  state.status = state.filteredProjects.length ? 'success' : 'empty';
  renderFilters();
  renderProjects();
};

const fetchProjects = async () => {
  state.status = 'loading';
  renderProjects();

  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`);

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = await response.json();
    const visibleProjects = repos
      .filter(({ fork, archived }) => !fork && !archived)
      .map((repo) => ({ ...repo }))
      .slice(0, 9);

    state.projects = visibleProjects;
    state.filteredProjects = visibleProjects;
    state.activeFilter = 'All';
    state.status = visibleProjects.length ? 'success' : 'empty';

    renderFilters();
    renderProjects();
  } catch (error) {
    console.error(error);
    state.status = 'error';
    renderProjects();
  }
};

const handleFilterClick = (event) => {
  const filterButton = event.target.closest('.filter-button');

  if (!filterButton) {
    return;
  }

  applyProjectFilter(filterButton.dataset.filter);
};

const handleProjectsStatusClick = (event) => {
  const retryButton = event.target.closest('#retry-projects');

  if (!retryButton) {
    return;
  }

  fetchProjects();
};

const bindEvents = () => {
  elements.navToggle.addEventListener('click', toggleMenu);

  elements.navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      smoothScrollToSection(link.getAttribute('href'));
      closeMenu();
    });
  });

  elements.themeToggle.addEventListener('click', () => {
    const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  });

  elements.scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', updateScrollUI);
  prefersDarkScheme.addEventListener('change', (event) => {
    if (!localStorage.getItem('theme')) {
      setTheme(event.matches ? 'dark' : 'light');
    }
  });

  Object.entries(elements.formFields).forEach(([name, field]) => {
    field.addEventListener('input', () => {
      const message = validateField(name, field.value);
      showFieldError(name, message);
      if (!message) {
        elements.formSuccess.textContent = '';
      }
    });
  });

  // 기존 동기(일반) 함수에서 비동기(async) 함수로 변경
  elements.contactForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // 기본 새로고침 방지
    const { isValid } = validateForm(); // 기존에 잘 만들어두신 유효성 검사 활용!

    // 유효성 검사 실패 시
    if (!isValid) {
      elements.formSuccess.textContent = '입력값을 확인해주세요.';
      elements.formSuccess.style.color = '#ef4444'; // 에러 색상(빨강)
      return;
    }

    // 1. 발송 중(로딩) 상태 표시
    elements.formSuccess.textContent = '메시지를 전송하고 있습니다. 잠시만 기다려주세요...';
    elements.formSuccess.style.color = 'inherit';

    // 2. 폼에 입력된 데이터들 수집
    const formData = new FormData(elements.contactForm);

    try {
      // 3. Formspree API로 데이터 전송
      const response = await fetch('https://formspree.io/f/mjybkjoy', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      // 4. 전송 성공 여부에 따른 UI 상태 변경
      if (response.ok) {
        // 전송 성공!
        elements.contactForm.reset();
        resetFormErrors();
        elements.formSuccess.textContent = '메시지가 성공적으로 전송되었습니다! 곧 답변 드리겠습니다.';
        elements.formSuccess.style.color = '#10b981'; // 성공 색상(초록)

        // 5초 뒤에 성공 메시지 자연스럽게 지워주기 (선택사항)
        setTimeout(() => {
          elements.formSuccess.textContent = '';
        }, 5000);

      } else {
        // 서버에서 거절했을 때
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          elements.formSuccess.textContent = data.errors.map(error => error.message).join(', ');
        } else {
          elements.formSuccess.textContent = '전송에 실패했습니다. 나중에 다시 시도해 주세요.';
        }
        elements.formSuccess.style.color = '#ef4444';
      }
    } catch (error) {
      // 인터넷 연결 끊김 등 네트워크 에러
      elements.formSuccess.textContent = '네트워크 오류가 발생했습니다. 인터넷 연결을 확인해 주세요.';
      elements.formSuccess.style.color = '#ef4444';
    }
  });

  elements.filters.addEventListener('click', handleFilterClick);
  elements.projectsStatus.addEventListener('click', handleProjectsStatusClick);
};

const initializeApp = () => {
  initializeTheme();
  bindEvents();
  updateScrollUI();
  revealOnScroll();
  renderTypingEffect();
  fetchProjects();
};

initializeApp();
