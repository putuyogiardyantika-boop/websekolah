const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle?.setAttribute('aria-expanded', String(!expanded));
  navMenu?.classList.toggle('show');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (navMenu?.classList.contains('show')) {
      navMenu.classList.remove('show');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');

smoothLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  if (loader) {
    loader.classList.add('fade-out');
    window.setTimeout(() => loader.remove(), 500);
  }
});
