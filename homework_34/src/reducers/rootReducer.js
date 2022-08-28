import { combineReducers } from 'redux';
import { characterReducer } from './characters';

export const rootReducer = combineReducers({
  characters: characterReducer
})
