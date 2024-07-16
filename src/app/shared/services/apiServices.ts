import axios from "axios";
import { User } from "../../interfaces/User";
const API_URL = "http://127.0.0.1:8000/api";

interface LoginResponse {
    token: string;
}


export const login = async (name: string, password: string): Promise<LoginResponse> => {
    const response = await axios
        .post(`${API_URL}/access/login`, {
            name: name,
            password: password,
        });
    return response.data;
}

export const getUserAuth = async (): Promise<User> => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/access/me`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}