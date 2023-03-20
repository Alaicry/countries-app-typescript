import React from "react";
import styled from "styled-components";
import Select, { Props, CSSObjectWithLabel } from "react-select";
import { Region } from "../types";

export type CountryOption =
	| {
			label: Region;
			value: Region;
	  }
	| "";

const MySelect = (props: Props<CountryOption, false>) => {
	return <Select {...props} />;
};

const CustomSelect: React.FC = styled(MySelect).attrs({
	styles: {
		control: (provided: CSSObjectWithLabel) => ({
			...provided,
			backgroundColor: "var(--colors-ui-base)",
			color: "var(--colors-text)",
			borderRadius: "var(--radii)",
			padding: "0.25rem",
			border: "none",
			boxShadow: "var(--shadow)",
			height: "50px",
		}),
		option: (provided: CSSObjectWithLabel, state: { isSelected: boolean }) => ({
			...provided,
			cursor: "pointer",
			color: "var(--colors-text)",
			backgroundColor: state.isSelected ? "var(--colors-bg)" : "var(--colors-ui-base)",
		}),
	},
})`
	width: 200px;
	border-radius: var(--radii);
	font-family: var(--family);
	border: none;

	& > * {
		box-shadow: var(--shadow);
	}

	& input {
		padding-left: 0.25rem;
	}

	& * {
		color: var(--colors-text) !important;
	}

	& > div[id] {
		background-color: var(--colors-ui-base);
	}
`;

export default CustomSelect;