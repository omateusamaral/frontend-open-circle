import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backendopencircle.herokuapp.com/users/',
});
export default api;
