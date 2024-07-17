// src/interfaces/interfaces.ts
export interface User {
    id: number;
    name: string;
    email: string;
    cpf: string | null;
    branch: Branch | null;
}

export interface Branch {
    id: number;
    name: string;
}
