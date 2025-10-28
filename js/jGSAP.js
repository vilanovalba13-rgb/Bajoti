
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM carregat, GSAP i ScrollTrigger llestos!");

  // === ANIMACIÓ DE TEXTOS AMB LLETRES STAGGERED ===
  const animatedTexts = document.querySelectorAll('.animated-text');

  animatedTexts.forEach(animatedText => {
    const words = animatedText.textContent.trim().split(' ');
    animatedText.innerHTML = words
      .map(word => {
        const letters = word.split('').map(char => `<span>${char}</span>`).join('');
        return `<span class="word">${letters}&nbsp;</span>`;
      })
      .join('');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animatedText,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reset"
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

  // === ANIMACIÓ SECCIÓ "SOM BAJOTI" ===
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#Bajoti",
      start: "top 75%",
      toggleActions: "play none none reset",
      markers: false // posa true per veure els triggers
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

  // === ANIMACIÓ SECCIÓ "EL NOSTRE VIATGE" ===
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".bajoti-section:nth-of-type(2)", // MÉS FIABLE que :not(#Bajoti)
      start: "top 75%",
      toggleActions: "play none none reset",
      markers: false
    }
  });

  tl2.from(".bajoti-section:nth-of-type(2) .animated-image", {
    opacity: 0,
    scale: 0.2,
    x: 400,
    rotation: 60,
    filter: "blur(15px)",
    duration: 1.8,
    ease: "elastic.out(1, 0.4)"
  }).from(".bajoti-section:nth-of-type(2) .animated-text span", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.05,
    ease: "power2.out"
  }, "-=1.2");

  console.log("Totes les animacions GSAP carregades correctament!");
});
