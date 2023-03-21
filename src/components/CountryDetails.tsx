import React from "react";
import { NavigateFunction } from "react-router-dom";
import { useDetails } from "../utils/hooks/useDetails";
import Info from "./Info";

interface ICountryDetailsProps {
	name?: string;
	navigate: NavigateFunction;
}

const CountryDetails: React.FC<ICountryDetailsProps> = ({ name = "", navigate }) => {
	const { currentCountry, error, status } = useDetails(name);

	return (
		<>
			{status === "loading" && <h2>Loading...</h2>}
			{error && <h2>{error}</h2>}
			{currentCountry && <Info push={navigate} {...currentCountry} />}
		</>
	);
};

export default CountryDetails;
