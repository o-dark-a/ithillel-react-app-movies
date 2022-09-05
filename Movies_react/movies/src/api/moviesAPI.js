import axios from 'axios';
import { API_KEY, ROOT_API_URL } from '../config';

const moviesAxios = axios.create({
  baseURL: ROOT_API_URL
})

export const getMovies = function (currentPage) {
  return moviesAxios.get(`/3/movie/top_rated?api_key=${API_KEY}&page=${currentPage}`);
};

export const getMovieById = function (movieId) {
  return moviesAxios.get(`/3/movie/${movieId}?api_key=${API_KEY}`);
};

export const getGenres = function () {
  return moviesAxios.get(`/3/genre/movie/list?api_key=${API_KEY}`);
};

export const getLanguages = function () {
  return moviesAxios.get(`/3/configuration/languages?api_key=${API_KEY}`);
};

export const getFiltredMovies = function ({genre, language, query}) {
  console.log(genre, language, query);
  return moviesAxios.get(`/3/search/movie?api_key=${API_KEY}&genre=${genre}&language=${language}&query=${query}`);
};
