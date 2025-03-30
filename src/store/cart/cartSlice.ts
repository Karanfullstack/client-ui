import { ToppingType } from "@/app/(home)/components/Topping";
import { myHasString } from "@/lib/utils";
import { Product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartSlice {
    product: Product;
    config: { [key: string]: string };
    toppings: ToppingType[];
    hash?: string;
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
            const hash = myHasString({ ...action.payload });
            const paylaod = {
                product: action.payload.product,
                config: action.payload.config,
                toppings: action.payload.toppings,
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
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, persistData } = cartSlice.actions;
export default cartSlice.reducer;
