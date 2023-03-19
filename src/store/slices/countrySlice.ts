import { RootState } from "../index";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Country, Extra, Status } from "../../types";

export const getCountries = createAsyncThunk<
	{ data: Country[] },
	undefined,
	{ state: { countries: ICountrySlice }; extra: Extra; rejectValue: string }
>("@@country-getCountries", (_, { extra: { api, client }, rejectWithValue }) => {
	try {
		return client.get(api.ALL_COUNTRIES);
	} catch (error) {
		if (error instanceof Error) return rejectWithValue(error.message);
		return rejectWithValue("Unknown error");
	}
});

interface ICountrySlice {
	status: Status;
	error: string | null;
	list: Country[];
}

const initialState: ICountrySlice = {
	status: Status.LOADING,
	error: null,
	list: [],
};

const countrySlice = createSlice({
	name: "@@country",
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(getCountries.pending, (state) => {
				state.status = Status.LOADING;
				state.error = null;
				state.list = [];
			})
			.addCase(getCountries.rejected, (state, action) => {
				state.status = Status.REJECTED;
				state.error = action.payload || "Cannot get data";
				state.list = [];
			})
			.addCase(getCountries.fulfilled, (state, action) => {
				state.status = Status.RECEIVED;
				state.error = null;
				state.list = action.payload.data;
			}),
});

export const {} = countrySlice.actions;

export default countrySlice.reducer;

export const selectCountriesInfo = (state: RootState) => ({
	qty: state.countries.list.length,
	status: state.countries.status,
	error: state.countries.error,
});

export const selectAllCountries = (state: RootState) => state.countries.list;

export const selectVisibleCountries = (state: RootState, { search = "", region = "" }) => {
	return state.countries.list.filter(
		(country) =>
			country.name.toLowerCase().includes(search.toLowerCase()) && country.region.includes(region)
	);
};
