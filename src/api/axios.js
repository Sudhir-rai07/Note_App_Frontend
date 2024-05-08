import axios from "axios";

export default axios.create({
    baseURL: "https://noteapp-backend-2wsd.onrender.com",
    // baseURL: 'http://localhost:9000',
    withCredentials: true,
})