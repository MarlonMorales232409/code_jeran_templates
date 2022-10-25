import { createTheme } from "@mui/material";

export const baseTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#C4762B",
		},
		secondary: {
			main: "#8894A2",
		},
		info: {
			main: "#D7B791",
		},
	},

	components: {
		MuiTypography: {
			styleOverrides: {
				h1: {
					fontSize: 30,
					fontWeight: 600,
				},
				h2: {
					fontSize: 20,
					fontWeight: 400,
				},
				subtitle1: {
					fontSize: 18,
					fontWeight: 600,
				},
			},
		},
	},
});
