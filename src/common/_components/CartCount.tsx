"use client";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CartCount() {
    return (
        <div className=" relative mr-4">
            <Link href={"/"}>
                <ShoppingBasket />
            </Link>
            <span className="w-6 h-6 font-medium absolute flex -top-4 -right-5 text-white  items-center  justify-center bg-orange-500 rounded-full">
                {1}
            </span>
        </div>
    );
}
