import axios from 'axios';

export const API_URL = 'http://localhost:3000'

const $api = axios.create({
    withCredentials: true, // чтобы к запросам куки цеплялись автоматически 
    baseURL: API_URL
})

export default $api;