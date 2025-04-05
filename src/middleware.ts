import { NextRequest, NextResponse } from "next/server";
import { UserSession } from "./lib/session";

export async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const session = await UserSession();
    const publicPath = ["/login"];
    const hasPath = publicPath.includes(path);

    if (hasPath && session?.user) {
        return NextResponse.redirect(new URL("/", req.nextUrl));
    }

    if (!hasPath && !session?.user) {
        return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
}

export const config = {
    matcher: ["/login", "/"],
};
