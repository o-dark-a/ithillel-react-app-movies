import React, { useEffect, useCallback } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { setOptions } from "../../actions/moviesActions";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres, fetchLanguages, fetchFiltredMovies } from "../../thunk/movies";

function FilterForm() {
  const { allGenres, allLanguages, currentPage, filterOptions } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const handleFilterChange = useCallback((e) => {
    console.log('handleFilterChange')
    const { value, attributes: { dataoptiontype: { value: option } } } = e.target;
    dispatch(setOptions({ [option]: value }));
  }, [filterOptions]);

  const changeQuery = (e) => {
    dispatch(setOptions({ query: e.target.value }));
  }

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchLanguages());
  }, []);

  useEffect(() => {
    if (!(filterOptions.query === '' && filterOptions.language === '' && filterOptions.with_genres === '')) {
      dispatch(fetchFiltredMovies(filterOptions, currentPage));
    }
  }, [filterOptions]);

  return (
    <>
      <Box>
        <Typography level="body1">Search by name</Typography>
        <input dataoptiontype='original_title' type="text" value={filterOptions.query} onChange={changeQuery} />
      </Box>

      <Box>
        <Typography level="body1">Genres</Typography>
        <ul>
          {allGenres.map((genre, i) => (
            <li key={i}>
              <button dataoptiontype='with_genres' onClick={handleFilterChange} type="button" value={genre.id}>{genre.name}</button>
            </li>
          ))}
        </ul>
      </Box>

      <Box>
        <Typography level="body1">Languages</Typography>
        <ul>
          {allLanguages.map((language, i) => (
            <li key={i}>
              <button dataoptiontype='language' onClick={handleFilterChange} type="button" value={language.iso_639_1}>{language.english_name}</button>
            </li>
          ))}
        </ul>
      </Box>
    </>
  )
}

export default FilterForm;
