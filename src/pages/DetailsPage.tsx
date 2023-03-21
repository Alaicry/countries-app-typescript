import React from "react";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import CountryDetails from "../components/CountryDetails";

const DetailsPage = () => {
	const { name } = useParams();
	const navigate = useNavigate();

	return (
		<div>
			<Button onClick={() => navigate(-1)}>
				<IoArrowBack /> Back
			</Button>
			<CountryDetails name={name} navigate={navigate} />
		</div>
	);
};

export default DetailsPage;
