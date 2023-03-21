import { selectSearch, setSearch } from "./../../store/slices/controlsSlice";
import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";

type onSearch = React.ChangeEventHandler<HTMLInputElement>;

export const useSearch = (): [string, onSearch] => {
	const dispath = useAppDispatch();
	const search = useSelector(selectSearch);
	const handleSearch: onSearch = (e) => {
		dispath(setSearch(e.target.value));
	};

	return [search, handleSearch];
};
