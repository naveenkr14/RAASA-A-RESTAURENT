(() => {
  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const menuLinks = document.querySelectorAll('[data-menu-link]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 20);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const setMenuOpen = (isOpen) => {
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    mobileMenu.classList.toggle('is-open', isOpen);
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    document.body.classList.toggle('menu-open', isOpen);
  };

  menuToggle.addEventListener('click', () => setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true'));
  menuLinks.forEach((link) => link.addEventListener('click', () => setMenuOpen(false)));

  const revealItems = document.querySelectorAll('.reveal');
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries, observerRef) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observerRef.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  }

  const filterButtons = document.querySelectorAll('[data-filter]');
  const menuCards = document.querySelectorAll('[data-menu-grid] .menu-card');
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      menuCards.forEach((card) => {
        const matches = filter === 'all' || card.dataset.category.split(' ').includes(filter);
        card.classList.toggle('is-hidden', !matches);
      });
    });
  });

  const reservationForm = document.querySelector('[data-reservation-form]');
  const confirmation = document.querySelector('[data-confirmation]');
  reservationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!reservationForm.reportValidity()) return;
    confirmation.classList.add('is-visible');
    reservationForm.reset();
    confirmation.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'nearest' });
  });

  const canvas = document.querySelector('[data-embers]');
  const context = canvas.getContext('2d');
  let embers = [];
  let animationFrame;
  const emberCount = window.innerWidth < 720 ? 30 : 55;

  const resizeCanvas = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * ratio;
    canvas.height = canvas.parentElement.offsetHeight * ratio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${canvas.parentElement.offsetHeight}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  };

  const createEmber = (start = false) => ({
    x: window.innerWidth * (.55 + Math.random() * .42),
    y: start ? window.innerHeight * (.18 + Math.random() * .75) : window.innerHeight * .9 + 15,
    radius: Math.random() * 1.7 + .35,
    speed: Math.random() * .24 + .08,
    drift: (Math.random() - .5) * .18,
    alpha: Math.random() * .62 + .1,
    warm: Math.random() > .2,
  });

  const drawEmbers = () => {
    context.clearRect(0, 0, window.innerWidth, canvas.parentElement.offsetHeight);
    embers.forEach((ember) => {
      ember.y -= ember.speed;
      ember.x += ember.drift + Math.sin(ember.y * .01) * .06;
      if (ember.y < -10) Object.assign(ember, createEmber(false));
      context.beginPath();
      context.fillStyle = ember.warm ? `rgba(217,164,65,${ember.alpha})` : `rgba(177,76,43,${ember.alpha * .8})`;
      context.arc(ember.x, ember.y, ember.radius, 0, Math.PI * 2);
      context.fill();
    });
    animationFrame = requestAnimationFrame(drawEmbers);
  };

  if (!prefersReducedMotion) {
    resizeCanvas();
    embers = Array.from({ length: emberCount }, () => createEmber(true));
    drawEmbers();
    window.addEventListener('resize', resizeCanvas);
  } else {
    canvas.remove();
  }

  window.addEventListener('pagehide', () => cancelAnimationFrame(animationFrame));
})();
