import { moviesList } from "./data/movies.js";

const searchParams = new URLSearchParams(document.location.search);

const movieId = searchParams.get("id");

const movie = moviesList.find((m) => m.id == movieId);



const thumbnail = document.querySelector('#movie-thumbnail')
const mainTitle = document.querySelector('#movie-title-main')
const releaseYear = document.querySelector('#release-year')
thumbnail.setAttribute("src", movie.thumbnail)
mainTitle.innerText = movie.title
releaseYear.innerText = `(${movie.releaseYear})`