import { movieData } from "./movieAPI.js";

async function detailView() {
  const urlParams = new URL(location.href).searchParams;
  const id = Number(urlParams.get("id"));
  let movies = await movieData();

  const result = movies.find((x) => x.id === id);
  if (!result) {
    alert("페이지의 정보값이 올바르지 않습니다");
    history.back();
  }
  let tempHTML = `<div class="movieCard" data-id="${result.id}">
  <img src="https://image.tmdb.org/t/p/w500${result.poster_path}">
  <h3>${result.title}</h3>
  <p>${result.overview}</p>
  <p class="rate">Rating: ${result.vote_average}</p>
  </div>`;
  const detailMovie = document.querySelector(".subBox");
  detailMovie.insertAdjacentHTML("beforeend", tempHTML);
}

detailView();
