import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Characters from '../components/Characters/Characters';
import { loadCharacters } from '../actions/characters';
import { getCharacters } from '../api/harryPotter';
import SearchCharacters from '../components/Search/SearchCharacters';
import Houses from '../components/Houses/Houses';

function CharactersPage() {
  const { search, filteredCharacters, houses } = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    getCharacters().then(characters => dispatch(loadCharacters(characters.data)));
  }, [dispatch])

  return (
    <>
      <Houses houses={houses} searchStrVal={search} />
      <SearchCharacters />
      <Characters characters={filteredCharacters} />
    </>
  );
}

export default CharactersPage;
