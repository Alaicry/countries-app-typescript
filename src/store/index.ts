import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import * as api from "../utils/config";
import controlSlice from "./slices/controlSlice";
import countrySlice from "./slices/countrySlice";

const store = configureStore({
	reducer: {
		countries: countrySlice,
		controls: controlSlice,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: {
					client: axios,
					api,
				},
			},
			serializableCheck: false,
		}),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
