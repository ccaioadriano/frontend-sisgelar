
import axios from "../BaseService";
import { ILoginResponse } from "../interfaces/ILoginResponse";
const API_URL = "http://127.0.0.1:8000/api/v1";

export const login = async (name: string, password: string): Promise<ILoginResponse | Error> => {

    try {
        const response = await axios
            .post(`${API_URL}/login`, {
                name: name,
                password: password,
            });
        return response.data;
    } catch (error) {
        return new Error((error as { message: 'Credenciais inválidas.' }).message);
    }

}