const burgerButton = document.querySelector(".burgerNav");
const listBurger = document.querySelector(".listBurgerNav");
const ListFilm = document.querySelector(".thisFilm");

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("active");
  listBurger.classList.toggle("activeList");
});

const data = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=df3bdd5a174cac305c5d71d51733fff7",
    {
      method: "GET",
    }
  );
  let ress = await response.json();
  return ress;
};

// const renderData = async () => {
//   let response = await data();
//   let html = "";
//   response.results.forEach((res) => {
//     let MyFilm = `<div class="Film">
//   <div class="imgFilm">
//     <img src=${`https://image.tmdb.org/t/p/original/${res.poster_path}`} alt="" />
//   </div>
//   <div class="nameFilm">
//     <p>${res.original_title}</p>
//   </div>
// </div>`;
//     html += MyFilm;
//   });
//   ListFilm.innerHTML = html;
// };
// renderData();
