import React, { useEffect, useState, useCallback } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres, fetchLanguages, fetchFiltredMovies } from "../../thunk/movies";

function FilterForm() {
  const { allGenres, allLanguages } = useSelector((state) => state.movies);
  const [options, setOptions] = useState({
    query: '',
    language: '',
    with_genres: ''
  });
  const dispatch = useDispatch();

  const handleFilterChange = useCallback((e) => {
    const { value, attributes: { dataoptiontype: { value: option } } } = e.target;
    setOptions({ ...options, [option]: value });
  }, [options]);

  const changeQuery = (e) => {
    setOptions({ ...options, query: e.target.value });
  }

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchLanguages());
  }, []);

  useEffect(() => {
    if (!(options.query === '' && options.language === '' && options.with_genres === '')) {
      dispatch(fetchFiltredMovies(options));
    }
  }, [options]);

  return (
    <>
      <Box>
        <Typography level="body1">Search by name</Typography>
        <input dataoptiontype='original_title' type="text" value={options.query} onChange={changeQuery} />
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
