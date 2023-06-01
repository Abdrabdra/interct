import { Stack } from "@mui/material"
import React from "react"

const ViewHeightBox: React.FC<{ text: string }> = ({ text }) => {
	return (
		<Stack
			direction={"row"}
			alignItems={"center"}
			justifyContent="center"
			sx={{ height: "calc(100vh - 185px)", fontSize: "20px", fontWeight: 500 }}
		>
			{text}
		</Stack>
	)
}

export default ViewHeightBox
