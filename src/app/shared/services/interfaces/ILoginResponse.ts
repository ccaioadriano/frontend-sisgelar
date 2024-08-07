import { IUserLogin } from "./IUserLogin";

export interface ILoginResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    success: boolean;
    user: IUserLogin;
}