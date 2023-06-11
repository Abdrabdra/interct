import { Stack } from "@mui/material"
import React from "react"
import { IPlace } from "types/Session/ISession"
import { OrderButton } from "./Order"

const OrderTypes: React.FC<{ places: IPlace[]; bus: { id: number } }> = ({
	places,
	bus
}) => {
	// if (bus.id === 14) {
	return (
		<Stack
			direction="column"
			p={2}
			sx={{
				width: "max-content",
				border: "1px solid",
				borderColor: "grey.100",
				borderRadius: "10px",
				flexWrap: "wrap",
				gap: "8px"
			}}
		>
			<Stack direction="row" justifyContent={"flex-end"} sx={{ gap: "8px" }}>
				<OrderButton id={places[0].id} title={1} isTaken={places[0].taken} />
			</Stack>
			<Stack direction="row" sx={{ gap: "8px" }}>
				<OrderButton id={places[1].id} title={2} isTaken={places[1].taken} />
				<OrderButton id={places[2].id} title={3} isTaken={places[2].taken} />
				<OrderButton id={places[3].id} title={4} isTaken={places[3].taken} />
			</Stack>
		</Stack>
	)
	// }

	// return (
	// 	<Stack
	// 		direction="row"
	// 		p={2}
	// 		justifyContent={"flex-start"}
	// 		alignItems={"flex-start"}
	// 		sx={{
	// 			border: "1px solid",
	// 			borderColor: "grey.100",
	// 			borderRadius: "10px",
	// 			flexWrap: "wrap",
	// 			gap: "8px"
	// 		}}
	// 	>
	// 		{places.map((row, index) => (
	// 			<OrderButton id={row.id} title={index + 1} isTaken={row.taken} />
	// 		))}
	// 	</Stack>
	// )
}

export default OrderTypes
