import axios from 'axios';
import { API_URL } from '../../constants.js';

export default {
  fetchUsers() {
    return axios.get(`${API_URL}/users`);
  },
};
