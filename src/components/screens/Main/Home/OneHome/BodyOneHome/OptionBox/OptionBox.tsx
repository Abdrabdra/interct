import { Box, Stack, Typography } from "@mui/material"
import { FC } from "react"

interface IData {
	id?: number
	title?: string
}

interface Props {
	data?: IData[]
}

const OptionBox: FC<Props> = ({ data }) => {
	return (
		<Stack
			spacing={1}
			sx={{
				backgroundColor: "common.white",
				borderRadius: "12px",
				padding: "16px"
			}}
		>
			<Typography
				sx={{
					fontWeight: 600,
					fontSize: "16px",
					lineHeight: "19.6px"
				}}
			>
				Опции и характеристики
			</Typography>
			<Stack direction={"row"} sx={{ flexWrap: "wrap", gap: "8px" }}>
				{data?.map((row) => (
					<Box
						key={row.id}
						sx={{
							backgroundColor: "grey.200",
							padding: "4px 8px",
							height: "23px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							borderRadius: "5px"
						}}
					>
						<Typography
							sx={{
								display: "inline-block",
								fontSize: "12px",
								fontWeight: 600,
								lineHeight: "14.7px"
							}}
						>
							{row.title}
						</Typography>
					</Box>
				))}
			</Stack>
		</Stack>
	)
}

export default OptionBox
