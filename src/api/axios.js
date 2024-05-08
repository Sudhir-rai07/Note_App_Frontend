import axios from "axios";

export default axios.create({
    baseURL: "https://noteapp-backend-ul25.onrender.com",
    // baseURL: 'http://localhost:9000',
    withCredentials: true,
})