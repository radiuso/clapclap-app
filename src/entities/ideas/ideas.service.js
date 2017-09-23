import axios from 'axios';
import { API_URL } from '../../constants.js';

export default {
  fetchAll() {
    return axios.get(`${API_URL}/ideas`);
  },
};
