import {
  LOAD_MOVIES_SUCCESS, SET_SELECTED_MOVIE,
  LOAD_GENRES_SUCCESS, LOAD_LANGUAGES_SUCCESS,
  SET_PAGINATION_PAGE, SET_FILTER_OPTION,
  ADD_FAVORITE_MOVIE, REMOVE_FAVORITE_MOVIE
} from "../actions/moviesActions";

export const initialState = {
  allMovies: [],
  selectedMovie: {},
  totalPages: 0,
  allGenres: [],
  allLanguages: [],
  currentPage: 1,
  filterOptions: {
    query: '',
    language: '',
    with_genres: ''
  },
  favoriteMovies: []
}

export function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIES_SUCCESS:
      return {
        ...state,
        allMovies: action.payload.movies.results.map(movie => ({
          ...movie,
          isLiked: false
        })),
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
    case SET_PAGINATION_PAGE:
      return {
        ...state,
        currentPage: action.payload.currentPage
      }
    case ADD_FAVORITE_MOVIE:
      return {
        ...state,
        allMovies: state.allMovies.map(movie => movie.id !== action.payload.favoriteMovie.id ? movie : {
          ...movie,
          isLiked: !movie.isLiked
        }),
        favoriteMovies: [
          ...state.favoriteMovies,
          {
            ...action.payload.favoriteMovie,
            isLiked: true
          }
        ]
      }
    case REMOVE_FAVORITE_MOVIE:
      return {
        ...state,
        allMovies: state.allMovies.map(movie => movie.id !== action.payload.favoriteMovie.id ? movie : {
          ...movie,
          isLiked: !movie.isLiked
        }),
        favoriteMovies: state.favoriteMovies.filter(movie => movie.id !== action.payload.favoriteMovie.id)
      }
    case SET_FILTER_OPTION:
      return {
        ...state,
        filterOptions: {
          ...state.filterOptions,
          ...action.payload.option
        }
      }
    default:
      return state;
  }
}
