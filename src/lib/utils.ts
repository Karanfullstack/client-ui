import { CartSlice } from "@/store/cart/cartSlice";
import { clsx, type ClassValue } from "clsx";
import crypto from "crypto";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function myHasString(payload: CartSlice) {
    const jsonString = JSON.stringify(payload);
    return crypto.createHash("sha256").update(jsonString).digest("hex");
}
