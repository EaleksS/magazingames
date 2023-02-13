import axios from 'axios';

const API_URL = 'https://63935afcab513e12c50bf517.mockapi.io';

axios.defaults.baseURL = API_URL;

export const GamesService = {
  async getAll() {
    return axios.get('/items');
  },
};