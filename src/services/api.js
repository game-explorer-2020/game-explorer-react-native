import axios from 'axios';

const api = axios.create({
  baseURL: 'http://game-explorer-unisul.herokuapp.com/api/v1/'
});

export default api;