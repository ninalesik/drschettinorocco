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

  gsap.fromTo(
    ".intro_text",
    {
      opacity: 0,
      scale: 0.8,
      x: -50,
    },
    {
      opacity: 1,
      scale: 1,
      x: 0,
      duration: 1.5,
      stagger: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".approach",
        start: "top 80%",
        end: "bottom 30%",
        scrub: true,
        markers: false,
      },
    }
  );

  gsap.fromTo(
    ".card",
    {
      opacity: 0,
      scale: 0.8,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.3,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: ".card",
        start: "top 80%",
        end: "bottom 60%",
        scrub: false,
        markers: false,
      },
    }
  );

  gsap.from(".diseases__list li", {
    opacity: 0,
    y: 30,
    duration: 0.4,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".diseases__list",
      start: "top 85%",
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
