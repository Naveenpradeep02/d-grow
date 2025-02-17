var typed = new Typed(".auto-type", {
  strings: [
    "Digital Marketing",
    "Social Media Marketing",
    "LEAD GENERATION",
    "SEO",
    "WEBSITE DESIGNING",
    "BRANDING",
  ],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

const text = document.querySelector(".circle-text p");

text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 5.7}deg)">${char}</span>`
  )
  .join("");
// let sliderContainer = document.querySelector("#sliderContainer");
// let slider = document.querySelector("#slider");
// let cards = document.querySelectorAll(".list-card");
// let elementShow = 3;
// let sliderContainerWidth = sliderContainer.clientWidth;

// if (document.body.clientWidth <= 768) {
//   elementShow = 1;
// }

// let cardWidth = sliderContainerWidth / elementShow;
// let cardMargin = 20;

// slider.style.width = (cardWidth + cardMargin) * cards.length + "px";
// slider.style.transition = "margin";
// slider.style.transitionDuration = "1s";

// cards.forEach((card) => {
//   card.style.width = cardWidth + "px";
//   card.style.marginRight = cardMargin + "px";
// });

// if (!slider.style.marginLeft) {
//   slider.style.marginLeft = "0px";
// }

// const next = () => {
//   let currentMargin = parseInt(slider.style.marginLeft) || 0;
//   let maxMargin = -((cardWidth + cardMargin) * (cards.length - elementShow));

//   if (currentMargin > maxMargin) {
//     slider.style.marginLeft = `${currentMargin - (cardWidth + cardMargin)}px`;
//   }
// };

// const prev = () => {
//   let currentMargin = parseInt(slider.style.marginLeft) || 0;

//   if (currentMargin < 0) {
//     slider.style.marginLeft = `${currentMargin + (cardWidth + cardMargin)}px`;
//   }
// };

let sliderContainer = document.querySelector("#sliderContainer");
let slider = document.querySelector("#slider");
let cards = document.querySelectorAll(".list-card");
let elementShow = 3;
let sliderContainerWidth = sliderContainer.clientWidth;

if (document.body.clientWidth <= 768) {
  elementShow = 1;
}

let cardWidth = sliderContainerWidth / elementShow;
let cardMargin = 0;

slider.style.width = (cardWidth + cardMargin) * cards.length + "px";
slider.style.transition = "margin 1s ease-in-out";

cards.forEach((card) => {
  card.style.width = cardWidth + "px";
  card.style.marginRight = cardMargin + "px";
});

if (!slider.style.marginLeft) {
  slider.style.marginLeft = "0px";
}

const next = () => {
  let currentMargin = parseInt(slider.style.marginLeft) || 0;
  let maxMargin = -((cardWidth + cardMargin) * (cards.length - elementShow));

  if (currentMargin > maxMargin) {
    slider.style.marginLeft = `${currentMargin - (cardWidth + cardMargin)}px`;
  } else {
    slider.style.marginLeft = "0px"; // Reset to the first card
  }
};

const prev = () => {
  let currentMargin = parseInt(slider.style.marginLeft) || 0;

  if (currentMargin < 0) {
    slider.style.marginLeft = `${currentMargin + (cardWidth + cardMargin)}px`;
  }
};

// Auto Slider
let autoSlide = setInterval(next, 3000);

// Pause on hover
sliderContainer.addEventListener("mouseenter", () => {
  clearInterval(autoSlide);
});

sliderContainer.addEventListener("mouseleave", () => {
  autoSlide = setInterval(next, 5000);
});
