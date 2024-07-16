// src/interfaces/interfaces.ts
export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    cpf: string | null;
    branch_id: number | null;
}
