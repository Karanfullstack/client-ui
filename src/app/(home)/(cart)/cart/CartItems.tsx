"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import QtyButtons from "./QtyButtons";
import React from "react";
import { CartSlice, increaseQty } from "@/store/cart/cartSlice";
import useTotal from "@/hooks/useTotal";
import { useAppDispatch } from "@/store/hooks";

export default function CartItems({ item }: { item: CartSlice }) {
    const total = useTotal(item);
    const dispatch = useAppDispatch();
    return (
        <>
            <Card
                key={item.hash}
                className=" border-0 px-2 py-0 rounded-md shadow-none justify-between flex "
            >
                <section className=" px-2 h-[50px] flex justify-between items-center gap-3">
                    <div className="flex w-[240px] gap-2 items-center ">
                        <div>
                            <Image
                                src={item.product.image.image}
                                width={70}
                                height={70}
                                alt="imag"
                            />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold">{item.product.name}</h3>
                            <div className="text-xs text-gray-400">
                                <p>
                                    {Object.entries(item.config)
                                        .map(([_key, value]) => {
                                            return value;
                                        })
                                        .join(",")}
                                </p>
                                <p>Chicken</p>
                            </div>
                        </div>
                    </div>
                    {/* button */}
                    <div className="w-fit">
                        <QtyButtons item={item} />
                    </div>

                    <div className=" w-[80px]  flex items-center gap-3">
                        <span className="font-semibold ">${total * item.qty}</span>
                        <span
                            onClick={() =>
                                dispatch(increaseQty({ hash: item.hash as string, qty: 0 }))
                            }
                            className="text-lg tracking-tighter  "
                        >
                            X
                        </span>
                    </div>
                </section>
                <div className=" bg-gray-100 h-[1px] w-[700px] m-auto"></div>
            </Card>
        </>
    );
}
