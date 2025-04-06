"use client";

import { useCallback, useEffect, useRef } from "react";
import * as jose from "jose";
export default function RefreshToken({ children }: { children: React.ReactNode }) {
    const timeout = useRef<NodeJS.Timeout | null>(null);

    const refreshToken = useCallback(async () => {
        await fetch("/api/refresh-token", {
            method: "POST",
        });

        scheduleToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const scheduleToken = useCallback(async () => {
        const response = await fetch("/api/access-token", {
            method: "POST",
        });

        if (!response.ok) return;

        const token = await response.json();
        const expiryTime = (jose.decodeJwt(token.token).exp as number) * 1000;
        const currentTime = Date.now();
        const refreshIn = Math.max(expiryTime - currentTime - 5000, 0);
        if (refreshIn <= 0) return;

        if (timeout.current) clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            refreshToken();
        }, refreshIn);
    }, [refreshToken]);

    useEffect(() => {
        scheduleToken();

        return () => {
            if (timeout.current) clearTimeout(timeout.current);
        };
    }, [scheduleToken]);

    return <>{children}</>;
}
