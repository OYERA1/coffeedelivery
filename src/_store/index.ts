import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { cartSlice } from "./cart/slice";
import { checkoutSlice } from "./checkout";

export const toBRL = new Intl.NumberFormat("pt-br", {
	currency: "BRL",
	style: "currency",
});

export const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
		checkout: checkoutSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
