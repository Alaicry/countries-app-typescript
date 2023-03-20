import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import HomePage from "./pages/HomePage";
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
			<Main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					{/* <Route path="/country/:name" element={<Details />} />
					<Route path="*" element={<NotFound />} /> */}
				</Routes>
			</Main>
		</React.Fragment>
	);
};

export default App;
