import axios from 'axios';
import { API_URL } from '../http';

export const GamesService = {
  async getAll() {
    return axios.get(`${API_URL}/games`);
  },
};
