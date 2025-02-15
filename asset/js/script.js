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
    (char, i) => `<span style="transform:rotate(${i * 6}deg)">${char}</span>`
  )
  .join("");
