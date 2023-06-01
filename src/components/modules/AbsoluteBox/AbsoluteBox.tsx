import { Box } from "@mui/material"
import { FC } from "react"

interface Props {
	children: React.ReactNode
}

const AbsoluteBox: FC<Props> = ({ children }) => {
	return (
		<Box
			sx={{
				zIndex: 999,
				width: "100%",
				maxWidth: "1200px",
				paddingLeft: "16px",
				paddingRight: "16px",
				height: "50px",
				position: "fixed",
				display: "flex",
				justifyContent: "center",
				bottom: 12,
				left: "50%",
				transform: "translate(-50%, 0)",
				visibility: "visible !important"
			}}
		>
			{children}
		</Box>
	)
}

export default AbsoluteBox
