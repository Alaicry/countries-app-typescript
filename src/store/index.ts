import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import * as api from "../utils/constants/api";
import controlsSlice from "./slices/controlsSlice";
import countrySlice from "./slices/countrySlice";
import detailsSlice from "./slices/detailsSlice";

const store = configureStore({
	reducer: {
		countries: countrySlice,
		controls: controlsSlice,
		details: detailsSlice,
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
