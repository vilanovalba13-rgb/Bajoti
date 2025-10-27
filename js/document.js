document.addEventListener('DOMContentLoaded', function() {

  // Fletxa anima
  document.addEventListener('click', function (e) {
    const link = e.target.closest('.discover-link');
    if (!link) return;
    e.preventDefault();
    const dest = document.querySelector('#Destins');
    if (dest) {
      dest.scrollIntoView({ behavior: 'smooth', block: 'start' });
      dest.setAttribute('tabindex', '-1');
      dest.focus({ preventScroll: true });
      setTimeout(() => dest.removeAttribute('tabindex'), 1000);
    }
  });

 
  // Plats amb IntersectionObserver
  const plats = document.querySelectorAll('.plat img');

  // Si no hi ha imatges, surtim
  if (!plats || plats.length === 0) return;

  // Fallback si el navegador no suporta IntersectionObserver
  if (!('IntersectionObserver' in window)) {
    plats.forEach(img => {
      img.style.opacity = 1;
      img.style.transform = 'translateY(0)';
      img.style.transition = 'all 0.6s ease-out';
    });
    return;
  }

  const options = { threshold: 0.3, rootMargin: '0px 0px -10% 0px' };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.transition = 'all 0.6s ease-out';
        // opcional: no observar més aquesta imatge
        obs.unobserve(entry.target);
      }
    });
  }, options);

  plats.forEach(img => {
    // posar estils inicials només si no estan ja posats
    if (!img.style.opacity) img.style.opacity = 0;
    if (!img.style.transform) img.style.transform = 'translateY(50px)';
    // observer
    observer.observe(img);
  });

});
