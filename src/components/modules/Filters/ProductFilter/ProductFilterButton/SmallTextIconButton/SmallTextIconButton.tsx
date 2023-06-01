import React from "react"

import { MainButton } from "@components/ui/Button"
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined"
import { ButtonProps } from "@mui/material"

type Props = {
	title: string
} & ButtonProps

const SmallTextIconButton: React.FC<Props> = (props) => {
	return (
		<MainButton
			{...props}
			bgcolor="primary.main"
			sx={{ height: "38px", fontSize: "14px", gap: "10px" }}
		>
			{props.title}
			<TuneOutlinedIcon />
		</MainButton>
	)
}

export default SmallTextIconButton
