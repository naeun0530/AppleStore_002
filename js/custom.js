var swiper1 = new Swiper(".mySwiper.practice-style", {
  spaceBetween: 10,
  slidesPerView: 5,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
    },
  
  breakpoints: {
    // 화면의 넓이가 320px 이상일 때
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    // 화면의 넓이가 640px 이상일 때
    600: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1300: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});

// var swiper2 = new Swiper(".mySwiper.flip-style", {
//   effect: "flip",
//   grabCursor: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

const swiper2 = new Swiper(".mySwiper.flip-style", {
  effect: "flip",
  grabCursor: false,
  flipEffect: {
    slideShadows: false,
  },
  on: {
    click: function () {
      const activeSlide = this.slides[this.activeIndex];
      if (activeSlide && activeSlide !== this.clickedSlide) {
        this.clickedSlide = activeSlide;
        if (activeSlide.swiperSlideOffset < 0) {
          this.slideNext();
        } else {
          this.slidePrev();
        }
      }
    },
  },
});


const imageContainers1 = document.getElementById("imageContainers1");
const buttons1 = document.querySelectorAll(".Button1, .Button2, .Button3");

function hideAllImages1() {
  imageContainers1.querySelectorAll("img").forEach((image) => {
    image.style.display = "none";
  });
}

hideAllImages1();

const firstImage1 = document.getElementById("image1");
firstImage1.style.display = "block";

buttons1.forEach((button) => {
  button.addEventListener("click", () => {
    hideAllImages1();
    const imageId = button.getAttribute("data-image");
    const targetImage = document.getElementById(imageId);
    targetImage.style.display = "block";
  });
});

const imageContainers2 = document.getElementById("imageContainers2");
const buttons2 = document.querySelectorAll(".Button4, .Button5, .Button6");

function hideAllImages2() {
  imageContainers2.querySelectorAll("img").forEach((image) => {
    image.style.display = "none";
  });
}

hideAllImages2();

const firstImage2 = document.getElementById("image4");
firstImage2.style.display = "block";

buttons2.forEach((button) => {
  button.addEventListener("click", () => {
    hideAllImages2();
    const imageId = button.getAttribute("data-image2");
    const targetImage = document.getElementById(imageId);
    targetImage.style.display = "block";
  });
});

const imageContainers3 = document.getElementById("imageContainers3");
const buttons3 = document.querySelectorAll(".Button7, .Button8, .Button9");

function hideAllImages3() {
  imageContainers3.querySelectorAll("img").forEach((image) => {
    image.style.display = "none";
  });
}

hideAllImages3();

const firstImage3 = document.getElementById("image7");
firstImage3.style.display = "block";

buttons3.forEach((button) => {
  button.addEventListener("click", () => {
    hideAllImages3();
    const imageId = button.getAttribute("data-image3");
    const targetImage = document.getElementById(imageId);
    targetImage.style.display = "block";
  });
});

const imageContainers4 = document.getElementById("imageContainers4");
const buttons4 = document.querySelectorAll(".Button10, .Button11, .Button12");

function hideAllImages4() {
  imageContainers4.querySelectorAll("img").forEach((image) => {
    image.style.display = "none";
  });
}

hideAllImages4();

const firstImage4 = document.getElementById("image10");
firstImage4.style.display = "block";

buttons4.forEach((button) => {
  button.addEventListener("click", () => {
    hideAllImages4();
    const imageId = button.getAttribute("data-image4");
    const targetImage = document.getElementById(imageId);
    targetImage.style.display = "block";
  });
});
const imageContainers5 = document.getElementById("imageContainers5");
const buttons5 = document.querySelectorAll(".Button13, .Button14, .Button15");

function hideAllImages5() {
  imageContainers5.querySelectorAll("img").forEach((image) => {
    image.style.display = "none";
  });
}

hideAllImages5();

const firstImage5 = document.getElementById("image13");
firstImage5.style.display = "block";

buttons5.forEach((button) => {
  button.addEventListener("click", () => {
    hideAllImages5();
    const imageId = button.getAttribute("data-image5");
    const targetImage = document.getElementById(imageId);
    targetImage.style.display = "block";
  });
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

