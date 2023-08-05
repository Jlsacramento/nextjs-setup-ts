import axios from "axios";
import { parseCookies } from 'nookies'

const { 'smartmenu.token': token } = parseCookies()

const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*'
    },
})

api.interceptors.request.use(config => {
    console.log(config);
    
    return config
})

if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
}

export async function recoverUserInformation() {
    
    return {
        user: {
            id:1,
            first_name: "João Luiz",
            last_name: null,
            phone: "71986275463",
            email: null,
            password: "$2b$10$Hp.1llot1PC.W6SSA5KTiOdioCeZ3otTgw1QsF0RCIY2DUW8Z1bue",
            position_id:1,
            store_id: null,
            created_at: "2022-05-26T04:58:24.417Z",
            updated_at: "2022-05-26T04:58:24.417Z",
            deleted_at: null
        }
    }
}

export default api;