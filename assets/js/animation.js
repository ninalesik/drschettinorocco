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

  gsap.to(".intro_text", {
    opacity: 1,
    x: 0,
    duration: 2.3,
    stagger: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".approach",
      start: "top 25%",
      end: "bottom bottom",
      scrub: true,
      markers: false,
    },
  });

  gsap.from(".diseases__list li", {
    x: -600,
    duration: 0.5,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".diseases__list",
      start: "top 80%",
      end: "bottom 60%",
      scrub: false,
      markers: false,
    },
  });
  const tlCosm = gsap.timeline({
    scrollTrigger: {
      trigger: ".profile",
      start: "top center",
      end: "bottom bottom",
      toggleActions: "play reverse play reverse",
    },
  });
  tlCosm.from(".profile", {
    duration: 1.5,
    backgroundColor: "#faf6f2",
    color: "#36454f",
    ease: "power1.inOut",
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
    duration: 1.5,
    ease: "power1.inOut",
  });
}
