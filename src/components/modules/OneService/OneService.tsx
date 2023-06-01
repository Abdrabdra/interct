import { MainButton } from "@components/ui/Button"
import { Stack, Typography } from "@mui/material"
import numberWithSpaces from "@utils/numberWithSpaces"
import React from "react"

const OneService: React.FC<{
	title: string
	services: string[]
	price: number
	handleClick: () => void
}> = ({ title, services, price, handleClick }) => {
	const handleOnClick = () => {
		handleClick()
	}

	return (
		<Stack
			spacing={1.5}
			sx={{
				border: "1px solid",
				borderColor: "grey.800",
				borderRadius: "20px",
				padding: "20px"
			}}
		>
			<Typography
				sx={{ alignSelf: "center", fontSize: "18px", fontWeight: 700 }}
			>
				{title}
			</Typography>

			<Stack>
				<Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
					Вы получите
				</Typography>
				{services.map((row) => (
					<Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
						- {row}
					</Typography>
				))}
			</Stack>
			<Typography
				sx={{ alignSelf: "center", fontSize: "18px", fontWeight: 600 }}
			>
				{numberWithSpaces(price)} KZT
			</Typography>

			<MainButton bgcolor="primary.main" onClick={handleOnClick}>
				Выбрать
			</MainButton>
		</Stack>
	)
}

export default OneService
