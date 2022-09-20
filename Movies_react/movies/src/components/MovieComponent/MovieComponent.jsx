import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MovieClasses from './Movie.module.scss';
import { addFavoriteMovie, removeFavoriteMovie } from "../../actions/moviesActions";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

function MovieComponent({ movie }) {
  const { favoriteMovies } = useSelector((state) => state.movies);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const IMAGE_MOVIE_URL = 'https://image.tmdb.org/t/p/w200/';

  function navigateToMovieInfo(movieId) {
    navigate(`/movie/${movieId}`);
  }

  const favoriteMovieHandler = (_favoriteMovie) => {
    if(!favoriteMovies.some(movie => movie.id === _favoriteMovie.id)) {
      dispatch(addFavoriteMovie(_favoriteMovie));
    } else {
      dispatch(removeFavoriteMovie(_favoriteMovie))
    }
  }
  return (
    <li className={MovieClasses.movie}>
      <img onClick={() => navigateToMovieInfo(movie.id)} src={`${IMAGE_MOVIE_URL}${movie.poster_path}`} alt={movie.original_title}></img>
      <h2>{movie.title}</h2>
      {
        (movie.isLiked) ?
          <FavoriteRoundedIcon onClick={() => { favoriteMovieHandler(movie) }} className={MovieClasses.heartIcon} />
          : <FavoriteBorderRoundedIcon onClick={() => { favoriteMovieHandler(movie) }} className={MovieClasses.heartIcon} />
      }
      
    </li>
  )
}

export default MovieComponent;
