import { useAppDispatch } from "../../store";
import { clearControls } from "../../store/slices/controlsSlice";

export const useCleanUp = () => {
	const dispatch = useAppDispatch();
	const cleanUp = () => dispatch(clearControls());

	return cleanUp;
};
