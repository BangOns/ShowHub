const burgerButton = document.querySelector(".burgerNav");
const listBurger = document.querySelector(".listBurgerNav");
burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("active");
  listBurger.classList.toggle("activeList");
});
