"use client";
import { increment } from "@/store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CartCount() {
    const dispatch = useAppDispatch();
    const count = useAppSelector((state) => state.cart.value);

    const incrementCount = () => {
        dispatch(increment());
    };
    return (
        <div className=" relative mr-4">
            <Link href={"/"}>
                <ShoppingBasket />
            </Link>
            <span
                onClick={() => incrementCount()}
                className="w-6 h-6 font-medium absolute flex -top-4 -right-5 text-white  items-center  justify-center bg-orange-500 rounded-full"
            >
                {count}
            </span>
        </div>
    );
}
