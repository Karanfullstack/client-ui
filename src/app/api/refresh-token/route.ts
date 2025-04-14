import { TokenType } from "@/app/action/login";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";
export async function POST(_req: NextRequest) {
    try {
        const response = await fetch(`${process.env.BACKEND_URL}/api/auth/auth/refresh`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${(await cookies()).get("accessToken")?.value}`,
                Cookie: `refreshToken=${(await cookies()).get("refreshToken")?.value}`,
            },
        });
        if (!response.ok) {
            return;
        }

        const cookiesData = response.headers.getSetCookie();

        const { accessToken, refreshToken } = cookiesData.reduce((token, cookie) => {
            if (cookie.includes("accessToken")) token.accessToken = cookie;
            if (cookie.includes("refreshToken")) token.refreshToken = cookie;
            return token;
        }, {} as TokenType);

        if (!accessToken || !refreshToken) {
            return;
        }
        const parsedTokens = {
            accessToken: cookie.parse(accessToken),
            refreshToken: cookie.parse(refreshToken),
        };

        const cookieStore = await cookies();
        for (const [key, value] of Object.entries(parsedTokens)) {
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
        return NextResponse.json({ success: "ok" });
    } catch (_error) {
        return NextResponse.json({ success: false }, { status: 401 });
    }
}
