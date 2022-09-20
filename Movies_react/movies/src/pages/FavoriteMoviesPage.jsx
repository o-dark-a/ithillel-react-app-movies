import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function FavoriteMoviesPage() {
  const navigate = useNavigate();
  const { favoriteMovies } = useSelector((state) => state.movies);
  const IMAGE_MOVIE_URL = 'https://image.tmdb.org/t/p/w200/';

  return (
    <>
      <button type="button" onClick={() => { navigate(`/`) }}>Back</button>
      <ul>
        {favoriteMovies.map((movie, i) => (
          <li key={i}>
            <img src={`${IMAGE_MOVIE_URL}${movie.poster_path}`} alt={movie.original_title}></img>
            <h2>{movie.title}</h2>
            {/* <FavoriteBorderRoundedIcon onClick={() => { addFavoriteMovie(favoriteMovies) }} /> */}
          </li>
        ))}
      </ul>
    </>
  )
}

export default FavoriteMoviesPage;