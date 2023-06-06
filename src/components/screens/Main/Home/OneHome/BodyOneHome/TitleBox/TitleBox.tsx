import { FC } from "react"
import { Stack, Typography } from "@mui/material"
import numberWithSpaces from "@utils/numberWithSpaces"

interface Props {
	title: string
	price?: number
	phone?: string
}

const TitleBox: FC<Props> = ({ title, price, phone }) => {
	return (
		<Stack
			direction={"row"}
			justifyContent={"space-between"}
			alignItems="center"
		>
			<Stack>
				<Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
					{title}
				</Typography>
				<Typography color="primary" sx={{ fontSize: "16px", fontWeight: 500 }}>
					{numberWithSpaces(price)}KZT
				</Typography>
			</Stack>

			{phone && (
				<Stack>
					<Typography sx={{ fontSize: "12px", fontWeight: 700 }}>
						Номер телефона
					</Typography>
					<Typography
						color="primary"
						sx={{ fontSize: "12px", fontWeight: 500 }}
					>
						{phone}
					</Typography>
				</Stack>
			)}
		</Stack>
	)
}

export default TitleBox
