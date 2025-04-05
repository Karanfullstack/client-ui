"use client";

import { logout } from "@/app/action/logout";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Logout() {
    const handleLogout = async () => {
        const response = await logout();
        if (response) {
            window.location.replace("/login");
            return;
        }
    };
    return (
        <Button onClick={handleLogout} className="hover:cursor-pointer">
            Logout
        </Button>
    );
}
