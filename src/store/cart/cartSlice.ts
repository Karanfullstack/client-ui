import { ToppingType } from "@/app/(home)/components/Topping";
import { myHasString } from "@/lib/utils";
import { Product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartSlice {
    product: Product;
    config: { [key: string]: string };
    toppings: ToppingType[];
    hash?: string;
    qty: number;
}

export interface CartState {
    cart: CartSlice[];
}
const initialState: CartState | [] = {
    cart: [],
};
export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const hash = myHasString({ ...action.payload, qty: undefined });
            const paylaod = {
                product: action.payload.product,
                config: action.payload.config,
                toppings: action.payload.toppings,
                qty: 1,
                hash,
            };
            window.localStorage.setItem("items", JSON.stringify([...state.cart, paylaod]));
            return {
                cart: [...state.cart, paylaod],
            };
        },
        persistData: (state, action: PayloadAction<CartSlice[]>) => {
            state.cart.push(...action.payload);
        },
        increaseQty: (state, action: PayloadAction<{ hash: string; qty: number }>) => {
            const index = state.cart.findIndex((item) => item.hash === action.payload.hash);
            // remove cart if passes zero
            if (action.payload.qty === 0) {
                state.cart.splice(index, 1);
                window.localStorage.setItem("items", JSON.stringify(state.cart));
                return;
            }
            state.cart[index].qty = Math.max(1, state.cart[index].qty + action.payload.qty);
            window.localStorage.setItem("items", JSON.stringify(state.cart));
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, persistData, increaseQty } = cartSlice.actions;
export default cartSlice.reducer;
