import { LOAD_CHARACTERS, FILTER_CHARACTERS, SET_SELECTED_HOUSE, SET_SEARCH, UPDATE_CHARACTERS } from "../actions/characters";

export const initialState = {
  characters: [],
  filteredCharacters: [],
  houses: ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'],
  selectedHouse: '',
  search: ''
}

export const characterReducer = function (state = initialState, action) {
  switch (action.type) {
    case LOAD_CHARACTERS:
      return {
        ...state,
        characters: action.payload.characters,
        filteredCharacters: state.characters
      }
    case UPDATE_CHARACTERS:
      return {
        ...state,
        filteredCharacters: action.payload.updateChars,
      }
    case FILTER_CHARACTERS:
      return {
        ...state,
        search: action.payload.searchStrVal,
        filteredCharacters: state.selectedHouse
          ? state.characters
            .filter((character) =>
              character.house === state.selectedHouse)
            .filter((character) => {
              return character.name.toLowerCase().includes(state.search.toLowerCase())
            }
            )
          : state.characters.filter((character) =>
            character.name.toLowerCase().includes(action.payload.searchStrVal.toLowerCase()))
      }
    case SET_SELECTED_HOUSE:
      return {
        ...state,
        selectedHouse: action.payload.houseName
      }
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload.searchStr
      }
    default:
      return state;
  }
}
