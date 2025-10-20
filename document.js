// Scroll suau al clicar Discover
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

// Menu hamburguer
var menuToggle = document.getElementById('menu-toggle');
var navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', function() {
  menuToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});


// Plats

const plats = document.querySelectorAll('.plat img');

const options = {
  threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, options);

plats.forEach(img => {
  img.style.opacity = 0;
  img.style.transform = 'translateY(50px)';
  img.style.transition = 'all 0.6s ease-out';
  observer.observe(img);
});


gsap.registerPlugin(ScrollTrigger);

gsap.from(".bajoti-text", {
  opacity: 0,
  y: 100,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#Bajoti",   // la secció que activa
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

//ScrollTrigger

gsap.from(".bajoti-image img", {
  opacity: 0,
  x: 100,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#Bajoti",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
