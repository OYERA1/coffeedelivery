import { createSlice } from "@reduxjs/toolkit";
import { ProductInterface } from "../../@types/interface";

interface CheckoutStateInterface {
	payload: {
		address: {
			rua: string;
			numero: number;
			cidade: string;
			uf: string;
			bairro: string;
		};
		items: ProductInterface[];
		paymentMethod: string;
		customError: string;
		idPedido?: string;
	};
}

const initialState: CheckoutStateInterface["payload"] = {
	address: {
		cidade: "",
		numero: 0,
		rua: "",
		uf: "",
		bairro: "",
	},
	items: [],
	paymentMethod: "",
	customError: "",
};

export const checkoutSlice = createSlice({
	name: "checkout",
	initialState,
	reducers: {
		onSubmitAction: (state, action: CheckoutStateInterface) => {
			const data = action.payload;
			if (data.address) {
				state.address = {
					...state.address,
					rua: data.address.rua,
					cidade: data.address.cidade,
					numero: data.address.numero,
					bairro: data.address.bairro,
					uf: data.address.uf,
				};
			}
			state.items = data.items.map((item) => item);
			state.paymentMethod = data.paymentMethod;
			state.idPedido = crypto.randomUUID();
		},

		setCustomError: (state, action) => {
			state.customError = action.payload;
		},
	},
});

export const { onSubmitAction, setCustomError } = checkoutSlice.actions;
