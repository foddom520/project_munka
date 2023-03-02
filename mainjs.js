// Dark mode button
const darkModeBtn = document.querySelector("#dark-mode-btn");

darkModeBtn.addEventListener("click", () => {
  // Toggle dark mode class on body element
  document.body.classList.toggle("dark-mode");
  // Toggle dark mode class on cards
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => card.classList.toggle("dark-mode"));
  // Toggle dark mode class on buttons
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(button => button.classList.toggle("dark-mode"));
});
