import { CartSlice } from "@/store/cart/cartSlice";
import { Product } from "@/types";
import { clsx, type ClassValue } from "clsx";
import crypto from "crypto";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function myHasString(payload: CartSlice) {
    const jsonString = JSON.stringify({ ...payload, qty: undefined });
    return crypto.createHash("sha256").update(jsonString).digest("hex");
}

export function miniMumPrice(product: Product) {
    const priceType = Object.entries(product.priceConfiguration)
        .filter(([_key, value]) => {
            return value.priceType === "base";
        })
        .map(([_k, value]) => {
            return value.avialableOptions;
        })
        .reduce((acc, current) => {
            return {
                ...acc,
                ...current,
            };
        }, {});
    const values = Object.values(priceType);
    const MiniMumPrice = Math.min(...values);
    return MiniMumPrice;
}
