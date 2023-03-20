import { useSelector } from "react-redux";
import { SingleValue } from "react-select";
import { CountryOption } from "../../components/CustomSelect";
import { useAppDispatch } from "../../store";
import { selectRegion, setRegion } from "../../store/slices/controlsSlice";
import { Region } from "../../types";

type onSelect = (reg: SingleValue<CountryOption>) => void;

export const useRegion = (): [Region | "", onSelect] => {
	const dispath = useAppDispatch();
	const region = useSelector(selectRegion);
	const handleSelect: onSelect = (region) => {
		if (region) {
			dispath(setRegion(region.value || ""));
		} else {
			dispath(setRegion(""));
		}
	};

	return [region, handleSelect];
};
