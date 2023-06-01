import { Box, Divider, Stack, Typography } from "@mui/material"
import numberWithSpaces from "@utils/numberWithSpaces"
import { StatementEnum, WheelEnum } from "types/enums"

const DetailsTab = ({ details }: any) => {
	const stateData = [
		{ id: 0, title: "Город", value: details.city },
		{ id: 1, title: "Поколение", value: details.generation },
		{ id: 2, title: "Кузов", value: details.body },
		// { id: 3, title: "Объем двигателя", value: details.volume },
		{ id: 4, title: "Пробег", value: details.mileage },
		// { id: 5, title: "Коробка передач", value: details.transmission },
		{ id: 6, title: "Привод", value: details.driveUnit },
		{ id: 7, title: "Руль", value: details.steeringWheel },
		{ id: 8, title: "Цвет", value: details.color },
		{ id: 9, title: "Растаможен в КЗ", value: details.customsClearance },
		{ id: 10, title: "Состояние", value: details.state }
	]

	console.log("stateData: ", stateData)

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
								{row.id === 3
									? `${row.value}л`
									: row.id === 4
									? `${numberWithSpaces(row.value)}км`
									: row.id === 7
									? row.value === WheelEnum.LEFT
										? "Слева"
										: "Справа"
									: row.id === 9
									? row.value
										? "Да"
										: "Нет"
									: row.id === 10
									? row.value === StatementEnum.EMERGENCY
										? "Аварийная"
										: row.value === StatementEnum.NEW
										? "Новое"
										: "Б/У"
									: row.value}
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
