import { createSlice } from "@reduxjs/toolkit";
import { coffees } from "../../../data.json";

interface ProductInterface {
	id: number;
	title: string;
	description: string;
	tags: string[];
	price: number;
	image: string;
	qtd: number;
}

interface CartStateInterface {
	products: ProductInterface[];
	coffees: ProductInterface[];
	address: { latitude: string; longitude: string };
}

const initialState: CartStateInterface = {
	products: [],
	coffees,
	address: { latitude: "", longitude: "" },
};

export const cartSlice = createSlice({
	name: "carrinho",
	initialState,
	reducers: {
		addProduct: (state, action) => {
			const index = state.products.findIndex((i) => i.id === action.payload);
			const item = state.coffees.find((i) => i.id === action.payload);

			if (!item) {
				return;
			}

			if (item.qtd < 1) {
				return;
			}

			if (index !== -1) {
				state.products[index] = {
					...state.products[index],
					qtd: state.products[index].qtd + item.qtd,
				};
				return;
			}
			state.products.push(item);
		},

		increaseQuantity: (state, action) => {
			const item = state.coffees.find((i) => i.id === action.payload.id);
			const cartItem = state.products.find((i) => i.id === action.payload.id);
			if (item) {
				item.qtd++;
			}

			if (action.payload.type === "/checkout" && cartItem) {
				cartItem.qtd++;
			}
		},

		decreaseQuantity: (state, action) => {
			const item = state.coffees.find((i) => i.id === action.payload.id);
			const cartItem = state.products.find((i) => i.id === action.payload.id);
			if (item && item.qtd >= 0) {
				item.qtd--;
			}

			if (
				cartItem &&
				cartItem.qtd >= 0 &&
				action.payload.type === "/checkout"
			) {
				cartItem.qtd--;
			}
		},

		removeFromCart: (state, action) => {
			state.products = state.products.filter((i) => i.id !== action.payload);
		},

		addCoords: (state, action) => {
			console.log(action);
			if (action.payload) {
				state.address = {
					latitude: action.payload.latitude,
					longitude: action.payload.longitude,
				};
				return;
			}
			state.address = { latitude: "", longitude: "" };
		},
	},
});

export const {
	addProduct,
	increaseQuantity,
	decreaseQuantity,
	removeFromCart,
	addCoords,
} = cartSlice.actions;
