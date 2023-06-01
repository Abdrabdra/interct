import { Typography } from "@mui/material"

const OneTag = ({ children }: any) => {
	return (
		<Typography
			variant={"overline"}
			sx={{
				width: "100%",
				fontWeight: 500,
				backgroundColor: "secondary.300",
				padding: "4px 8px 4px 8px",
				borderRadius: "5px",
				color: "grey.100",
				display: "inline-block",
				whiteSpace: "nowrap",
				overflow: "hidden !important",
				textOverflow: "ellipsis"
			}}
		>
			{children}
		</Typography>
	)
}

export default OneTag
