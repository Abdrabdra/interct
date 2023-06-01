export type ColorSchema =
	| "primary"
	| "secondary"
	| "info"
	| "success"
	| "warning"
	| "error"
	| "common"

declare module "@mui/material/styles/createPalette" {
	interface TypeBackground {
		neutral: string
	}
	interface SimplePaletteColorOptions {
		lighter: string
		darker: string
	}
	interface PaletteColor {
		lighter: string
		darker: string
		100: string
		200: string
		300: string
		400: string
		500: string
		600: string
		700: string
		800: string
		900: string
		main_8: string
		main_12: string
		main_16: string
		main_24: string
		main_32: string
		main_48: string
	}
}

declare module "@mui/material" {
	interface Color {
		0: string
	}
}

// SETUP COLORS
const PRIMARY = {
	light: "#FFDF6A",
	main: "#2DC36A",
	dark: "#2DC36A",
	white: "#fff",
	black: "#000"
}
const SECONDARY = {
	light: "#FFBB6A",
	main: "#111111",
	dark: "#B74B03",
	0: "#000",
	100: "#111111",
	200: "#222222",
	300: "#333333",
	500: "#555555",
	600: "#F6F6F6", // AuthPage, MainInput -> backgroundColor
	900: "#999999"
}
const INFO = {
	light: "#66B5FF",
	main: "#1F90F8",
	dark: "#2073C0",
	200: "#262D35"
}
const SUCCESS = {
	light: "#8BF27F",
	main: "#42C747",
	dark: "#169A2E",
	100: "#B5FBDD" // Profile -> ProfileSettings BackGroundColor
}
const WARNING = {
	light: "#FFE16A",
	main: "#FFC107",
	dark: "#B78103"
}
const ERROR = {
	light: "#FF866A",
	main: "#ED2F2F",
	dark: "#B70B03",
	100: "#FFDFDC" // Profile -> ProfileStatistics BackGroundColor
}
const GREY = {
	0: "#F4F4F4", // backgroundColor
	100: "#C1C1C1", // text color
	200: "#F0F0F0", // ChatOne, Input Background
	300: "#E8E8E6",
	400: "#D5D4D0",
	500: "#E5E7EB", // PostPage -> PostStepperHead background
	600: "#817E77",
	700: "#F1F2F2", //chatPage bg
	800: "#878787", // navbar Color
	900: "#1B1C13"
}

const COMMON = {
	common: { black: "#000", white: "#fff" },
	primary: { ...PRIMARY, contrastText: "#fff" },
	secondary: { ...SECONDARY, contrastText: "#fff" },
	info: { ...INFO, contrastText: "#fff" },
	success: { ...SUCCESS },
	warning: { ...WARNING },
	error: { ...ERROR, contrastText: "#fff" },
	grey: { ...GREY }
}

const palette = {
	light: {
		...COMMON,
		mode: "light",
		text: { primary: "#000" },
		background: { default: GREY[0] }
	}
} as const

export default palette
