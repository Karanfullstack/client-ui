import { cookies } from "next/headers";

interface Tenant {
    id: number;
    name: string;
    address: string;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: "manager" | "admin" | "customer";
    tenant: Tenant;
}

class Session {
    private readonly session;
    constructor() {
        this.session = async function () {
            const cookieStore = await cookies();

            const resposne = await fetch(`${process.env.BACKEND_URL}/api/auth/auth/self`, {
                headers: {
                    Authorization: `Bearer ${cookieStore.get("accessToken")?.value}`,
                },
            });
            if (!resposne.ok) return null;
            return {
                user: (await resposne.json()) as User,
            };
        };
    }

    async getUserSession() {
        return this.session();
    }
}

export const UserSession = async () => await new Session().getUserSession();
