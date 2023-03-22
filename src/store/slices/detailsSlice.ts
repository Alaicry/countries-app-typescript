import { RootState } from "./../../store/index";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Country, Extra, Status } from "../../types";

export const loadCountryByName = createAsyncThunk<
	{ data: Country[] },
	string,
	{ extra: Extra; rejectValue: string }
>("@@details/load-country", async (name, { extra: { client, api }, rejectWithValue }) => {
	try {
		const data = await client.get(api.searchByCountry(name));
		return data;
	} catch (err) {
		if (err instanceof Error) return rejectWithValue(err.message);
		return rejectWithValue("Unknown error");
	}
});

export const loadNeighboursByBorder = createAsyncThunk<
	{ data: Country[] },
	string[],
	{ extra: Extra; rejectValue: string }
>("@@details/load-neighbours", async (borders, { extra: { client, api }, rejectWithValue }) => {
	try {
		const data = await client.get(api.filterByCode(borders));
		return data;
	} catch (err) {
		if (err instanceof Error) return rejectWithValue(err.message);
		return rejectWithValue("Unknown error");
	}
});

interface IDetailsSlice {
	currentCountry: null | Country;
	neighbours: string[];
	status: Status;
	error: null | string;
}

const initialState: IDetailsSlice = {
	currentCountry: null,
	neighbours: [],
	status: Status.LOADING,
	error: null,
};

const detailsSlice = createSlice({
	name: "@@details",
	initialState,
	reducers: {
		clearDetails: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadCountryByName.pending, (state) => {
				state.status = Status.LOADING;
				state.error = null;
			})
			.addCase(loadCountryByName.rejected, (state, action) => {
				state.status = Status.REJECTED;
				state.error = action.payload || "Cannot load data";
			})
			.addCase(loadCountryByName.fulfilled, (state, action) => {
				state.status = Status.RECEIVED;
				state.currentCountry = action.payload.data[0];
			})
			.addCase(loadNeighboursByBorder.pending, (state) => {
				state.neighbours = [];
			})
			.addCase(loadNeighboursByBorder.rejected, (state) => {
				state.neighbours = [];
			})
			.addCase(loadNeighboursByBorder.fulfilled, (state, action) => {
				state.neighbours = action.payload.data.map((country) => country.name);
			});
	},
});

export const { clearDetails } = detailsSlice.actions;

export default detailsSlice.reducer;

export const selectCurrentCountry = (state: RootState) => state.details.currentCountry;
export const selectDetails = (state: RootState) => state.details;
export const selectNeighbours = (state: RootState) => state.details.neighbours;
