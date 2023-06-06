import { Box, Divider, Stack, Typography } from "@mui/material"
import numberWithSpaces from "@utils/numberWithSpaces"
import React from "react"
import { IUserMe } from "types/IUser"
import { IDetail } from "../DoubleTab"
// import { StatementEnum, WheelEnum } from "types/enums"

const DetailsTab: React.FC<{ details?: IDetail }> = ({ details }) => {
	const date = details?.arrivalDate && new Date(details.arrivalDate)

	const stateData = [
		{ id: 0, title: "Город отправления", value: details?.cityFrom.title },
		{ id: 1, title: "Город прибытия", value: details?.cityTo.title },
		{ id: 2, title: "Район отправления", value: details?.districtFrom.title },
		{
			id: 3,
			title: "Районы прибытия",
			value: details?.districtTo.map((row) => row.title).join(", ")
		},
		{
			id: 4,
			title: "Дата прибытия",
			value:
				date &&
				date.getDate() + "." + date?.getMonth() + "." + date?.getFullYear()
		},
		{
			id: 5,
			title: "Время Прибытия",
			value: date && date.getHours() + ":" + date.getMinutes()
		}
	]

	return (
		<Box
			sx={{
				backgroundColor: "common.white",
				borderRadius: "12px",
				padding: "16px"
			}}
		>
			<Stack>
				{stateData.map((row) => (
					<Stack key={row.id} spacing={1} sx={{ paddingTop: "0.5rem" }}>
						<Box sx={{ display: "flex" }}>
							<Typography
								sx={{
									flex: "1",
									color: "secondary.900",
									display: "flex",
									alignItems: "center"
								}}
							>
								{row.title}
							</Typography>
							<Typography
								sx={{
									flex: "1",
									display: "display",
									alignItems: "center",
									fontWeight: 500
								}}
							>
								{String(row?.value)}
							</Typography>
						</Box>
						<Divider />
					</Stack>
				))}
			</Stack>
		</Box>
	)
}

export default DetailsTab
