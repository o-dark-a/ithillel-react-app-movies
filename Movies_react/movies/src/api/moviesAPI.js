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

export const getFiltredMovies = function (options, currentPage = 1) {
  let queryParams = `api_key=${API_KEY}`;
  let queryString = '';

  if (options.query && !options.language) {
    queryString = `/3/search/multi?${queryParams}&query=${options.query}`;
  } else if (options.with_genres && options.language) {
    queryString = `/3/discover/movie?${queryParams}&with_genres=${options.with_genres}&with_original_language=${options.language}&sort_by=original_title.asc`;
  } else if (options.with_genres && !options.language) {
    queryString = `/3/discover/movie?${queryParams}&with_genres=${options.with_genres}&sort_by=original_title.asc`;
  } else if (options.query && options.language) {
    queryString = `/3/search/multi?${queryParams}&query=${options.query}&language=${options.language}`;
  } else {
    queryString = `/3/discover/movie?${queryParams}&with_original_language=${options.language}&sort_by=original_title.asc`;
  }

  return moviesAxios.get(queryString);
};
