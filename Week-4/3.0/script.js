// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// -----------------------------------------------------------------------------------------------
burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navList = document.querySelector(".nav-list");
// btn = document.querySelector(".btn-main");

burger.addEventListener("click", () => {
  //   btn.classList.toggle("v-class-resp");
  navList.classList.toggle("v-class-resp");
  navbar.classList.toggle("h-nav-resp");
});

// // ----------------------------------------------------------------

// const body = document.querySelector("body");
// const btn = document.querySelector(".mode_btn");
// const icon = document.querySelector(".btn_icon");

// //to save the dark mode use the object "local storage".

// //function that stores the value true if the dark mode is activated or false if it's not.
// function store(value) {
//   localStorage.setItem("darkmode", value);
// }

// //function that indicates if the "darkmode" property exists. It loads the page as we had left it.
// function load() {
//   const darkmode = localStorage.getItem("darkmode");

//   //if the dark mode was never activated
//   if (!darkmode) {
//     store(false);
//     icon.classList.add("fa-sun");
//   } else if (darkmode == "true") {
//     //if the dark mode is activated
//     body.classList.add("darkmode");
//     icon.classList.add("fa-moon");
//   } else if (darkmode == "false") {
//     //if the dark mode exists but is disabled
//     btn - icon.classList.add("fa-sun");
//   }
// }

// load();

// btn.addEventListener("click", () => {
//   body.classList.toggle("darkmode");
//   icon.classList.add("animated");

//   //save true or false
//   store(body.classList.contains("darkmode"));

//   if (body.classList.contains("darkmode")) {
//     icon.classList.remove("fa-sun");
//     icon.classList.add("fa-moon");
//   } else {
//     icon.classList.remove("fa-moon");
//     icon.classList.add("fa-sun");
//   }

//   setTimeout(() => {
//     icon.classList.remove("animated");
//   }, 500);
// });
