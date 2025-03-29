"use client";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import React, { memo, startTransition, useState } from "react";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import ToppingList from "./ToppingList";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/types";
import { ToppingType } from "./Topping";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/cart/cartSlice";

type Props = {
    [key: string]: string;
};
const ToppingBox = function ({ product }: { product: Product }) {
    const preSelectedRadio = Object.entries(product.category.priceConfiguration)
        .map(([key, value]) => {
            return {
                [key]: value.availableOptions[0].toLocaleLowerCase(),
            };
        })
        .reduce((acc, current) => {
            return {
                ...acc,
                ...current,
            };
        }, {});

    const [chooseConfig, setChooseConfig] = useState<Props>(preSelectedRadio as Props);
    const [chooseTopping, setChooseTopping] = useState<ToppingType[] | []>([]);

    const dispatch = useAppDispatch();
    // handlign selected toppings by user.
    const isSelected = (topping: ToppingType) => {
        const is = chooseTopping.some((item: ToppingType) => item._id === topping._id);
        if (is) {
            setChooseTopping((prev) =>
                prev.filter((item: ToppingType) => item._id !== topping._id)
            );
        } else {
            setChooseTopping((prev) => [...prev, topping]);
        }
    };

    // handle radio buttions like size and crust
    const handelSizeType = (key: string, data: string) => {
        startTransition(() => {
            setChooseConfig((prev) => ({ ...prev, [key]: data.toLocaleLowerCase() }));
        });
    };

    // add to store selecting items
    const handelCart = (product: Product) => {
        const addItems = {
            product: product,
            config: chooseConfig,
            toppings: chooseTopping,
        };
        dispatch(addToCart(addItems));
    };

    return (
        <Dialog>
            <DialogTrigger className="bg-primary w-[90px] hover:cursor-pointer rounded-full p-1 text-white text-sm font-medium px-2">
                Select
            </DialogTrigger>
            <DialogContent className="max-w-3xl p-0 bg-white">
                <VisuallyHidden>
                    <DialogTitle className="hidden">Are you absolutely sure?</DialogTitle>
                </VisuallyHidden>
                <div className="flex">
                    <div className="w-1/3 flex items-center p-2 justify-center bg-white">
                        <Image src={product.image.image} width={400} height={400} alt="image" />
                    </div>
                    <div className="w-2/3 border p-8 bg-gray-50">
                        <h3 className="text-xl font-medium">{product.name}</h3>
                        <p className="mt-2 font-normal text-sm">{product.description}</p>

                        {Object.entries(product.category.priceConfiguration).map(([key, value]) => (
                            <div key={key}>
                                <h3 className="my-3 font-sm ">Choose {key}</h3>
                                <RadioGroup
                                    defaultValue={value.availableOptions[0]}
                                    onValueChange={(data) => handelSizeType(key, data)}
                                    className="grid mt-3 grid-cols-3 gap-3"
                                >
                                    {value.availableOptions.map((option) => (
                                        <div key={option}>
                                            <RadioGroupItem
                                                aria-label={option}
                                                className="peer sr-only"
                                                value={option}
                                                id={option}
                                            />
                                            <Label
                                                htmlFor={option}
                                                className="flex  p-2 flex-col items-center justify-between rounded-md border-2 bg-white  hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                            >
                                                {option.charAt(0).toLocaleUpperCase() +
                                                    option.slice(1)}
                                            </Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </div>
                        ))}
                        {/* crust and sizes */}
                        {/* <h3 className="my-3 font-sm ">Choose Crust</h3>
                        <div>
                            <RadioGroup className="grid mt-3 grid-cols-3 gap-3">
                                <RadioGroupItem
                                    aria-label="Thin"
                                    className="peer sr-only "
                                    value="thin"
                                    id="thin"
                                />
                                <Label
                                    htmlFor={"thin"}
                                    className="flex p-2 flex-col items-center justify-between rounded-md border-2 bg-white  hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                    Small
                                </Label>

                                <div>
                                    <RadioGroupItem
                                        aria-label="Thick"
                                        className="peer sr-only"
                                        value="thick"
                                        id="thick"
                                    />
                                    <Label
                                        htmlFor={"thick"}
                                        className="flex  p-2 flex-col items-center justify-between rounded-md border-2 bg-white  hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    >
                                        Medium
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div> */}
                        {/* Toppings */}
                        <div className="">
                            <h1 className="my-4 font-sm">Extra Topping</h1>
                            <ToppingList isSelected={isSelected} chooseTopping={chooseTopping} />
                        </div>
                        {/* footer pricing and add to cart */}
                        <div className="pt-2 flex mt-5 mb-0 items-center  justify-between">
                            <span className=" font-bold ">$20.33</span>
                            <Button
                                onClick={() => handelCart(product)}
                                className="rounded-full font-medium bg-primary"
                            >
                                <ShoppingBag />
                                Add Cart
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default memo(ToppingBox);
