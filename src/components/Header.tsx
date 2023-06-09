import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "./Container";
import ThemeSwitcher from "./ThemeSwitcher";
import { useCleanUp } from "../utils/hooks/useCleanUp";

const HeaderEl = styled.header`
	box-shadow: var(--shadow);
	background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 0;
`;

const Title = styled(Link).attrs({
	to: "/",
})`
	color: var(--colors-text);
	font-size: var(--fs-sm);
	text-decoration: none;
	font-weight: var(--fw-bold);
`;

const Header: React.FC = () => {
	const cleanUp = useCleanUp();
	return (
		<HeaderEl>
			<Container>
				<Wrapper>
					<Title onClick={cleanUp}>Where is the world?</Title>
					<ThemeSwitcher />
				</Wrapper>
			</Container>
		</HeaderEl>
	);
};

export default Header;
