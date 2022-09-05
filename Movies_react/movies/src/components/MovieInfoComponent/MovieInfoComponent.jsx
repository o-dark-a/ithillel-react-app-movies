import React, { useEffect } from "react";
import MovieInfoClasses from './MovieInfo.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../api/moviesAPI";
import { setSelectedMovie } from "../../actions/moviesActions";

function MovieInfoComponent() {
  const { selectedMovie } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    getMovieById(id).then((movie) => dispatch(setSelectedMovie(movie.data)));
  }, [dispatch]);

  return (
    <div className={MovieInfoClasses.movieInfoWrap}>
      <img src={`https://image.tmdb.org/t/p/w200/${selectedMovie.poster_path}`} alt={selectedMovie.original_title} />
      <div>
        <h2>{selectedMovie.title}</h2>
        <h4>{selectedMovie.overview}</h4>
        <ul>
          {selectedMovie.genres
            ? selectedMovie.genres.map((genre, i) => (
              <li key={i}>{genre.name}</li>
            ))
            : null}
        </ul>
      </div>
    </div>
  )
}

export default MovieInfoComponent;