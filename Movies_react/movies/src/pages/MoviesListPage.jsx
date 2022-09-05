import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../thunk/movies";
import MoviesListComponent from "../components/MoviesListComponent/MoviesListComponent";
import NavbarComponent from "../components/NavbarComponent/NavbarComponent";
import MoviesPagination from "../components/UI/Pagination/Pagination";
import SideBar from '../components/SideBar/SideBarComponent';
import Grid from '@mui/material/Grid';

function MoviesListPage() {
  const { allMovies, totalPages } = useSelector((state) => state.movies);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies(currentPage));
  }, [dispatch, currentPage]);

  function changeCurrentPage(_, pageNum) {
    setCurrentPage(pageNum);
  }

  return (
    <>
      <NavbarComponent />
      <MoviesPagination count={totalPages} page={currentPage} changeCurrentPage={changeCurrentPage} />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideBar />
        </Grid>
        <Grid item xs={9}>
          <MoviesListComponent movies={allMovies} />
        </Grid>
      </Grid>
    </>
  )
}

export default MoviesListPage;
