import { Branch } from "./Branch";

export interface User {
    id: number;
    name: string;
    email: string;
    cpf: string | null;
    branch: Branch | null;
}


