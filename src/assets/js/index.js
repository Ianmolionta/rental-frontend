const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  // Animate burger to X
  if (!mobileMenu.classList.contains("hidden")) {
    b1.style.transform = "rotate(45deg) translateY(10px)";
    b2.style.opacity = "0";
    b3.style.transform = "rotate(-45deg) translateY(-10px)";
  } else {
    b1.style.transform = "rotate(0) translateY(0)";
    b2.style.opacity = "1";
    b3.style.transform = "rotate(0) translateY(0)";
  }
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    b1.style.transform = "rotate(0) translateY(0)";
    b2.style.opacity = "1";
    b3.style.transform = "rotate(0) translateY(0)";
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offset = 80;
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Navbar background on scroll
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("shadow-xl");
  } else {
    nav.classList.remove("shadow-xl");
  }
});
