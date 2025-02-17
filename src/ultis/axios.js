import axios from "axios";

export const userService = axios.create({
    baseURL: 'http://localhost:5050/',
    headers: {
        'Content-Type': 'application/json'
    }
})
