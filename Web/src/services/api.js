import axios from 'axios';

const api = axios.create({
    baseURL:'https://maratona-esamc.herokuapp.com/'
});

export default api;