document.addEventListener("DOMContentLoaded", (event) => {
  const swiper = new Swiper(".inner1 .swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
var swiper1 = new Swiper(".first", {
  slidesPerView: 1,
  spaceBetween: 25,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".flipSwiper", {
  effect: "flip",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const imageContainers01 = document.getElementById("imageContainers01");
const buttons01 = document.querySelectorAll(".Button01, .Button02, .Button03");

function hideAllImages01() {
  imageContainers01.querySelectorAll("img").forEach((image) => {
    image.style.display = "none";
  });
}

hideAllImages01();

const firstImage01 = document.getElementById("image01");
firstImage01.style.display = "block";

buttons01.forEach((button) => {
  button.addEventListener("click", () => {
    hideAllImages01();
    const imageId = button.getAttribute("data-image");
    const targetImage = document.getElementById(imageId);
    targetImage.style.display = "block";
  });
});
