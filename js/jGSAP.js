// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animació per als textos (staggered letters amb reset al scroll)
document.addEventListener('DOMContentLoaded', function() {
  const animatedTexts = document.querySelectorAll('.animated-text');

  animatedTexts.forEach(animatedText => {
    // Convertir text en spans agrupats per paraula
    const words = animatedText.textContent.trim().split(' ');
    animatedText.innerHTML = words
      .map(word => {
        const letters = word
          .split('')
          .map(char => `<span>${char}</span>`)
          .join('');
        return `<span class="word">${letters}&nbsp;</span>`;
      })
      .join('');

    // Timeline per al text
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animatedText,
        start: "top 85%", // Mantingut sense canvis
        end: "bottom 20%", // Mantingut sense canvis
        toggleActions: "play none none reset" // Canviat per reiniciar l'animació
      }
    });

    tl.from(animatedText.querySelectorAll("span"), {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.02,
      ease: "power2.out"
    });
  });
});

// Animació per a la secció "Som Bajoti" (imatge des de l'esquerra)
const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#Bajoti", // Selector específic per la secció amb id="Bajoti"
    start: "top 5%", // Ajustat per disparar quan la secció entra al 75% de la finestra
    toggleActions: "play none none reset",
    markers: false // Canvia a true per depurar
  }
});

tl1.from("#Bajoti .animated-image", {
  opacity: 0,
  scale: 0.3,
  x: -300,
  rotation: -45,
  filter: "blur(10px)",
  duration: 1.5,
  ease: "elastic.out(1, 0.5)"
}).from("#Bajoti .animated-text span", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.05,
  ease: "power2.out"
}, "-=1.0");

// Animació per a la secció "El nostre viatge" (imatge des de la dreta)
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".bajoti-section:not(#Bajoti)", // Selecciona la segona secció .bajoti-section
    start: "top 5%", // Ajustat per coherència
    end: "bottom 20%",
    toggleActions: "play none none reset",
    markers: false // Canvia a true per depurar
  }
});

tl2.from(".bajoti-section:not(#Bajoti) .animated-image", {
  opacity: 0,
  scale: 0.2,
  x: 400,
  rotation: 60,
  filter: "blur(15px)",
  duration: 1.8,
  ease: "elastic.out(1, 0.4)"
}).from(".bajoti-section:not(#Bajoti) .animated-text span", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.05,
  ease: "power2.out"
}, "-=1.2");
