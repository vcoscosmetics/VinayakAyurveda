const burger = document.querySelector(".burger");
const navlist = document.querySelector(".nav-list");
const navbar = document.querySelector(".navbar");

burger.addEventListener("click", () => {
  navlist.classList.toggle("v-class");
  navbar.classList.toggle("h-nav");
});
