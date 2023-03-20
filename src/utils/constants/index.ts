import { Region } from "../../types";

type RegionOption = {
	[RegKey in Region]: { value: RegKey; label: RegKey };
};

export const optionsMap: RegionOption = {
	Africa: { value: "Africa", label: "Africa" },
	America: { value: "America", label: "America" },
	Asia: { value: "Asia", label: "Asia" },
	Europe: { value: "Europe", label: "Europe" },
	Oceania: { value: "Oceania", label: "Oceania" },
};
export const options = Object.values(optionsMap);

