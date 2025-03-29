import { ToppingType } from "@/app/(home)/components/Topping";
import { Product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartSlice {
    product: Product;
    configuration: {
        priceConfiguration: { [key: string]: string };
        toppings: ToppingType[];
    };
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
            const paylaod = {
                product: action.payload.product,
                configuration: {
                    priceConfiguration: action.payload.config,
                    toppings: action.payload.toppings,
                },
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
