import { makeTotalUtility } from "@/lib/utils";
import { CartSlice } from "@/store/cart/cartSlice";
import { useMemo } from "react";

export default function useTotal(cart: CartSlice) {
    const total = useMemo(() => {
        return makeTotalUtility(cart);
    }, [cart]);
    return total;
}
