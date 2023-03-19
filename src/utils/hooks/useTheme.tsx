import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useTheme = (): [string, () => void] => {
	const defaultTheme = window.matchMedia("(prefers-color-theme: dark)").matches;

	const [theme, setTheme] = useLocalStorage("theme", defaultTheme ? "dark" : "light");

	const toggleTheme = (): void => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	React.useEffect(() => {
		document.body.setAttribute("data-theme", theme);
	}, [theme]);

	return [theme, toggleTheme];
};
