import 'regenerator-runtime/runtime';
import axios from 'axios';

//Do not modify this file please

const BASE_URL = 'http://localhost:8080';

const API = axios.create({
    baseURL: BASE_URL
});

export default API;