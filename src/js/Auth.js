// Register
const inputNameRegister = document.querySelector(".inputNameRegister");
const inputPasswordRegister = document.querySelector(".inputPasswordRegister");
const inputEmailRegister = document.querySelector(".inputEmailRegister");
const inputConfPasswordRegister = document.querySelector(
  ".inputConfPasswordRegister"
);
const userRegister = document.querySelector(".IsiRegister");
const inputNumberRegister = document.querySelector(".inputNumberRegister");
const ButtonInputName = document.querySelector(".buttonSignUp");
const KotakRegister2 = document.querySelector(".containerSignUp");
const readySignIn2 = document.querySelector(".readySignIn");

// Sign In
const KotakSignIn2 = document.querySelector(".containerSignIn");
const userLogin = document.querySelector(".IsiSignIn");
const inputNameLogin = document.querySelector(".inputNameLogin");
const inputPasswordLogin = document.querySelector(".inputPasswordLogin");

// function Register
userRegister.addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = inputNameRegister.value;
  const pw = inputPasswordRegister.value;
  const confPw = inputConfPasswordRegister.value;
  const Email = inputEmailRegister.value;
  const Number = inputNumberRegister.value;
  console.log(pw);

  if (pw != confPw) {
    alert("Mohon Diperiksa Kembali");
  } else {
    const hasil = { nama, pw, confPw, Email, Number };
    const displayLogin = { nama, pw };
    let item = getLocaleStorage();
    item.push(hasil);
    localStorage.setItem("ListUser", JSON.stringify(item));
    localStorage.setItem("LoginUser", JSON.stringify(displayLogin));
    inputNameRegister.value = "";
    inputPasswordRegister.value = "";
    inputEmailRegister.value = "";
    inputConfPasswordRegister.value = "";
    inputNumberRegister.value = "";
    KotakRegister.style.display = "none";
  }
});

readySignIn2.addEventListener("click", () => {
  KotakRegister2.style.display = "none";
  KotakSignIn2.style.display = "block";
});

// Function SignIn
userLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameLogin = inputNameLogin.value;
  const passwordLogin = inputPasswordLogin.value;
  const getItem = localStorage.getItem("ListUser");
  const getUser = JSON.parse(getItem);
  const FIndUserName = getUser.find((value) => value.nama == nameLogin);
  const FIndUserPw = getUser.find((value) => value.pw == passwordLogin);
  if (FIndUserName && FIndUserPw) {
    let myUser = { nama: FIndUserName.nama, pw: FIndUserPw.pw };
    localStorage.setItem("LoginUser", JSON.stringify(myUser));
    KotakSignIn2.style.display = "none";
  } else {
    alert("Akun anda tidak ditemui Mohon registrasi dahulu");
    inputNameLogin.value = "";
    inputPasswordLogin.value = "";
  }
});

// Display Login
const NotLogin = document.querySelector(".Auth");
const containerLogin = document.querySelector(".Login");
const thisSignInLogin = document.querySelectorAll(".thisSignInLogin");
const Logout = document.querySelectorAll(".thisLogout");

const displayBurgerNotLogin = document.querySelector(".NotLogged");
const displayBurgerLogin = document.querySelector(".Logged");
const buttonLogin = document.querySelector(".myProfil");
const myLogout = document.querySelector(".Logout");
// Get data In LocalStorage and display to user
let NewUser = localStorage.getItem("LoginUser");
if (NewUser && innerWidth >= `924`) {
  NotLogin.style.display = "none";
  containerLogin.style.display = "flex";
  thisSignInLogin[0].innerHTML = `${JSON.parse(NewUser).nama}`;
  thisSignInLogin[1].innerHTML = `${JSON.parse(NewUser).nama}`;
} else if (NewUser && innerWidth < `924`) {
  console.log("ok");
  containerLogin.style.display = "none";
  NotLogin.style.display = "none";
  displayBurgerLogin.style.display = "flex";
  displayBurgerNotLogin.style.display = "none";
  thisSignInLogin[0].innerHTML = `${JSON.parse(NewUser).nama}`;
  thisSignInLogin[1].innerHTML = `${JSON.parse(NewUser).nama}`;
} else if (!NewUser && innerWidth < `924`) {
  displayBurgerLogin.style.display = "none ";
} else {
  containerLogin.style.display = "none";
  displayBurgerNotLogin.style.display = "flex";
  NotLogin.style.display = "flex";
}

window.addEventListener("resize", (e) => {
  if (e.target.innerWidth < `924`) {
    containerLogin.style.display = "none";
    NotLogin.style.display = "none";
  } else if (NewUser && e.target.innerWidth >= `924`) {
    NotLogin.style.display = "none";
    containerLogin.style.display = "flex";
  } else if (!NewUser && e.target.innerWidth >= `924`) {
    NotLogin.style.display = "flex";
    containerLogin.style.display = "none";
  }
});
buttonLogin.addEventListener("click", displayLogout);

function displayLogout() {
  if (myLogout.style.display == "flex") {
    myLogout.style.display = "none";
  } else {
    myLogout.style.display = "flex";
  }
}

Logout[0].addEventListener("click", () => {
  localStorage.removeItem("LoginUser");
  NotLogin.style.display = "flex";
  containerLogin.style.display = "none";
  displayBurgerNotLogin.style.display = "flex";
  displayBurgerLogin.style.display = "none";
});

Logout[1].addEventListener("click", () => {
  localStorage.removeItem("LoginUser");
  NotLogin.style.display = "flex";
  containerLogin.style.display = "none";
  displayBurgerNotLogin.style.display = "flex";
  displayBurgerLogin.style.display = "none";
});

function getLocaleStorage() {
  return localStorage.getItem("ListUser")
    ? JSON.parse(localStorage.getItem("ListUser"))
    : [];
}
