export const LOAD_MOVIES_SUCCESS = '[MOVIES] Load movies success';
export const LOAD_MOVIES_ERROR = '[MOVIES] Load movies error';
export const LOAD_GENRES_SUCCESS = '[MOVIES] Load genres success';
export const LOAD_GENRES_ERROR = '[MOVIES] Load genres error';
export const LOAD_LANGUAGES_SUCCESS = '[MOVIES] Load languages success';
export const LOAD_LANGUAGES_ERROR = '[MOVIES] Load languages error';
export const SET_SELECTED_MOVIE = '[MOVIES] Get movie info';

export const loadMoviesSuccess = (movies) => ({
  type: LOAD_MOVIES_SUCCESS,
  payload: { movies }
})

export const loadMoviesError = (error) => ({
  type: LOAD_MOVIES_ERROR,
  payload: { error }
})

export const loadGenresSuccess = ({genres}) => ({
  type: LOAD_GENRES_SUCCESS,
  payload: { genres }
})

export const loadGenresError = (error) => ({
  type: LOAD_GENRES_ERROR,
  payload: { error }
})

export const loadLanguagesSuccess = (languages) => ({
  type: LOAD_LANGUAGES_SUCCESS,
  payload: { languages }
})

export const loadLanguagesError = (error) => ({
  type: LOAD_LANGUAGES_ERROR,
  payload: { error }
})

export const setSelectedMovie = (selectedMovie) => ({
  type: SET_SELECTED_MOVIE,
  payload: { selectedMovie }
})
