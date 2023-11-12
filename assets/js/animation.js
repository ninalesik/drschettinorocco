"use strict";

window.addEventListener("DOMContentLoaded", () => {
  animation();
});

function animation() {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();
  tl.from(".container_hero", {
    duration: 2,
    opacity: 0,
    scale: 0.3,
    ease: "back",
  });

  tl.from(
    ".section_title__services",
    {
      duration: 2,
      opacity: 0,
      color: "#333",
    },
    "-=1"
  );

  const tlCards = gsap.timeline({
    scrollTrigger: {
      trigger: ".services_cards",
      start: "top center",
    },
  });

  tlCards.from(".services__card", {
    duration: 0.5,
    opacity: 0,
    yPercent: 100,
    ease: "circ.out",
  });

  const tlCosm = gsap.timeline({
    scrollTrigger: {
      trigger: ".cosmetology",
      start: "top center",
      end: "bottom bottom",
      toggleActions: "play reverse play reverse",
    },
  });
  tlCosm.from(".cosmetology", {
    duration: 1,
    backgroundColor: "#faf6f2",
    color: "#333",
  });

  const tlProfile = gsap.timeline({
    scrollTrigger: {
      trigger: ".profile",
      start: "top center",
      end: "bottom bottom",
    },
  });
  tlProfile.from(".profile__text, .section_title__results", {
    opacity: 0,
    duration: 1,
  });
}
