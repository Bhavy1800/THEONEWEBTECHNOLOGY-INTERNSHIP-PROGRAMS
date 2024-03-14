burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navList = document.querySelector(".nav-list");
search = document.querySelector(".search");

burger.addEventListener("click", () => {
  search.classList.toggle("v-class-resp");
  navList.classList.toggle("v-class-resp");
    navbar.classList.toggle("h-nav-resp");
});