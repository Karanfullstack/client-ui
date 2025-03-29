"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "./store";
import { persistData } from "./cart/cartSlice";

export default function StoreProvider({ children }: { children: React.ReactNode }) {
    const storeRef = useRef<AppStore>(undefined);
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore();

        try {
            if (window && typeof window !== "undefined") {
                const cart = window.localStorage.getItem("items");
                if (cart) {
                    const data = JSON.parse(cart) || [];
                    storeRef.current.dispatch(persistData(data));
                }
            }
        } catch (error) {
            console.error("Error parsing cart from localStorage:", error);
        }
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
}
