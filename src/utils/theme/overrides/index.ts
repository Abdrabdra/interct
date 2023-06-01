import { Theme } from '@mui/material/styles'
import AppBar from './AppBar'

import Button from './Button'
import CssBaseline from './CssBaseline'
//
import Input from './Input'
import Paper from './Paper'
import SvgIcon from './SvgIcon'
import Accordion from './Accordion'
import Typography from './Typography'
import Container from './Container'
import MobileStepper from './MobileStepper'

export default function ComponentsOverrides(theme: Theme) {
	return Object.assign(
		Input(theme),
		Paper(theme),
		Button(theme),
		Typography(theme),
		AppBar(theme),
		SvgIcon(theme),
		MobileStepper(theme),
		Accordion(theme),
		Container(theme),
		CssBaseline(theme)
	)
}
