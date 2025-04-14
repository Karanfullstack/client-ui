"use server";

import { cookies } from "next/headers";

export async function logout() {
    const CookieStore = cookies();
    const response = await fetch(`${process.env.BACKEND_URL}/api/auth/auth/logout`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${(await CookieStore).get("accessToken")?.value}`,
            cookie: `refreshToken=${(await CookieStore).get("refreshToken")?.value}`,
        },
    });
    if (!response.ok) {
        return false;
    }
    (await CookieStore).delete("accessToken");
    (await CookieStore).delete("refreshToken");
    return true;
}
