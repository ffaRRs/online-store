import axios from 'axios';

export const API_URL = 'http://localhost:3000'

const $api = axios.create({
    withCredentials: true, // чтобы к запросам куки цеплялись автоматически 
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

export default $api;