// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll-spy active nav (matches the feel of polished portfolios)
const navLinks = [...document.querySelectorAll("[data-nav]")];
const sections = navLinks
  .map(a => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const setActive = (id) => {
  navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
};

const observer = new IntersectionObserver((entries) => {
  // choose the most visible section
  const visible = entries
    .filter(e => e.isIntersecting)
    .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];

  if (visible?.target?.id) setActive(visible.target.id);
}, { root: null, threshold: [0.2, 0.35, 0.5, 0.65] });

sections.forEach(s => observer.observe(s));

// Typewriter effect
const typedText = document.getElementById("typed-text");

if (typedText) {
  const text = "Sr. Software Developer";
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typedText.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 40); // typing speed
    }
  }

  typeEffect();
}
