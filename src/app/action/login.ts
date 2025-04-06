"use server";
import cookie from "cookie";
import { cookies } from "next/headers";

export interface ResponseTypeAction {
    data: object | null;
    type: string | null;
    status: number | null;
    error: string | null;
    isAuthenticated: boolean;
}
export type TokenType = { accessToken?: string; refreshToken?: string };
export default async function login(data: FormData) {
    const email = data.get("email");
    const password = data.get("password");
    // TODO DATA VALIDATION

    try {
        const response = await fetch(`${process.env.BACKEND_URL}/api/auth/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();

        if (!response.ok) {
            return {
                data: null,
                type: result.type,
                status: result.statusCode,
                error: result.errors[0].msg,
                isAuthenticated: false,
            };
        }

        // getting cookies from headers
        const c = response.headers.getSetCookie();

        // extract tokesn from cookies

        const { accessToken, refreshToken } = c.reduce((token, cookie) => {
            if (cookie.includes("accessToken")) token.accessToken = cookie;
            if (cookie.includes("refreshToken")) token.refreshToken = cookie;
            return token;
        }, {} as TokenType);

        // return error response object if tokens not found
        if (!accessToken || !refreshToken) {
            return {
                data: null,
                type: "error",
                status: 401,
                error: "No Cookie found",
                isAuthenticated: false,
            };
        }
        //	 parse cookies  through cookie package
        const parsedCookies = {
            accessToken: cookie.parse(accessToken),
            refreshToken: cookie.parse(refreshToken),
        };
        // need to use await for getting cookies
        const cookieStore = await cookies();

        for (const [key, value] of Object.entries(parsedCookies)) {
            cookieStore.set({
                name: key,
                value: value[key]!,
                path: value.Path,
                expires: new Date(value.Expires as string),
                // need to verify if in auth service httpOnly true or not
                httpOnly: true,
                domain: value.Domain,
                sameSite: value.SameSite as "strict",
            });
        }
        // returning if everything is good
        return {
            data: result,
            type: null,
            status: null,
            error: null,
            isAuthenticated: true,
        };
    } catch (error) {
        throw error;
    }
}
