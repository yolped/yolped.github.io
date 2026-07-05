/**
 * Social links — update these constants to change URLs site-wide
 */
 // deploy
const GITHUB_URL = "https://github.com/yolped";
const LINKEDIN_URL = "https://www.linkedin.com/in/abhishek-more-sde";
const EMAIL = "abhishekmore021@gmail.com";

/**
 * Theme management
 */
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
}

document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
});

/**
 * Mobile navigation
 */
const nav = document.querySelector('.nav');
const mobileToggle = document.querySelector('.mobile-nav-toggle');

mobileToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  const isOpen = nav.classList.contains('open');
  mobileToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile nav on link click
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    mobileToggle.setAttribute('aria-expanded', 'false');
  });
});

/**
 * Smooth scroll for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const id = anchor.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});

/**
 * Set current year in footer
 */
document.getElementById('current-year').textContent = new Date().getFullYear();
