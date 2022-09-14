import { LOAD_MOVIES_SUCCESS, SET_SELECTED_MOVIE, LOAD_GENRES_SUCCESS, LOAD_LANGUAGES_SUCCESS } from "../actions/moviesActions";

export const initialState = {
  allMovies: [],
  selectedMovie: {},
  totalPages: 0,
  allGenres: [],
  allLanguages: []
}

export function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIES_SUCCESS:
      return {
        ...state,
        allMovies: action.payload.movies.results,
        totalPages: action.payload.movies.total_pages
      }
    case SET_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload.selectedMovie
      }
    case LOAD_GENRES_SUCCESS:
      return {
        ...state,
        allGenres: action.payload.genres
      }
    case LOAD_LANGUAGES_SUCCESS:
      return {
        ...state,
        allLanguages: action.payload.languages
      }
    default:
      return state;
  }
}
