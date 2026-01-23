// rediseño.js
document.addEventListener('DOMContentLoaded', () => {
  
  // Header shadow al hacer scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Observer para secciones grandes
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        sectionObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -80px 0px'
  });

  // Observer para cards
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 120);
        cardObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.18
  });

  // Observar elementos
  document.querySelectorAll('.fade-in-section').forEach(el => sectionObserver.observe(el));
  document.querySelectorAll('.fade-in-card').forEach(el => cardObserver.observe(el));

  // Elimina el flash: muestra la página cuando todo está listo xd
  document.body.classList.add('loaded');
});