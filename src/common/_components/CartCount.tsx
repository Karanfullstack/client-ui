"use client";
import { useAppSelector } from "@/store/hooks";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CartCount() {
    const cartCount = useAppSelector((state) => state.cart.cart);
    return (
        <div className=" relative mr-4">
            <Link href={"/cart"}>
                <ShoppingBasket />
            </Link>
            <span className="w-6 h-6 font-medium absolute flex -top-4 -right-5 text-white  items-center  justify-center bg-orange-500 rounded-full">
                {cartCount.length}
            </span>
        </div>
    );
}
