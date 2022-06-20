const sideBar = document.querySelector("#side-bar");
const burger = document.querySelector(".nav__burger-menu");

sideBar.addEventListener("click", (e) => {
  if (e.target.classList.contains("side-bar__container")) return;
  sideBar.classList.toggle("hidden");
});

burger.addEventListener("click", () => {
  sideBar.classList.toggle("hidden");
});
