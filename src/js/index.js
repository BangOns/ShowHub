const burgerButton = document.querySelector(".burgerNav");
const listBurger = document.querySelector(".listBurgerNav");
// Recomended
const ListFilm = document.querySelector(".thisFilm");
const buttonNext = document.querySelector(".swiper-button-next");
const buttonPrev = document.querySelector(".swiper-button-prev");
let arr = [];
let x = 0;
// Tv Show
const ListFilmTvShow = document.querySelector(".TvShow");
const buttonNextTv = document.querySelector(".nextTv");
const buttonPrevTV = document.querySelector(".prevTv");
let arr2 = [];
let x2 = 0;
// Populer
const ListFilmPopuler = document.querySelector(".Popular");
const buttonNextPopuler = document.querySelector(".nextPopular");
const buttonPrevPopuler = document.querySelector(".prevPopular");
let arr3 = [];
let x3 = 0;

// Indonesia
const ListFilmIndonesia = document.querySelector(".Indonesia");
const buttonNextIndonesia = document.querySelector(".nextIndonesia");
const buttonPrevIndonesia = document.querySelector(".prevIndonesia");
let arr4 = [];
let x4 = 0;

//Register
const Buttonclose = document.querySelector(".thisClose");
const KotakRegister = document.querySelector(".containerSignUp");
const ButtonSignUp = document.querySelectorAll(".thisSignUp");

//SignIn
const ButtoncloseSignIn = document.querySelector(".thisCloseSignIn");
const KotakSignIn = document.querySelector(".containerSignIn");
const ButtonSignIn = document.querySelectorAll(".thisSignIn");
// Burger Button
burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("active");
  listBurger.classList.toggle("activeList");
});

ButtoncloseSignIn.addEventListener("click", () => {
  KotakSignIn.style.display = "none";
});
Buttonclose.addEventListener("click", () => {
  KotakRegister.style.display = "none";
});
ButtonSignUp[0].addEventListener("click", () => {
  KotakRegister.style.display = "block";
});
ButtonSignUp[1].addEventListener("click", () => {
  KotakRegister.style.display = "block";
  listBurger.classList.remove("activeList");
  burgerButton.classList.remove("active");
});
ButtonSignIn[0].addEventListener("click", () => {
  KotakSignIn.style.display = "block";
});
ButtonSignIn[1].addEventListener("click", () => {
  KotakSignIn.style.display = "block";
  listBurger.classList.remove("activeList");
  burgerButton.classList.remove("active");
});

// Recomended
// buttonNext.addEventListener("click", () => {
//   console.log(innerWidth);
//   if (innerWidth >= 1550) {
//     x += 180;
//     let stop = 180 * (arr.length - 1);
//     if (x > stop) {
//       x = stop;
//     }
//   } else if (innerWidth >= 1340 && innerWidth <= 1560) {
//     x += 195;
//     let stop = 195 * (arr.length - 1);
//     if (x > stop) {
//       x = stop;
//     }
//   }
//   // if (innerWidth <= 1000 || innerWidth <= 1340) {
//   //   x += 210;
//   //   let stop = 210 * (arr.length - 1);
//   //   if (x > stop) {
//   //     x = stop;
//   //   }
//   // }
//   ListFilm.style.transform = "translateX(-" + x + "px)";
// });
// buttonPrev.addEventListener("click", () => {
//   console.log(x);
//   if (x === 0) {
//     ListFilm.style.transform = "translateX(0px)";
//     return (x = 0);
//   } else {
//     x -= 205;
//     ListFilm.style.transform = "translateX(-" + x + "px)";
//   }
// });

// // Tv Show
// buttonNextTv.addEventListener("click", () => {
//   console.log("ok");
//   x2 += 205;
//   let stop = 205 * (arr.length - 1);
//   if (x2 > stop) {
//     x2 = stop;
//   }
//   ListFilmTvShow.style.transform = "translateX(-" + x2 + "px)";
// });
// buttonPrevTV.addEventListener("click", () => {
//   if (x2 === 0) {
//     ListFilmTvShow.style.transform = "translateX(0px)";
//     return (x2 = 0);
//   } else {
//     x2 -= 205;
//     ListFilmTvShow.style.transform = "translateX(-" + x2 + "px)";
//   }
// });

// // Popular
// buttonNextPopuler.addEventListener("click", () => {
//   console.log("ok");
//   x3 += 205;
//   let stop = 205 * (arr.length - 1);
//   if (x3 > stop) {
//     x3 = stop;
//   }
//   ListFilmPopuler.style.transform = "translateX(-" + x3 + "px)";
// });
// buttonPrevPopuler.addEventListener("click", () => {
//   if (x3 === 0) {
//     ListFilmPopuler.style.transform = "translateX(0px)";
//     return (x3 = 0);
//   } else {
//     x3 -= 205;
//     ListFilmPopuler.style.transform = "translateX(-" + x3 + "px)";
//   }
// });

// Recomended id
async function getDataId1() {
  const FIlm = await document.querySelectorAll(".Film");
  FIlm.forEach((v) => {
    v.addEventListener("click", async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${v.dataset["id"]}?api_key=df3bdd5a174cac305c5d71d51733fff7`,
          {
            method: "GET",
          }
        );
        let hasilRes = await response.json();
        return hasilRes;
      } catch (error) {
        console.log(error);
      }
      console.log(v.dataset["id"]);
    });
  });
}
// Tv Show id
async function getDataId2() {
  const FIlm = await document.querySelectorAll(".Film2");
  FIlm.forEach((v) => {
    v.addEventListener("click", async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${v.dataset["id"]}?api_key=df3bdd5a174cac305c5d71d51733fff7`,
          {
            method: "GET",
          }
        );
        let hasilRes = await response.json();
        console.log(hasilRes);
        return hasilRes;
      } catch (error) {
        console.log(error);
      }
      console.log(v.dataset["id"]);
    });
  });
}
// Popular id
async function getDataId3() {
  const FIlm = await document.querySelectorAll(".Film3");
  FIlm.forEach((v) => {
    v.addEventListener("click", async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${v.dataset["id"]}?api_key=df3bdd5a174cac305c5d71d51733fff7`,
          {
            method: "GET",
          }
        );
        let hasilRes = await response.json();
        return hasilRes;
      } catch (error) {
        console.log(error);
      }
      console.log(v.dataset["id"]);
    });
  });
}
// Indonesia id
async function getDataId4() {
  const FIlm = await document.querySelectorAll(".Film4");
  FIlm.forEach((v) => {
    v.addEventListener("click", async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${v.dataset["id"]}?api_key=df3bdd5a174cac305c5d71d51733fff7`,
          {
            method: "GET",
          }
        );
        let hasilRes = await response.json();
        return hasilRes;
      } catch (error) {
        console.log(error);
      }
      console.log(v.dataset["id"]);
    });
  });
}

// Get API
const data = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=df3bdd5a174cac305c5d71d51733fff7&language=en-US&page=1",
    {
      method: "GET",
    }
  );

  let ress = await response.json();
  return ress;
};

const renderData = async () => {
  let response = await data();
  let html = "";
  response.results.forEach((res) => {
    arr.push(res);
    let MyFilm = `<div class="Film" data-id=${res.id}>
    <div class="imgFilm">
    <img src=${`https://image.tmdb.org/t/p/original/${res.poster_path}`} alt="" />
    </div>
    <div class="nameFilm">
    <p>${res.original_title}</p>
    </div>
    </div>`;
    html += MyFilm;
  });
  ListFilm.innerHTML = html;
  if (html.length !== 0) {
    getDataId1();
  }
  return arr;
};

renderData();

// Tv Show
const dataTv = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/tv?api_key=df3bdd5a174cac305c5d71d51733fff7&language=en-US&page=1",
    {
      method: "GET",
    }
  );
  let ress = await response.json();
  return ress;
};

const renderDataTv = async () => {
  let response = await dataTv();
  let html = "";
  response.results.forEach((res) => {
    arr2.push(res);
    let MyFilm = `<div class="Film2" data-id=${res.id}>
  <div class="imgFilm2">
    <img src=${`https://image.tmdb.org/t/p/original/${res.poster_path}`} alt="" />
  </div>
  <div class="nameFilm2">
    <p>${res.name}</p>
  </div>
</div>`;
    html += MyFilm;
  });
  ListFilmTvShow.innerHTML = html;
  if (html.length !== 0) {
    getDataId2();
  }
  return arr2;
};

renderDataTv();

// Populer

const dataPopular = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=df3bdd5a174cac305c5d71d51733fff7&page=1",
    {
      method: "GET",
    }
  );
  let ress = await response.json();
  return ress;
};

const renderDataPopular = async () => {
  let response = await dataPopular();
  let html = "";
  response.results.forEach((res) => {
    arr3.push(res);
    let MyFilm = `<div class="Film3" data-id=${res.id}>
  <div class="imgFilm3">
    <img src=${`https://image.tmdb.org/t/p/original/${res.poster_path}`} alt="" />
  </div>
  <div class="nameFilm3">
    <p>${res.original_title}</p>
  </div>
</div>`;
    html += MyFilm;
  });
  ListFilmPopuler.innerHTML = html;
  if (html.length !== 0) {
    getDataId3();
  }
  return arr3;
};

renderDataPopular();

// Indonesia
const dataIndonesia = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/keyword/7348-indonesia/movies?api_key=df3bdd5a174cac305c5d71d51733fff7&language=id-ID&page=1",
    {
      method: "GET",
    }
  );
  let ress = await response.json();
  return ress;
};

const renderDataIndonesia = async () => {
  let response = await dataIndonesia();
  let html = "";
  response.results.forEach((res) => {
    if (res.original_language === "id") {
      arr4.push(res);
      let MyFilm = `<div class="Film4" data-id=${res.id}>
    <div class="imgFilm4">
      <img src=${`https://image.tmdb.org/t/p/original/${res.poster_path}`} alt="" />
    </div>
    <div class="nameFilm4">
      <p>${res.original_title}</p>
    </div>
  </div>`;
      html += MyFilm;
    }
  });
  ListFilmIndonesia.innerHTML = html;
  if (html.length !== 0) {
    getDataId4();
  }
  return arr4;
};

renderDataIndonesia();
