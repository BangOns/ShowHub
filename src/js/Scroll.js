const burgerButton2 = document.querySelector(".burgerNav");
const listBurger2 = document.querySelector(".listBurgerNav");

const navLinks = document.querySelectorAll(".list p");
const navLinksTablet = document.querySelectorAll(".thisList p");
const section = document.querySelectorAll("main");
const navbarDesktop = document.querySelector(".navBar");

navLinks[0].addEventListener("click", () => {
  window.scrollTo(0, 760);
});
navLinks[1].addEventListener("click", () => {
  window.scrollTo(0, 1254);
});
navLinks[2].addEventListener("click", () => {
  window.scrollTo(0, 1766);
});
navLinks[3].addEventListener("click", () => {
  window.scrollTo(0, 2249);
});
navLinksTablet[0].addEventListener("click", () => {
  if (innerWidth > `620` && innerWidth < `924`) {
    window.scrollTo(0, 730);
  } else if (innerWidth < `620`) {
    window.scrollTo(0, 575);
  }
  listBurger2.classList.remove("activeList");
  burgerButton2.classList.remove("active");
});
navLinksTablet[1].addEventListener("click", () => {
  if (innerWidth > `620` && innerWidth < `924`) {
    window.scrollTo(0, 1247);
  } else if (innerWidth < `620`) {
    window.scrollTo(0, 1038);
  }
  listBurger2.classList.remove("activeList");
  burgerButton2.classList.remove("active");
});
navLinksTablet[2].addEventListener("click", () => {
  if (innerWidth > `620` && innerWidth < `924`) {
    window.scrollTo(0, 1747);
  } else if (innerWidth < `620`) {
    window.scrollTo(0, 1515);
  }
  listBurger2.classList.remove("activeList");
  burgerButton2.classList.remove("active");
});
navLinksTablet[3].addEventListener("click", () => {
  if (innerWidth > `620` && innerWidth < `924`) {
    window.scrollTo(0, 2242);
  } else if (innerWidth < `620`) {
    window.scrollTo(0, 2033);
  }
  listBurger2.classList.remove("activeList");
  burgerButton2.classList.remove("active");
});
