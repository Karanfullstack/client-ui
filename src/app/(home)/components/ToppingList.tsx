"use client";
import React, { useState } from "react";
import cheese from "@/app/../../assets/mushrooms 1.png";
import jalapeno from "@/app/../../assets/jelapeno 1.png";
import chicken from "@/app/../../assets/chicken 2.png";
import Topping, { ToppingType } from "./Topping";
const toppings = [
    {
        id: 1,
        name: "Chicken",
        image: cheese,
        price: 12.99,
        isAvailable: true,
    },
    {
        id: 2,
        name: "Jalapeno",
        image: chicken,
        price: 9.99,
        isAvailable: false,
    },
    {
        id: 3,
        name: "Cheese",
        image: jalapeno,
        price: 8.49,
        isAvailable: true,
    },
];

export default function ToppingList() {
    const [state, setState] = useState<ToppingType[]>([toppings[0]]);
    const isSelected = (topping: ToppingType) => {
        const is = state.some((item) => item.id === topping.id);
        if (is) {
            setState((prev) => prev.filter((item) => item.id !== topping.id));
        } else {
            setState((prev) => [...prev, topping]);
        }
    };
    return (
        <section className="flex justify-center gap-2 items-center">
            {toppings.map((topping) => (
                <Topping state={state} isSelected={isSelected} topping={topping} key={topping.id} />
            ))}
        </section>
    );
}
