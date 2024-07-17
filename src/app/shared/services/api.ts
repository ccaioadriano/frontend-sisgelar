import axios from "./BaseService";
import { Branch, User } from "../../interfaces/User";
const API_URL = "http://127.0.0.1:8000/api";

interface LoginResponse {
    token: string;
    permissions: string[];
    roles: string[];
    token_type: string;
    expires_in: number;
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
    const response = await axios.get(`${API_URL}/access/me`);
    return response.data.user;
}

export const getEquipmentsPerBranch = async (branchId:number) => {
    const response = await axios
        .get(`${API_URL}/branches/${branchId}/equipments`);
    return response.data;
}