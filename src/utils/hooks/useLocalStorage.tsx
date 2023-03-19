import React from "react";

type ReturnType<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export const useLocalStorage = <T,>(key: string, initialValue?: T): ReturnType<T> => {
	const [state, setState] = React.useState<T>(() => {
		if (!initialValue) return;
		try {
			const value = localStorage.getItem(key);
			return value ? JSON.parse(value) : initialValue;
		} catch (err) {
			return initialValue;
		}
	});

	React.useEffect(() => {
		if (state) {
			try {
				localStorage.setItem(key, JSON.stringify(state));
			} catch (err) {
				console.log(err);
			}
		}
	}, [state, key]);

	return [state, setState];
};
