// script.js

window.addEventListener("load", () => {
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  } else {
    console.error("Nav toggle or links not found");
  }
});

// JavaScript to animate the sections on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("fade-in");
    } else {
      section.classList.remove("fade-in");
    }
  });
});
// Scroll animation logic
const sections = document.querySelectorAll("section");
const options = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      if (entry.target.id === "about") {
        document.querySelector(".about-image img").classList.add("flipped");
      }
    } else {
      entry.target.classList.remove("show");
      if (entry.target.id === "about") {
        document.querySelector(".about-image img").classList.remove("flipped");
      }
    }
  });
}, options);

sections.forEach((section) => {
  section.classList.add("animate");
  observer.observe(section);
});
window.addEventListener("scroll", function () {
  const skillItems = document.querySelectorAll(".skill-item");

  skillItems.forEach((item, index) => {
    const position = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight - 100) {
      setTimeout(() => {
        item.style.transform = "translateY(0)";
        item.style.opacity = "1";
      }, index * 150); // Adjusting the delay for each skill
    }
  });
});
