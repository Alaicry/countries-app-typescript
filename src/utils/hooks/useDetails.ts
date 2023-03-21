import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";
import { clearDetails, loadCountryByName, selectDetails } from "../../store/slices/detailsSlice";

export const useDetails = (name: string) => {
	const dispatch = useAppDispatch();
	const details = useSelector(selectDetails);

	React.useEffect(() => {
		dispatch(loadCountryByName(name));
		return () => {
			dispatch(clearDetails());
		};
	}, [name, dispatch]);

	return details;
};
