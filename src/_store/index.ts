import { coffees } from "./coffees";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";

const cartSlice = createSlice({
	name: "carrinho",
	initialState: {
		carrinho: {
			qtd: 0,
			items: [],
		},
	},
	reducers: {
		add: (state, action) => {},
		minus: (state, action) => {},
		remove: (state, action) => {},
	},
});

export const toBRL = new Intl.NumberFormat("pt-br", {
	currency: "BRL",
	style: "currency",
});

export const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
	},
});

export const { add, minus, remove } = cartSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
