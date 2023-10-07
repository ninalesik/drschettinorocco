document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });

      document.querySelector(".burger").classList.remove("active");
      document.querySelector(".nav").classList.remove("open");
    });
  });
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  effect: "fade",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 2000,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("cookieAccepted")) {
    document.getElementById("cookiePopup").style.display = "block";
  }
});

function closeCookiePopup() {
  document.getElementById("cookiePopup").style.display = "none";
  localStorage.setItem("cookieAccepted", true);
}
