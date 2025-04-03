import { Button } from "@/components/ui/button";
import React from "react";

export default function OrderSummary() {
    return (
        <div>
            <h2 className="text-lg mb-4 font-bold">Order Summary</h2>
            <section className="flex flex-col text-sm gap-3 justify-center">
                <div className="flex justify-between items-center">
                    <span className=" text-md">Subtotal</span>
                    <span className="font-medium">$100</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-md">Delivery Charge</span>
                    <span className="font-medium">$10</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="">Taxes</span>
                    <span className="font-medium">$5</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="">Discount</span>
                    <span className="font-medium">$0</span>
                </div>
                <div className="w-full mt-2 h-[0.8px]  bg-gray-200"></div>
                <div className="flex justify-between items-center">
                    <span className="font-bold">Order total</span>
                    <span className="font-bold">$239</span>
                </div>
                <div className="flex justify-end items-center">
                    <Button size={"sm"}>Place order</Button>
                </div>
            </section>
        </div>
    );
}
