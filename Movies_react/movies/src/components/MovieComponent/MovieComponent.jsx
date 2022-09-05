import React from "react";
import { useNavigate } from "react-router-dom";
import MovieClasses from './Movie.module.scss';

function MovieComponent({ movie }) {
  const navigate = useNavigate();

  function navigateToMovieInfo(movieId) {
    navigate(`/movie/${movieId}`);
  }

  return (
    <li className={MovieClasses.movie} onClick={() => navigateToMovieInfo(movie.id)}>
      <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.original_title}></img>
      <h2>{movie.title}</h2>
    </li>
  )
}

export default MovieComponent;
