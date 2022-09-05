import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres, fetchLanguages, fetchFiltredMovies } from "../../thunk/movies";

function FilterForm() {
  const { allGenres, allLanguages } = useSelector((state) => state.movies);
  const [options, setOptions] = useState({
    query: '',
    language: '',
    genre: ''
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchLanguages());
  }, [dispatch]);

  const choseFilterOption = (e) => {
    const { dataoptiontype: { value: option } } = e.target.attributes;

    switch(option) {
      case 'query':
        setOptions({
          ...options,
          query: e.target.value,
        })
        break;
      case 'genre':
        console.log(1);
        setOptions({
          ...options,
          genre: e.target.name,
        })
        break;
      case 'language':
        setOptions({
          ...options,
          language: e.target.name,
        })
        break;
    }

    dispatch(fetchFiltredMovies(options));

  }

  return (
    <>
      <Box>
        <Typography level="body1">Search by name</Typography>
        <input dataoptiontype='query' type="text" value={options.query} onChange={(e) => choseFilterOption(e)} />
      </Box>

      <Box>
        <Typography level="body1">Genres</Typography>
        <ul>
          {allGenres.map((genre, i) => (
            <li key={i}>
              <button dataoptiontype='genre' onClick={(e) => choseFilterOption(e)} type="button" name={genre.name}>{genre.name}</button>
            </li>
          ))}
        </ul>
      </Box>

      <Box>
        <Typography level="body1">Languages</Typography>
        <ul>
          {allLanguages.map((language, i) => (
            <li key={i}>
              <button dataoptiontype='language' onClick={(e) => choseFilterOption(e)} type="button" name={language.iso_639_1}>{language.english_name}</button>
            </li>
          ))}
        </ul>
      </Box>
    </>
  )
}

export default FilterForm;