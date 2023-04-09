const burgerButton2 = document.querySelector(".burgerNav");
const listBurger2 = document.querySelector(".listBurgerNav");

const navLinks = document.querySelectorAll(".list p");
const navLinksTablet = document.querySelectorAll(".thisList p");
const section = document.querySelectorAll("main");
const navbarDesktop = document.querySelector(".navBar");
const header = document.querySelector(".header");
const main1 = document.querySelector(".main1");
const main2 = document.querySelector(".main2");
const main3 = document.querySelector(".main3");
const main4 = document.querySelector(".main4");
const mainSearch1 = document.querySelector(".mainSearch");
const myMovie = document.querySelector(".myMovie");
const ButtonStart = document.querySelector(".ButtonStart");

ButtonStart.addEventListener("click", () => {
  mainSearch1.style.display = "none";

  header.style.display = "block";
  main1.style.display = "block";
  main2.style.display = "block";
  main3.style.display = "block";
  main4.style.display = "block";
  window.scrollTo(0, 760);
  if (innerWidth > `620` && innerWidth < `924`) {
    window.scrollTo(0, 730);
  } else if (innerWidth < `620`) {
    window.scrollTo(0, 575);
  }
});

myMovie.addEventListener("click", () => {
  mainSearch1.style.display = "none";
  header.style.display = "block";
  main1.style.display = "block";
  main2.style.display = "block";
  main3.style.display = "block";
  main4.style.display = "block";
  window.scrollTo(0, 0);
});

navLinks[0].addEventListener("click", () => {
  mainSearch1.style.display = "none";

  header.style.display = "block";
  main1.style.display = "block";
  main2.style.display = "block";
  main3.style.display = "block";
  main4.style.display = "block";
  window.scrollTo(0, 760);
});
navLinks[1].addEventListener("click", () => {
  mainSearch1.style.display = "none";

  header.style.display = "block";
  main1.style.display = "block";
  main2.style.display = "block";
  main3.style.display = "block";
  main4.style.display = "block";
  window.scrollTo(0, 1254);
});
navLinks[2].addEventListener("click", () => {
  mainSearch1.style.display = "none";

  header.style.display = "block";
  main1.style.display = "block";
  main2.style.display = "block";
  main3.style.display = "block";
  main4.style.display = "block";
  window.scrollTo(0, 1766);
});
navLinks[3].addEventListener("click", () => {
  mainSearch1.style.display = "none";

  header.style.display = "block";
  main1.style.display = "block";
  main2.style.display = "block";
  main3.style.display = "block";
  main4.style.display = "block";
  window.scrollTo(0, 2249);
});
navLinksTablet[0].addEventListener("click", () => {
  mainSearch1.style.display = "none";

  header.style.display = "block";
  main1.style.display = "block";
  main2.style.display = "block";
  main3.style.display = "block";
  main4.style.display = "block";
  if (innerWidth > `620` && innerWidth < `924`) {
    window.scrollTo(0, 730);
  } else if (innerWidth < `620`) {
    window.scrollTo(0, 575);
  }

  listBurger2.classList.remove("activeList");
  burgerButton2.classList.remove("active");
});
navLinksTablet[1].addEventListener("click", () => {
  header.style.display = "block";
  main1.style.display = "block";
  main2.style.display = "block";
  main3.style.display = "block";
  main4.style.display = "block";
  if (innerWidth > `620` && innerWidth < `924`) {
    window.scrollTo(0, 1247);
  } else if (innerWidth < `620`) {
    window.scrollTo(0, 1038);
  }
  listBurger2.classList.remove("activeList");
  burgerButton2.classList.remove("active");
});
navLinksTablet[2].addEventListener("click", () => {
  header.style.display = "block";
  main1.style.display = "block";
  main2.style.display = "block";
  main3.style.display = "block";
  main4.style.display = "block";
  if (innerWidth > `620` && innerWidth < `924`) {
    window.scrollTo(0, 1747);
  } else if (innerWidth < `620`) {
    window.scrollTo(0, 1515);
  }
  listBurger2.classList.remove("activeList");
  burgerButton2.classList.remove("active");
});
navLinksTablet[3].addEventListener("click", () => {
  header.style.display = "block";
  main1.style.display = "block";
  main2.style.display = "block";
  main3.style.display = "block";
  main4.style.display = "block";
  if (innerWidth > `620` && innerWidth < `924`) {
    window.scrollTo(0, 2242);
  } else if (innerWidth < `620`) {
    window.scrollTo(0, 2033);
  }
  listBurger2.classList.remove("activeList");
  burgerButton2.classList.remove("active");
});
