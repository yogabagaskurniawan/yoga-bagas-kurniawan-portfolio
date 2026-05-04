// script.js — Portfolio Interactivity

// ---- Mobile Nav Toggle ----
const toggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

toggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  toggle.classList.toggle('active', isOpen);
  toggle.setAttribute('aria-expanded', isOpen);
});

// Close nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// ---- Active nav link on scroll ----
const sections = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('.nav__links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav__links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(sec => observer.observe(sec));

// ---- Animate skill bars on scroll ----
const skillBars = document.querySelectorAll('.skill-card__fill');

const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.style.getPropertyValue('--pct');
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

// Reset width before observing so animation triggers
skillBars.forEach(bar => {
  const target = bar.style.getPropertyValue('--pct');
  bar.style.width = '0%';
  barObserver.observe(bar);
});

// ---- Contact form submission ----
const form = document.querySelector('.contact__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.textContent;

  btn.textContent = 'Mengirim...';
  btn.disabled = true;

  // Simulate send (replace with real API call)
  setTimeout(() => {
    btn.textContent = '✅ Terkirim!';
    btn.style.background = '#10b981';
    btn.style.borderColor = '#10b981';
    form.reset();

    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      btn.style.background = '';
      btn.style.borderColor = '';
    }, 3000);
  }, 1200);
});

// ---- Fade-in on scroll ----
const fadeEls = document.querySelectorAll(
  '.stat-card, .skill-card, .project-card, .hero__content, .hero__avatar, .about__text, .about__stats'
);

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = `${i * 0.05}s`;
      entry.target.classList.add('fade-in');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

// Add initial hidden state via JS so CSS-only works without JS
const style = document.createElement('style');
style.textContent = `
  .stat-card, .skill-card, .project-card,
  .hero__content, .hero__avatar,
  .about__text, .about__stats {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .fade-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

fadeEls.forEach(el => fadeObserver.observe(el));
