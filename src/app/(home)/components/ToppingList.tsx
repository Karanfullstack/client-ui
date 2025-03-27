"use client";
import React, { useEffect, useState } from "react";
import Topping, { ToppingType } from "./Topping";
import { ResponseType } from "@/types";

export default function ToppingList() {
    const [toppings, setToppings] = useState<ToppingType[] | []>([]);
    const [state, setState] = useState<ToppingType[] | []>([]);
    // TODO: MAKE DYNMAIC TENANT ID
    useEffect(() => {
        const fetchToppings = async () => {
            const data = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/catalog/topping?tenantId=26`
            );
            const toppingResponse: ResponseType<ToppingType> = await data.json();
            setToppings(toppingResponse.docs);
            setState([toppingResponse.docs[0]]);
        };
        fetchToppings();
    }, []);

    console.log("stae...", state);
    const isSelected = (topping: ToppingType) => {
        const is = state.some((item: ToppingType) => item._id === topping._id);
        if (is) {
            setState((prev) => prev.filter((item: ToppingType) => item._id !== topping._id));
        } else {
            setState((prev) => [...prev, topping]);
        }
    };
    return (
        <section className="flex justify-center gap-2 items-center">
            {toppings?.map((topping) => (
                <Topping
                    state={state}
                    isSelected={isSelected}
                    topping={topping}
                    key={topping._id}
                />
            ))}
        </section>
    );
}
