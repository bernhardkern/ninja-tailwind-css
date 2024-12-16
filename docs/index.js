const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
  console.log("burger clicked");
  menu.classList.toggle("hidden");
});
