import { Theme } from '@mui/material/styles'

export default function Container(theme: Theme) {
	return {
		MuiContainer: {
			styleOverrides: {
				root: {
					// backgroundImage: 'none'
					maxWidth: '1536px !important'
				}
			}
		}
	}
}
