"use client";

import { logout } from "@/app/action/logout";
import { Button } from "@/components/ui/button";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

export default function Logout() {
    const path = usePathname();
    const searchParams = useSearchParams();
    const querySearch = new URLSearchParams(searchParams);
    querySearch.set("returnTo", path.split("/")[1]);
    const handleLogout = async () => {
        const response = await logout();
        if (response) {
            window.location.replace("/login?" + querySearch.toString());

            return;
        }
    };
    return (
        <Button onClick={handleLogout} className="hover:cursor-pointer">
            Logout
        </Button>
    );
}
