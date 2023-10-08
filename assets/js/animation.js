let tl = gsap.timeline();

gsap.from(".container_hero", {
  duration: 3,
  opacity: 0,
  scale: 0.3,
  ease: "back",
});

gsap.from(".section_title__services", {
  duration: 3,
  opacity: 0,
  color: "#333",
});

gsap.from(".services__card", {
  duration: 2.5,
  opacity: 0,
  y: 150,
});

gsap.from(".cosmetology", {
  scrollTrigger: {
    trigger: ".cosmetology",
    start: "top top",
    pin: true,
    scrub: 1,
    toggleActions: "restart none none none",
  },
  duration: 3,
  backgroundColor: "#faf6f2",
  color: "#333",
  delay: 1,
});

gsap.from(".profile__text, .section_title__results", {
  duration: 3,
  opacity: 0,
});
