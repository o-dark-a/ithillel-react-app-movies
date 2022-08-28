export const LOAD_CHARACTERS = '[CHARACTERS] Load characters';
export const FILTER_CHARACTERS = '[CHARACTERS] Filter characters';
export const SET_SELECTED_HOUSE = '[CHARACTERS] Set selected house';
export const SET_SEARCH = '[CHARACTERS] Set search';
export const UPDATE_CHARACTERS = '[CHARACTERS] Update characters array after filter';

export const setSearch = (searchStr) => ({
  type: SET_SEARCH,
  payload: { searchStr }
})

export const setSelectedHouse = (houseName) => ({
  type: SET_SELECTED_HOUSE,
  payload: { houseName }
})

export const loadCharacters = (characters) => ({
  type: LOAD_CHARACTERS,
  payload: { characters }
})

export const filterCharacters = (searchStrVal) => ({
  type: FILTER_CHARACTERS,
  payload: { searchStrVal }
})

export const updateCharacters = (characters) => ({
  type: UPDATE_CHARACTERS,
  payload: { characters }
})
