import axios from "axios";

export const tiendaApi = axios.create({
    baseURL: 'https://tienda-backend-production-f7a2.up.railway.app/api/',
})