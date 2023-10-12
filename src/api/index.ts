import axios from 'axios';

export const baseApi = axios.create({
  baseURL: 'https://swapi.dev/api/',
  timeout: 60000,
});