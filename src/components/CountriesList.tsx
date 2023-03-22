import React from "react";
import { useNavigate } from "react-router-dom";
import { CountryInfo } from "../types";
import { useCountries } from "../utils/hooks/useCountries";
import Card from "./Card";
import List from "./List";

const CountriesList: React.FC = () => {
	const navigate = useNavigate();
	const [countries, { status, error, qty }] = useCountries();
	return (
		<>
			{error && <h2>Can't fetch data</h2>}
			{status === "loading" && <h2>Loading...</h2>}
			{status === "received" && (
				<List>
					{countries.map((country) => {
						const countryInfo: CountryInfo = {
							img: country.flags.png,
							name: country.name,
							info: [
								{
									title: "Population",
									description: country.population.toLocaleString(),
								},
								{
									title: "Region",
									description: country.region,
								},
								{
									title: "Capital",
									description: country.capital,
								},
							],
						};

						return (
							<Card
								key={country.name}
								onClick={() => navigate(`/country/${country.name}`)}
								{...countryInfo}
							/>
						);
					})}
				</List>
			)}
		</>
	);
};

export default CountriesList;
