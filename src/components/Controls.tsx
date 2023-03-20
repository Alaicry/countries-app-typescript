import styled from "styled-components";
import Search from "./Search";
import CustomSelect from "./CustomSelect";
import { useRegion } from "../utils/hooks/useRegion";
import { options, optionsMap } from "../utils/constants";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media (min-width: 767px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

const Controls: React.FC = () => {
	const [region, handleSelect] = useRegion();

	return (
		<Wrapper>
			<Search />
			<CustomSelect
				options={options}
				placeholder="Filter by Region"
				isClearable
				isSearchable={false}
				value={region ? optionsMap[region] : ""}
				onChange={handleSelect}
			/>
		</Wrapper>
	);
};

export default Controls;
