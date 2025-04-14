import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(_req: NextRequest, _res: NextResponse) {
    try {
        const cookieStore = cookies();
        const accessToken = (await cookieStore).get("accessToken")?.value;
        if (!accessToken) {
            return NextResponse.json({ error: "No access token found" }, { status: 401 });
        }
        return NextResponse.json({ token: accessToken });
    } catch (error) {
        console.error("Error fetching access token:", error);
        return NextResponse.json({ error: "Failed to fetch access token" }, { status: 401 });
    }
}
