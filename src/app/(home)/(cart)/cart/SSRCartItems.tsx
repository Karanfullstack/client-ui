"use client";

import dynamic from "next/dynamic";

const CartItems = dynamic(() => import("./CartItems"), { ssr: false });

export default function SSRCartItems() {
    return <CartItems />;
}
