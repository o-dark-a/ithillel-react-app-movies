import React from "react";
import MovieComponent from "../MovieComponent/MovieComponent";
import MoviesListClasses from './MoviesList.module.scss';

function MoviesListComponent({ movies }) {
  return (
    <ul className={MoviesListClasses.moviesList}>
      {movies.map((movie, i) => (
        <MovieComponent movie={movie} key={i} />
      ))}
    </ul>
  );
}

export default MoviesListComponent;
