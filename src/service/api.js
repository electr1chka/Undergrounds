import axios from 'axios';

export const api = axios.create({
    baseURL: "https://25ed-31-148-207-225.ngrok-free.app",
    headers: {"Content-Type": "application/json"}
})
