"use client";
import { useAppSelector } from "@/store/hooks";
import CartItems from "./CartItems";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { makeTotalUtility } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

export default function SSRCartItems() {
    const query = useSearchParams();
    const searchQuery = new URLSearchParams(query.toString());

    const [client, setClient] = useState(false);
    const state = useAppSelector((state) => state.cart.cart);
    const router = useRouter();
    const finalTotal = useMemo(() => {
        return state.reduce((acc, item) => {
            return acc + item.qty * makeTotalUtility(item);
        }, 0);
    }, [state]);

    useEffect(() => {
        setClient(true);
    }, []);

    if (!client) return;
    if (!state.length) return <h1>Your Cart it empty</h1>;
    return (
        <>
            {state.map((item) => (
                <CartItems key={item.hash} item={item} />
            ))}

            <div className="flex justify-between items-center px-5">
                <h2 className="text-lg font-bold">${finalTotal}</h2>
                <Button
                    className="cursor-pointer"
                    onClick={() => router.push("/checkout" + `?${searchQuery}`)}
                >
                    Chckout
                </Button>
            </div>
        </>
    );
}
