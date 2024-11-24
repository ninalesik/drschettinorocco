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

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      simulateTouch: true,
      grabCursor: true,
      autoHeight: true,
    },
    slidesPerView: 3,
    breakpoints: {
      1240: {
        slidesPerView: 3,
      },
      840: {
        slidesPerView: 2,
      },
      560: {
        slidesPerView: 2,
      },
      330: {
        slidesPerView: 1,
      },
    },
    spaceBetween: 15,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1000,
  });
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
