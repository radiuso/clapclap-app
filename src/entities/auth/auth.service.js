// import axios from 'axios';
// import { API_URL } from '../../constants.js';

export default {
  login(info) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(info);
      }, 1000);
    });
    // return axios.get(`${API_URL}/users`);
  },
};
