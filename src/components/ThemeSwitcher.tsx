import React from "react";
import styled from "styled-components";
import { useTheme } from "../utils/hooks/useTheme";
import { IoMoonOutline, IoMoon } from "react-icons/io5";

const ModeSwitcher = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	color: var(--colors-text);
	font-size: var(--fs-sm);
	cursor: pointer;
	text-transform: capitalize;
`;

const ThemeSwitcher: React.FC = () => {
	const [theme, toggleTheme] = useTheme();
	return (
		<ModeSwitcher onClick={toggleTheme}>
			{theme === "light" ? <IoMoonOutline size="14px" /> : <IoMoon size="14px" />}
			{theme} Mode
		</ModeSwitcher>
	);
};

export default ThemeSwitcher;
