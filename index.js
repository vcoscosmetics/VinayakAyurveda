const burger = document.querySelector(".burger");
const navlist = document.querySelector(".dropdown-menu");
const navbar = document.querySelector(".navbar");


console.log(navlist);

burger.addEventListener("click", () => {
  navlist.classList.toggle("v-class");
});


 