// Constants
const hamButton = document.querySelector("#menu");
const nav = document.querySelector(".nav");

// Event Listeners
hamButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamButton.classList.toggle("open");
});