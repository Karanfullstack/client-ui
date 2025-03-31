"use client";
import React, { useEffect, useState } from "react";
import Topping, { ToppingType } from "./Topping";
import { ResponseType } from "@/types";
import { useSearchParams } from "next/navigation";

type Props = {
    isSelected: (topping: ToppingType) => void;
    chooseTopping: ToppingType[];
};
export default function ToppingList({ isSelected, chooseTopping }: Props) {
    const [toppings, setToppings] = useState<ToppingType[] | []>([]);
    const params = useSearchParams().get("restaurant");

    useEffect(() => {
        const fetchToppings = async () => {
            const data = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/catalog/topping?tenantId=${params}`
            );
            const toppingResponse: ResponseType<ToppingType> = await data.json();
            setToppings(toppingResponse.docs);
        };
        fetchToppings();
    }, [params]);

    return (
        <section className="flex justify-center gap-2 items-center">
            {toppings?.map((topping) => (
                <Topping
                    state={chooseTopping}
                    isSelected={isSelected}
                    topping={topping}
                    key={topping._id}
                />
            ))}
        </section>
    );
}
