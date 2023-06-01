import { TextField, TextFieldProps } from "@mui/material"
import { styled } from "@mui/material/styles"

export type CustomTextFieldProps = {
	bgcolor?: string
	bradius?: string
	color?: string
	bordercolor?: string
} & TextFieldProps

export const StyledMainInput = styled((props: CustomTextFieldProps) => (
	<TextField
		variant="outlined"
		fullWidth
		hiddenLabel
		{...props}
		sx={{
			"& .MuiOutlinedInput-root": {
				backgroundColor: props.bgcolor ? props.bgcolor : "common.white",
				borderRadius: props.bradius ? props.bradius : "10px",
				color: props.color ? props.color : "common.black",

				"& fieldset": {
					borderColor: props.bordercolor ? props.bordercolor : "transparent"
				}
			}
		}}
	/>
))(({ theme }) => ({
	// backgroundColor: "#E4FFF9",

	"& .MuiOutlinedInput-root": {
		height: "50px",
		border: "none",
		fontSize: "17px",

		"&:hover fieldset": {
			borderColor: theme.palette.primary.main
		},
		// "&.Mui-focused fieldset": {
		// 	borderColor: "transparent"
		// },

		"&.Mui-focused .MuiInputLabel-root": {
			color: "red"
		}
	},

	"& .MuiFormHelperText-root": {
		textAlign: "right"
	}
}))
