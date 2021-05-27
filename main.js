const hamburger = document.querySelector(".hamburger");
const navlink = document.querySelector("#navlink");

hamburger.addEventListener("click", () => {
  navlink.classList.toggle("display");
});
