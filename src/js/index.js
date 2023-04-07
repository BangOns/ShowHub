const burgerButton = document.querySelector(".burgerNav");
const listBurger = document.querySelector(".listBurgerNav");
// Recomended
const ListFilm = document.querySelector(".thisFilm");
const buttonNext = document.querySelector(".swiper-button-next");
const buttonPrev = document.querySelector(".swiper-button-prev");
let arr = [];
let xRecomended1 = 0;

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

buttonNext.addEventListener("click", () => {
  xRecomended1++;
  if (xRecomended1 >= arr.length - 1) {
    xRecomended1 = arr.length - 1;
    buttonNext.style.display = "none";
  }
  buttonPrev.style.display = "block";
  if (innerWidth > `924`) {
    DisplayRecomendedDesktop(xRecomended1);
  } else if (innerWidth > `780` && innerWidth < `924`) {
    DisplayRecomendedTablet(xRecomended1);
  } else if (innerWidth > `430` && innerWidth < `780`) {
    DisplayRecomendedMobile1(xRecomended1);
  } else if (innerWidth < `430`) {
    DisplayRecomendedMobile2(xRecomended1);
  }
});
buttonPrev.addEventListener("click", () => {
  xRecomended1--;
  if (xRecomended1 == 0) {
    xRecomended1 = 0;
    buttonPrev.style.display = "none";
  }
  buttonNext.style.display = "block";

  if (innerWidth > `924`) {
    DisplayRecomendedDesktop(xRecomended1);
  } else if (innerWidth > `780` && innerWidth < `924`) {
    DisplayRecomendedTablet(xRecomended1);
  } else if (innerWidth > `430` && innerWidth < `780`) {
    DisplayRecomendedMobile1(xRecomended1);
  } else if (innerWidth < `430`) {
    DisplayRecomendedMobile2(xRecomended1);
  }
});

// // Tv Show
buttonNextTv.addEventListener("click", () => {
  x2++;
  if (x2 >= arr2.length - 1) {
    x2 = arr2.length - 1;
    buttonNextTv.style.display = "none";
  }
  buttonPrevTV.style.display = "block";
  if (innerWidth > `924`) {
    DisplayTvShowDesktop(x2);
  } else if (innerWidth > `780` && innerWidth < `924`) {
    DisplayTvShowTablet(x2);
  } else if (innerWidth > `430` && innerWidth < `780`) {
    DisplayTvShowMobile1(x2);
  } else if (innerWidth < `430`) {
    DisplayTvShowMobile2(x2);
  }
});
buttonPrevTV.addEventListener("click", () => {
  x2--;
  if (x2 == 0) {
    x2 = 0;
    buttonPrevTV.style.display = "none";
  }
  buttonNextTv.style.display = "block";

  if (innerWidth > `924`) {
    DisplayTvShowDesktop(x2);
  } else if (innerWidth > `780` && innerWidth < `924`) {
    DisplayTvShowTablet(x2);
  } else if (innerWidth > `430` && innerWidth < `780`) {
    DisplayTvShowMobile1(x2);
  } else if (innerWidth < `430`) {
    DisplayTvShowMobile2(x2);
  }
});

// // Popular
buttonNextPopuler.addEventListener("click", () => {
  x3++;
  if (x3 >= arr3.length - 1) {
    x3 = arr3.length - 1;
    buttonNextPopuler.style.display = "none";
  }
  buttonPrevPopuler.style.display = "block";
  if (innerWidth > `924`) {
    DisplayPopularDesktop(x3);
  } else if (innerWidth > `780` && innerWidth < `924`) {
    DisplayPopularTablet(x3);
  } else if (innerWidth > `430` && innerWidth < `780`) {
    DisplayPopularMobile1(x3);
  } else if (innerWidth < `430`) {
    DisplayPopularMobile2(x3);
  }
});
buttonPrevPopuler.addEventListener("click", () => {
  x3--;
  if (x3 == 0) {
    x3 = 0;
    buttonPrevPopuler.style.display = "none";
  }
  buttonNextPopuler.style.display = "block";

  if (innerWidth > `924`) {
    DisplayPopularDesktop(x3);
  } else if (innerWidth > `780` && innerWidth < `924`) {
    DisplayPopularTablet(x3);
  } else if (innerWidth > `430` && innerWidth < `780`) {
    DisplayPopularMobile1(x3);
  } else if (innerWidth < `430`) {
    DisplayPopularMobile2(x3);
  }
});

// Indonesia
buttonNextIndonesia.addEventListener("click", () => {
  x4++;
  if (x4 >= arr4.length - 1) {
    x4 = arr4.length - 1;
    buttonNextIndonesia.style.display = "none";
  }
  buttonPrevIndonesia.style.display = "block";
  if (innerWidth > `924`) {
    DisplayIndonesiaDesktop(x4);
  } else if (innerWidth > `780` && innerWidth < `924`) {
    DisplayIndonesiaTablet(x4);
  } else if (innerWidth > `430` && innerWidth < `780`) {
    DisplayIndonesiaMobile1(x4);
  } else if (innerWidth < `430`) {
    DisplayIndonesiaMobile2(x4);
  }
});
buttonPrevIndonesia.addEventListener("click", () => {
  x4--;
  if (x4 == 0) {
    x4 = 0;
    buttonPrevIndonesia.style.display = "none";
  }
  buttonNextIndonesia.style.display = "block";

  if (innerWidth > `924`) {
    DisplayIndonesiaDesktop(x4);
  } else if (innerWidth > `780` && innerWidth < `924`) {
    DisplayIndonesiaTablet(x4);
  } else if (innerWidth > `430` && innerWidth < `780`) {
    DisplayIndonesiaMobile1(x4);
  } else if (innerWidth < `430`) {
    DisplayIndonesiaMobile2(x4);
  }
});

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
if (innerWidth > `924`) {
  const renderDataRecomendedDesktop = async () => {
    let response = await data();
    let x = 0;
    let kelompok = [];
    let kelompok2 = [];
    let arrFalse = [];
    while (x < response.results.length - 1) {
      if (kelompok.length == 5) {
        arr.push(kelompok);
        kelompok = [];
      } else {
        kelompok.push(response.results[x]);
      }
      x++;
    }

    DisplayRecomendedDesktop();
    return arr;
  };
  renderDataRecomendedDesktop();
  function DisplayRecomendedDesktop(page = 0) {
    let html = "";
    arr[page].forEach((res) => {
      let vote = res.vote_average.toLocaleString().split(".").join("");
      let MyFilm = `<div class="Film" data-id=${res.id}>
        <div class="imgFilm">
        <img src=${`https://image.tmdb.org/t/p/original/${res.poster_path}`} alt="" />
        </div>
        <div class="rating">
        <div class="Angkarating"><p>${res.vote_average}</p></div>
        <div class="panjangRating">
        <div class="thisSize" style="width:${vote}%;" ></div>
        </div>
        </div>
        <div class="nameFilm">
        <p>${res.original_title}</p>
        </div>
        </div>`;
      html += MyFilm;
    });
    ListFilm.innerHTML = html;
    if (html.length != 0) {
      getDataId1();
    }
  }
}

if (innerWidth > `780` && innerWidth < `924`) {
  const renderDataRecomendedTablet = async () => {
    let response = await data();
    let x = 0;
    let kelompok = [];
    while (x < response.results.length - 1) {
      if (kelompok.length == 4) {
        arr.push(kelompok);
        kelompok = [];
      } else {
        kelompok.push(response.results[x]);
      }
      x++;
    }
    DisplayRecomendedTablet();
    return arr;
  };
  renderDataRecomendedTablet();
  function DisplayRecomendedTablet(page = 0) {
    let html = "";
    arr[page].forEach((res) => {
      let vote = res.vote_average.toLocaleString().split(".").join("");
      let MyFilm = `<div class="Film" data-id=${res.id}>
        <div class="imgFilm">
        <img src=${`https://image.tmdb.org/t/p/original/${res.poster_path}`} alt="" />
        </div>
        <div class="rating">
        <div class="Angkarating"><p>${res.vote_average}</p></div>
        <div class="panjangRating">
        <div class="thisSize" style="width:${vote}%;" ></div>
        </div>
        </div>
        <div class="nameFilm">
        <p>${res.original_title}</p>
        </div>
        </div>`;
      html += MyFilm;
    });
    ListFilm.innerHTML = html;
    if (html.length != 0) {
      getDataId1();
    }
  }
}

if (innerWidth > `430` && innerWidth < `780`) {
  const renderDataRecomendedMobile1 = async () => {
    let response = await data();
    let x = 0;
    let kelompok = [];
    while (x < response.results.length - 1) {
      if (kelompok.length == 2) {
        arr.push(kelompok);
        kelompok = [];
      } else {
        kelompok.push(response.results[x]);
      }
      x++;
    }
    DisplayRecomendedMobile1();
    return arr;
  };
  renderDataRecomendedMobile1();
  function DisplayRecomendedMobile1(page = 0) {
    let html = "";
    arr[page].forEach((res) => {
      let vote = res.vote_average.toLocaleString().split(".").join("");
      let MyFilm = `<div class="Film" data-id=${res.id}>
        <div class="imgFilm">
        <img src=${`https://image.tmdb.org/t/p/original/${res.poster_path}`} alt="" />
        </div>
        <div class="rating">
        <div class="Angkarating"><p>${res.vote_average}</p></div>
        <div class="panjangRating">
        <div class="thisSize" style="width:${vote}%;" ></div>
        </div>
        </div>
        <div class="nameFilm">
        <p>${res.original_title}</p>
        </div>
        </div>`;
      html += MyFilm;
    });
    ListFilm.innerHTML = html;
    if (html.length != 0) {
      getDataId1();
    }
  }
}
if (innerWidth < `430`) {
  const renderDataRecomendedMobile2 = async () => {
    let response = await data();

    for (var i of response.results) {
      arr.push(i);
    }

    DisplayRecomendedMobile2();
    return arr;
  };
  renderDataRecomendedMobile2();
  function DisplayRecomendedMobile2(page = 0) {
    let html = "";

    let vote = arr[page].vote_average.toLocaleString().split(".").join("");
    let MyFilm = `<div class="Film" data-id=${arr[page].id}>
        <div class="imgFilm">
        <img src=${`https://image.tmdb.org/t/p/original/${arr[page].poster_path}`} alt="" />
        </div>
        <div class="rating">
        <div class="Angkarating"><p>${arr[page].vote_average}</p></div>
        <div class="panjangRating">
        <div class="thisSize" style="width:${vote}%;" ></div>
        </div>
        </div>
        <div class="nameFilm">
        <p>${arr[page].original_title}</p>
        </div>
        </div>`;
    html += MyFilm;

    ListFilm.innerHTML = html;
    if (html.length != 0) {
      getDataId1();
    }
  }
}
// Tv Show

const dataTv = async () => {
  const response = await fetch(
    "https:api.themoviedb.org/3/discover/tv?api_key=df3bdd5a174cac305c5d71d51733fff7&language=en-US&page=1",
    {
      method: "GET",
    }
  );

  let ress = await response.json();
  return ress;
};
if (innerWidth > `924`) {
  const renderDataTvShowDesktop = async () => {
    let response = await dataTv();
    let x = 0;
    let kelompok = [];
    while (x < response.results.length - 1) {
      if (kelompok.length == 5) {
        arr2.push(kelompok);
        kelompok = [];
      } else {
        kelompok.push(response.results[x]);
      }
      x++;
    }
    DisplayTvShowDesktop();
    return arr2;
  };
  renderDataTvShowDesktop();
  function DisplayTvShowDesktop(page = 0) {
    let html = "";

    arr2[page].forEach((res) => {
      let vote = res.vote_average.toLocaleString().split(".").join("");
      let MyFilm = `<div class="Film" data-id=${res.id}>
        <div class="imgFilm">
        <img src=${`https://image.tmdb.org/t/p/original/${res.poster_path}`} alt="" />
        </div>
        <div class="rating">
        <div class="Angkarating"><p>${res.vote_average}</p></div>
        <div class="panjangRating">
        <div class="thisSize" style="width:${vote}%;" ></div>
        </div>
        </div>
        <div class="nameFilm">
        <p>${res.name}</p>
        </div>
        </div>`;
      html += MyFilm;
    });
    ListFilmTvShow.innerHTML = html;
    if (html.length != 0) {
      getDataId2();
    }
  }
}

if (innerWidth > `780` && innerWidth < `924`) {
  const renderDataTvShowTablet = async () => {
    let response = await dataTv();
    let x = 0;
    let kelompok = [];
    while (x < response.results.length - 1) {
      if (kelompok.length == 4) {
        arr2.push(kelompok);
        kelompok = [];
      } else {
        kelompok.push(response.results[x]);
      }
      x++;
    }
    DisplayTvShowTablet();
    return arr2;
  };
  renderDataTvShowTablet();
  function DisplayTvShowTablet(page = 0) {
    let html = "";

    arr2[page].forEach((res) => {
      let vote = res.vote_average.toLocaleString().split(".").join("");
      let MyFilm = `<div class="Film" data-id=${res.id}>
        <div class="imgFilm">
        <img src=${`https://image.tmdb.org/t/p/original/${res.poster_path}`} alt="" />
        </div>
        <div class="rating">
        <div class="Angkarating"><p>${res.vote_average}</p></div>
        <div class="panjangRating">
        <div class="thisSize" style="width:${vote}%;" ></div>
        </div>
        </div>
        <div class="nameFilm">
        <p>${res.name}</p>
        </div>
        </div>`;
      html += MyFilm;
    });
    ListFilmTvShow.innerHTML = html;
    if (html.length != 0) {
      getDataId2();
    }
  }
}

if (innerWidth > `430` && innerWidth < `780`) {
  const renderDataTvShowMobile1 = async () => {
    let response = await dataTv();
    let x = 0;
    let kelompok = [];
    while (x < response.results.length - 1) {
      if (kelompok.length == 2) {
        arr2.push(kelompok);
        kelompok = [];
      } else {
        kelompok.push(response.results[x]);
      }
      x++;
    }
    DisplayTvShowMobile1();
    return arr2;
  };
  renderDataTvShowMobile1();
  function DisplayTvShowMobile1(page = 0) {
    let html = "";

    arr2[page].forEach((res) => {
      let vote = res.vote_average.toLocaleString().split(".").join("");
      let MyFilm = `<div class="Film" data-id=${res.id}>
        <div class="imgFilm">
        <img src=${`https://image.tmdb.org/t/p/original/${res.poster_path}`} alt="" />
        </div>
        <div class="rating">
        <div class="Angkarating"><p>${res.vote_average}</p></div>
        <div class="panjangRating">
        <div class="thisSize" style="width:${vote}%;" ></div>
        </div>
        </div>
        <div class="nameFilm">
        <p>${res.name}</p>
        </div>
        </div>`;
      html += MyFilm;
    });
    ListFilmTvShow.innerHTML = html;
    if (html.length != 0) {
      getDataId2();
    }
  }
}
if (innerWidth < `430`) {
  const renderDataTvShowMobile2 = async () => {
    let response = await dataTv();

    for (let i of response.results) {
      arr2.push(i);
    }
    DisplayTvShowMobile2();
    return arr2;
  };
  renderDataTvShowMobile2();
  function DisplayTvShowMobile2(page = 0) {
    let html = "";
    let vote = arr2[page].vote_average.toLocaleString().split(".").join("");
    let MyFilm = `<div class="Film" data-id=${arr2[page].id}>
        <div class="imgFilm">
        <img src=${`https://image.tmdb.org/t/p/original/${arr2[page].poster_path}`} alt="" />
        </div>
        <div class="rating">
        <div class="Angkarating"><p>${arr2[page].vote_average}</p></div>
        <div class="panjangRating">
        <div class="thisSize" style="width:${vote}%;" ></div>
        </div>
        </div>
        <div class="nameFilm">
        <p>${arr2[page].name}</p>
        </div>
        </div>`;
    html += MyFilm;

    ListFilmTvShow.innerHTML = html;
    if (html.length != 0) {
      getDataId2();
    }
  }
}

// // Populer
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
if (innerWidth > `924`) {
  const renderDataPopularDesktop = async () => {
    let response = await dataPopular();
    let x = 0;
    let kelompok = [];
    while (x < response.results.length - 1) {
      if (kelompok.length == 5) {
        arr3.push(kelompok);
        kelompok = [];
      } else {
        kelompok.push(response.results[x]);
      }
      x++;
    }
    DisplayPopularDesktop();
    return arr3;
  };
  renderDataPopularDesktop();
  function DisplayPopularDesktop(page = 0) {
    let html = "";

    arr3[page].forEach((res) => {
      let vote = res.vote_average
        .toLocaleString()
        .split(".")
        .join("")
        .slice(0, 2);
      let MyFilm = `<div class="Film" data-id=${res.id}>
        <div class="imgFilm">
        <img src=${`https://image.tmdb.org/t/p/original/${res.poster_path}`} alt="" />
        </div>
        <div class="rating">
        <div class="Angkarating"><p>${String(res.vote_average).slice(
          0,
          3
        )}</p></div>
        <div class="panjangRating">
        <div class="thisSize" style="width:${vote}%;" ></div>
        </div>
        </div>
        <div class="nameFilm">
        <p>${res.original_title}</p>
        </div>
        </div>`;
      html += MyFilm;
    });
    ListFilmPopuler.innerHTML = html;
    if (html.length != 0) {
      getDataId3();
    }
  }
}

if (innerWidth > `780` && innerWidth < `924`) {
  const renderDataPopularTablet = async () => {
    let response = await dataPopular();
    let x = 0;
    let kelompok = [];
    while (x < response.results.length - 1) {
      if (kelompok.length == 4) {
        arr3.push(kelompok);
        kelompok = [];
      } else {
        kelompok.push(response.results[x]);
      }
      x++;
    }
    DisplayPopularTablet();
    return arr3;
  };
  renderDataPopularTablet();
  function DisplayPopularTablet(page = 0) {
    let html = "";

    arr3[page].forEach((res) => {
      let vote = res.vote_average
        .toLocaleString()
        .split(".")
        .join("")
        .slice(0, 2);
      let MyFilm = `<div class="Film" data-id=${res.id}>
        <div class="imgFilm">
        <img src=${`https://image.tmdb.org/t/p/original/${res.poster_path}`} alt="" />
        </div>
         <div class="rating">
        <div class="Angkarating"><p>${String(res.vote_average).slice(
          0,
          3
        )}</p></div>
        <div class="panjangRating">
        <div class="thisSize" style="width:${vote}%;" ></div>
        </div>
        </div>
        <div class="nameFilm">
        <p>${res.original_title}</p>
        </div>
        </div>`;
      html += MyFilm;
    });
    ListFilmPopuler.innerHTML = html;
    if (html.length != 0) {
      getDataId3();
    }
  }
}

if (innerWidth > `430` && innerWidth < `780`) {
  const renderDataPopularMobile1 = async () => {
    let response = await dataPopular();
    let x = 0;
    let kelompok = [];
    while (x < response.results.length - 1) {
      if (kelompok.length == 2) {
        arr3.push(kelompok);
        kelompok = [];
      } else {
        kelompok.push(response.results[x]);
      }
      x++;
    }
    DisplayPopularMobile1();
    return arr3;
  };
  renderDataPopularMobile1();
  function DisplayPopularMobile1(page = 0) {
    let html = "";

    arr3[page].forEach((res) => {
      let vote = res.vote_average
        .toLocaleString()
        .split(".")
        .join("")
        .slice(0, 2);
      let MyFilm = `<div class="Film" data-id=${res.id}>
        <div class="imgFilm">
        <img src=${`https://image.tmdb.org/t/p/original/${res.poster_path}`} alt="" />
        </div>
        <div class="rating">
        <div class="Angkarating"><p>${String(res.vote_average).slice(
          0,
          3
        )}</p></div>
        <div class="panjangRating">
        <div class="thisSize" style="width:${vote}%;" ></div>
        </div>
        </div>
        <div class="nameFilm">
        <p>${res.original_title}</p>
        </div>
        </div>`;
      html += MyFilm;
    });
    ListFilmPopuler.innerHTML = html;
    if (html.length != 0) {
      getDataId3();
    }
  }
}
if (innerWidth < `430`) {
  const renderDataPopularMobile2 = async () => {
    let response = await dataPopular();

    for (let i of response.results) {
      arr3.push(i);
    }
    DisplayPopularMobile2();
    return arr3;
  };
  renderDataPopularMobile2();
  function DisplayPopularMobile2(page = 0) {
    let html = "";

    let vote = arr3[page].vote_average
      .toLocaleString()
      .split(".")
      .join("")
      .slice(0, 2);
    let MyFilm = `<div class="Film" data-id=${arr3[page].id}>
        <div class="imgFilm">
        <img src=${`https://image.tmdb.org/t/p/original/${arr3[page].poster_path}`} alt="" />
        </div>
        <div class="rating">
        <div class="Angkarating"><p>${String(arr3[page].vote_average).slice(
          0,
          3
        )}</p></div>
        <div class="panjangRating">
        <div class="thisSize" style="width:${vote}%;" ></div>
        </div>
        </div>
        <div class="nameFilm">
        <p>${arr3[page].original_title}</p>
        </div>
        </div>`;
    html += MyFilm;

    ListFilmPopuler.innerHTML = html;
    if (html.length != 0) {
      getDataId3();
    }
  }
}

// // Indonesia
const dataIndonesia = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/keyword/7348-indonesia/movies?api_key=df3bdd5a174cac305c5d71d51733fff7&language=id-ID&page=1",
    {
      method: "GET",
    }
  );

  let ress = await response.json();
  let filt = ress.results.filter((value) => {
    return value.original_language == "id";
  });
  return filt;
};
if (innerWidth > `924`) {
  const renderDataIndonesiaDesktop = async () => {
    let response = await dataIndonesia();
    let x = 0;
    let kelompok = [];
    while (x <= response.length - 1) {
      if (kelompok.length == 4) {
        arr4.push(kelompok);
        kelompok = [];
      } else {
        kelompok.push(response[x]);
      }
      ++x;
    }
    DisplayIndonesiaDesktop();

    return arr4;
  };
  renderDataIndonesiaDesktop();
  function DisplayIndonesiaDesktop(page = 0) {
    let html = "";

    arr4[page].forEach((res) => {
      let vote = res.vote_average.toLocaleString().split(".").join("");
      let MyFilm = `<div class="Film" data-id=${res.id}>
        <div class="imgFilm">
        <img src=${`https://image.tmdb.org/t/p/original/${res.poster_path}`} alt="" />
        </div>
        <div class="rating">
        <div class="Angkarating"><p>${res.vote_average}</p></div>
        <div class="panjangRating">
        <div class="thisSize" style="width:${vote}%;" ></div>
        </div>
        </div>
        <div class="nameFilm">
        <p>${res.original_title}</p>
        </div>
        </div>`;
      html += MyFilm;
    });
    ListFilmIndonesia.innerHTML = html;
    if (html.length != 0) {
      getDataId4();
    }
  }
}

if (innerWidth > `780` && innerWidth < `924`) {
  const renderDataIndonesiaTablet = async () => {
    let response = await dataIndonesia();
    let x = 0;
    let kelompok = [];
    while (x < response.length - 1) {
      if (kelompok.length == 4) {
        arr4.push(kelompok);
        kelompok = [];
      } else {
        kelompok.push(response[x]);
      }
      x++;
    }
    DisplayIndonesiaTablet();
    return arr4;
  };
  renderDataIndonesiaTablet();
  function DisplayIndonesiaTablet(page = 0) {
    let html = "";
    arr4[page].forEach((res) => {
      let vote = res.vote_average.toLocaleString().split(".").join("");

      let MyFilm = `<div class="Film" data-id=${res.id}>
        <div class="imgFilm">
        <img src=${`https://image.tmdb.org/t/p/original/${res.poster_path}`} alt="" />
        </div>
        <div class="rating">
        <div class="Angkarating"><p>${res.vote_average}</p></div>
        <div class="panjangRating">
        <div class="thisSize" style="width:${vote}%;" ></div>
        </div>
        </div>
        <div class="nameFilm">
        <p>${res.original_title}</p>
        </div>
        </div>`;
      html += MyFilm;
    });
    ListFilmIndonesia.innerHTML = html;
    if (html.length != 0) {
      getDataId4();
    }
  }
}

if (innerWidth > `430` && innerWidth < `780`) {
  const renderDataIndonesiaMobile1 = async () => {
    let response = await dataIndonesia();
    let x = 0;
    let kelompok = [];
    while (x < response.length - 1) {
      if (kelompok.length == 2) {
        arr4.push(kelompok);
        kelompok = [];
      } else {
        kelompok.push(response[x]);
      }
      x++;
    }
    DisplayIndonesiaMobile1();
    return arr4;
  };
  renderDataIndonesiaMobile1();
  function DisplayIndonesiaMobile1(page = 0) {
    let html = "";
    arr4[page].forEach((res) => {
      let vote = res.vote_average.toLocaleString().split(".").join("");

      let MyFilm = `<div class="Film" data-id=${res.id}>
        <div class="imgFilm">
        <img src=${`https://image.tmdb.org/t/p/original/${res.poster_path}`} alt="" />
        </div>
        <div class="rating">
        <div class="Angkarating"><p>${res.vote_average}</p></div>
        <div class="panjangRating">
        <div class="thisSize" style="width:${vote}%;" ></div>
        </div>
        </div>
        <div class="nameFilm">
        <p>${res.original_title}</p>
        </div>
        </div>`;
      html += MyFilm;
    });
    ListFilmIndonesia.innerHTML = html;
    if (html.length != 0) {
      getDataId4();
    }
  }
}
if (innerWidth < `430`) {
  const renderDataIndonesiaMobile2 = async () => {
    let response = await dataIndonesia();

    for (let i of response) {
      arr4.push(i);
    }
    DisplayIndonesiaMobile2();
    return arr4;
  };
  renderDataIndonesiaMobile2();
  function DisplayIndonesiaMobile2(page = 0) {
    let html = "";

    let vote = arr4[page].vote_average.toLocaleString().split(".").join("");

    let MyFilm = `<div class="Film" data-id=${arr4[page].id}>
        <div class="imgFilm">
        <img src=${`https://image.tmdb.org/t/p/original/${arr4[page].poster_path}`} alt="" />
        </div>
        <div class="rating">
        <div class="Angkarating"><p>${arr4[page].vote_average}</p></div>
        <div class="panjangRating">
        <div class="thisSize" style="width:${vote}%;" ></div>
        </div>
        </div>
        <div class="nameFilm">
        <p>${arr4[page].original_title}</p>
        </div>
        </div>`;
    html += MyFilm;

    ListFilmIndonesia.innerHTML = html;
    if (html.length != 0) {
      getDataId4();
    }
  }
}
