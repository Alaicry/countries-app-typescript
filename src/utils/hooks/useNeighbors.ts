import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";
import { loadNeighboursByBorder, selectNeighbours } from "../../store/slices/detailsSlice";

export const useNeighbors = (borders: string[] = []) => {
	const dispatch = useAppDispatch();
	const neighbors = useSelector(selectNeighbours);

	React.useEffect(() => {
		if (borders.length) {
			dispatch(loadNeighboursByBorder(borders));
		}
	}, [borders, dispatch]);

	return neighbors;
};
