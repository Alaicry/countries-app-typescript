import { RootState } from "../index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Region } from "../../types";

interface IControlSlice {
	search: string;
	region: Region | "";
}

const initialState: IControlSlice = {
	search: "",
	region: "",
};

const controlsSlice = createSlice({
	name: "@@controls",
	initialState,
	reducers: {
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},
		setRegion: (state, action: PayloadAction<Region | "">) => {
			state.region = action.payload;
		},
		clearControls: () => initialState,
	},
});

export const { setRegion, setSearch, clearControls } = controlsSlice.actions;

export default controlsSlice.reducer;

export const selectSearch = (state: RootState) => state.controls.search;
export const selectRegion = (state: RootState) => state.controls.region;
export const selectControls = (state: RootState) => state.controls;
