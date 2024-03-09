import { createSlice } from "@reduxjs/toolkit";
import Coffees from "../../data.json";

const coffeesSlice = createSlice({
	name: "Coffees",
	initialState: Coffees,
	reducers: {},
});

export const { coffees } = coffeesSlice.getInitialState();
