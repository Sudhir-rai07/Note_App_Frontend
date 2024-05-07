import axios from "axios";

export default axios.create({
    baseURL: "https://noteapp-backend-2wsd.onrender.com",
    withCredentials: true,
})