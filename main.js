const nav = document.querySelector("nav");
const mobileNav = document.querySelector("nav.mobile-nav");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const menuIcon = document.querySelector(".menu-icon");
const mobileMenuCotainer = document.querySelector(".mobile-menu-container");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    nav.classList.add("scrolled");
    mobileNav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
    mobileNav.classList.remove("scrolled");
  }
});

menuIcon.addEventListener("click", () => {
  mobileMenuCotainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  mobileMenuCotainer.classList.remove("active");
});
