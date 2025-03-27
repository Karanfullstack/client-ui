"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

export type ToppingType = {
    _id: string;
    id: number;
    name: string;
    price: number;
    image: {
        image: string;
        public_id: string;
    };
};
type props = {
    topping: ToppingType;
    isSelected: (topping: ToppingType) => void;
    state: ToppingType[];
};

export default function Topping({ topping, isSelected, state }: props) {
    const is = state?.some((item) => item._id === topping._id);

    return (
        <Button
            onClick={() => isSelected(topping)}
            variant={"outline"}
            className={cn("p-3 flex flex-col h-[140px] relative ", is ? "border-primary" : "")}
        >
            <Image src={topping.image.image} width={70} height={70} alt="toppingimage" />
            <h4>{topping.name}</h4>
            <p>${topping.price}</p>
            <div>
                {is ? (
                    <Check className="bg-primary absolute top-1 right-1  rounded-full text-white " />
                ) : (
                    <Check className=" bg-gray-300 absolute top-1 right-1  rounded-full text-white " />
                )}
            </div>
        </Button>
    );
}
