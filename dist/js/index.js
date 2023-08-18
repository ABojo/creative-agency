const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

//encapsulates slider logic
const slider = (function () {
  const heading = document.querySelector(".slider__heading");
  const image = document.querySelector(".slider__graphic img");
  const imageHeading = document.querySelector(".slider__graphic-overlay h3");
  const imageDate = document.querySelector(".slider__graphic-overlay span");

  let slideIndex = 0;

  const slides = [
    {
      heading: "Branding naming & guidelines",
      images: {
        desktop: "assets/images/desktop/image-slide-1.jpg",
        table: "assets/images/tablet/image-slide-1.jpg",
        mobile: "assets/images/mobile/image-slide-1.jpg",
      },
      imageHeading: "Lean Product Roadmap",
      imageDate: "2019 Project",
    },
    {
      heading: "Brand identity & merchandise",
      images: {
        desktop: "assets/images/desktop/image-slide-2.jpg",
        table: "assets/images/tablet/image-slide-2.jpg",
        mobile: "assets/images/mobile/image-slide-2.jpg",
      },
      imageHeading: "New Majestic Hotel",
      imageDate: "2018 Project",
    },
    {
      heading: "Brand identity & web design",
      images: {
        desktop: "assets/images/desktop/image-slide-3.jpg",
        table: "assets/images/tablet/image-slide-3.jpg",
        mobile: "assets/images/mobile/image-slide-3.jpg",
      },
      imageHeading: "Crypto Dashboard",
      imageDate: "2016 Project",
    },
  ];

  function renderSlide(slide) {
    heading.textContent = slide.heading;
    image.src = slide.images.desktop;
    imageHeading.textContent = slide.imageHeading;
    imageDate.textContent = slide.imageDate;
  }

  function next() {
    slideIndex += 1;

    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }

    const newSlide = slides[slideIndex];
    renderSlide(newSlide);
  }

  function previous() {
    slideIndex -= 1;

    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }

    const newSlide = slides[slideIndex];
    renderSlide(newSlide);
  }

  function init() {
    renderSlide(slides[slideIndex]);
  }

  return { init, next, previous };
})();

//setup the slider
slider.init();

//hook up slider controls
leftArrow.addEventListener("click", slider.previous);
rightArrow.addEventListener("click", slider.next);
