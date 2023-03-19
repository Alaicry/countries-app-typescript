import React from "react";
import Header from "./components/Header";
import { useAppDispatch } from "./store";
import { getCountries } from "./store/slices/countrySlice";

const App: React.FC = () => {
	const dispatch = useAppDispatch();
	React.useEffect(() => {
		dispatch(getCountries());
	});

	return (
		<React.Fragment>
			<Header />
		</React.Fragment>
	);
};

export default App;
