import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import HomePage from "./pages/HomePage";
import { useAppDispatch } from "./store";
import { getCountries } from "./store/slices/countrySlice";
import DetailsPage from "./pages/DetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

const App: React.FC = () => {
	return (
		<React.Fragment>
			<Header />
			<Main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/country/:name" element={<DetailsPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Main>
		</React.Fragment>
	);
};

export default App;
