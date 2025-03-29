import { Product } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface CartSlice {
    product: Product;
    configuration: {
        priceConfiguration: { [key: string]: string };
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
            return {
                cart: [
                    ...state.cart,
                    {
                        product: action.payload.product,
                        configuration: {
                            priceConfiguration: action.payload.config,
                        },
                    },
                ],
            };
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
