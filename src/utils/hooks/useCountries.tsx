import React from "react";
import { RootState, useAppDispatch } from "./../../store/index";
import { useSelector } from "react-redux";
import {
	getCountries,
	selectCountriesInfo,
	selectVisibleCountries,
} from "../../store/slices/countrySlice";
import { selectControls } from "../../store/slices/controlsSlice";
import { Country } from "../../types";

export const useCountries = (): [Country[], ReturnType<typeof selectCountriesInfo>] => {
	const dispatch = useAppDispatch();
	const { search, region } = useSelector(selectControls);
	const countries = useSelector((state: RootState) =>
		selectVisibleCountries(state, {
			search,
			region,
		})
	);
	const { status, qty, error } = useSelector(selectCountriesInfo);

	React.useEffect(() => {
		if (!qty) {
			dispatch(getCountries());
		}
	}, [qty, dispatch]);

	return [countries, { status, error, qty }];
};
