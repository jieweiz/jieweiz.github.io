// Progressive enhancement only: navigation and expandable sections also work without JavaScript.
const navLinks = [...document.querySelectorAll('nav a[href^="#"]')];
const sections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, {rootMargin: '-15% 0px -55% 0px', threshold: 0});
  sections.forEach(section => observer.observe(section));
}
