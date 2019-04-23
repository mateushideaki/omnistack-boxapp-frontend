import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-boxapp-backend.herokuapp.com'
});

export default api;