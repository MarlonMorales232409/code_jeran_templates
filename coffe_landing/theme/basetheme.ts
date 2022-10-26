import { createTheme } from "@mui/material";

export const baseTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#CC9544",
		},
		secondary: {
			main: "#F0A500",
		},
		info: {
			main: "#5A2B11",
		},
		success: {
			main: "#EF962D",
		},
	},

	components: {
		MuiLink: {
			defaultProps: {
				underline: "none",
			},
		},
		MuiAppBar: {
			defaultProps: {
				elevation: 0,
				position: "fixed",
			},
			styleOverrides: {
				root: {
					backgroundColor: "white",
					height: 85,
					// boxShadow: "none",
				},
			},
		},

		MuiToolbar: {
			styleOverrides: {
				root: {
					padding: 0,
					margin: 0,
				},
			},
		},

		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 50,
				},
			},
		},

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
