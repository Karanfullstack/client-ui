"use client";

import { CartSlice, increaseQty } from "@/store/cart/cartSlice";
import { useDispatch } from "react-redux";

export default function QtyButtons({ item }: { item: CartSlice }) {
    const dispatch = useDispatch();

    const handleCount = (data: number) => {
        dispatch(increaseQty({ hash: item.hash as string, qty: data }));
    };
    return (
        <div className="w-[95px] justify-center items-center relative  flex h-[30px] rounded-full bg-gray-100 ">
            <button
                onClick={() => handleCount(-1)}
                className=" cursor-pointer h-[30px] hover:bg-gray-300 absolute left-0  w-[30px] rounded-full m-auto"
            >
                -
            </button>
            <span className="text-sm">{item.qty}</span>
            <button
                onClick={() => handleCount(1)}
                className=" cursor-pointer h-[30px] hover:bg-gray-300 absolute right-0   w-[30px] rounded-full m-auto"
            >
                +
            </button>
        </div>
    );
}
