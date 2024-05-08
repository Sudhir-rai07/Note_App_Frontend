import axios from "axios";

export default axios.create({
    baseURL: "https://noteapp-backend-ul25.onrender.com",
    withCredentials: true,
})
