import { Stack, Typography } from "@mui/material"
import { FC } from "react"

interface Props {
	description: string
}

const Description: FC<Props> = ({ description }) => {
	return (
		<Stack
			spacing={1}
			sx={{
				// height: "130px",
				backgroundColor: "common.white",
				borderRadius: "12px",
				padding: "16px"
			}}
		>
			<Typography
				sx={{ fontWeight: 600, fontSize: "16px", lineHeight: "19.6px" }}
			>
				Описание Продавца
			</Typography>
			<Typography
				sx={{
					fontWeight: 500,
					fontSize: "14px",
					lineHeight: "16.98px",
					color: "grey.800"
				}}
			>
				{description ? description : "Нет Описаний"}
			</Typography>
		</Stack>
	)
}

export default Description
