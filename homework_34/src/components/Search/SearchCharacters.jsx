import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterCharacters, setSearch, updateCharacters, setSelectedHouse } from "../../actions/characters";

function SearchCharacters() {
  const [searchStrVal, _setSearch] = useState('');
  const { characters } = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  const filterChars = () => {
    dispatch(setSearch(searchStrVal));
    dispatch(updateCharacters(characters));
    dispatch(setSelectedHouse(''));
    dispatch(filterCharacters(searchStrVal));
  }

  return (
    <div id="searchWrapper">
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        value={searchStrVal}
        onBlur={filterChars}
        onChange={(e) => _setSearch(e.target.value)}
        placeholder="search for a character"
      />
    </div>
  )
}

export default SearchCharacters;