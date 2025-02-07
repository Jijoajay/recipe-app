import axios from "axios";


export const fetch = axios.create({
    baseURL:`${import.meta.env.VITE_API_URL}`,
})