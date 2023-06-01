import { IconButton } from "@mui/material"
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined"

import { FC } from "react"
import { IconButtonProps } from "@mui/material/IconButton"

const WithIconButton: FC<IconButtonProps> = (props) => {
	return (
		<IconButton
			{...props}
			sx={{
				backgroundColor: "primary.main",
				borderRadius: "12px",
				height: "50px",
				width: "50px"
			}}
		>
			<TuneOutlinedIcon fontSize="medium" sx={{ color: "common.white" }} />
		</IconButton>
	)
}

export default WithIconButton
