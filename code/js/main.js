// SELECTORS
const openNav = document.querySelector(".openNav");
const navLinks = document.querySelector(".side-menu-section");

// EVENTS
openNav.addEventListener("click", (e) => {
  openNav.classList.toggle("closeNav");
  if (!openNav.classList.contains("closeNav")) {
    navLinks.style = "display: none";
  } else {
    navLinks.style = "display: block";
  }
});

// CLicking on the navLinks container
navLinks.addEventListener("click", (e) => {
  openNav.classList.toggle("closeNav");
  if (!openNav.classList.contains("closeNav")) {
    navLinks.style = "display: none";
  } else {
    navLinks.style = "display: flex";
  }
});
