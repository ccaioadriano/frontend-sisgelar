
import { AxiosError } from "axios";
import axios from "../baseService";
import { ILoginResponse } from "../interfaces/ILoginResponse";
const API_URL = "http://127.0.0.1:8000/api/v1";

export const login = async (name: string, password: string): Promise<ILoginResponse | AxiosError> => {
    try {
        const response = await axios
            .post(`${API_URL}/login`, {
                name: name,
                password: password,
            });
        return response.data;
    } catch (error) {
        return error as AxiosError;
    }
}