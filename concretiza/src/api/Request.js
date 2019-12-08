import axios from 'axios';

const api = axios.create({
    baseURL:"<baseURL>",
    timeout: 2000,
});

export default api;