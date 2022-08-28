import axios from 'axios';
import { HARRYPOTTER_URL } from '../config';

const harryPotterAxios = axios.create({
  baseURL: HARRYPOTTER_URL
})

export const getCharacters = function () {
  return harryPotterAxios.get('/characters');
};

