"use client";
import dynamic from "next/dynamic";
const CartCountWithoutSSR = dynamic(() => import("./CartCount"), { ssr: false });

export default function CartSSR() {
    return <CartCountWithoutSSR />;
}
