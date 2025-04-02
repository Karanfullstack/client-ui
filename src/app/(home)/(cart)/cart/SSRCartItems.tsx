"use client";
import { useAppSelector } from "@/store/hooks";
import CartItems from "./CartItems";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { makeTotalUtility } from "@/lib/utils";

export default function SSRCartItems() {
    const [client, setClient] = useState(false);
    const state = useAppSelector((state) => state.cart.cart);
    const finalTotal = useMemo(() => {
        return state.reduce((acc, item) => {
            return acc + item.qty * makeTotalUtility(item);
        }, 0);
    }, [state]);

    useEffect(() => {
        setClient(true);
    }, []);

    if (!client) return;

    return (
        <>
            {state.map((item) => (
                <CartItems key={item.hash} item={item} />
            ))}

            <div className="flex justify-between items-center px-5">
                <h2 className="text-lg font-bold">${finalTotal}</h2>
                <Button>Chckout</Button>
            </div>
        </>
    );
}
