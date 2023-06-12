import { Box, Stack } from "@mui/material"
import React from "react"
import { IPlace } from "types/Session/ISession"
import { OrderButton } from "./Order"

const OrderTypes: React.FC<{
	places: IPlace[]
	bus: { id: number; type: { id: number } }
}> = ({ places, bus }) => {
	if (Number(bus.type.id) === 14) {
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
					<OrderButton
						id={places[0]?.id}
						title={1}
						isTaken={places[0]?.taken}
					/>
				</Stack>
				<Stack direction="row" sx={{ gap: "8px" }}>
					<OrderButton
						id={places[1]?.id}
						title={2}
						isTaken={places[1]?.taken}
					/>
					<OrderButton
						id={places[2]?.id}
						title={3}
						isTaken={places[2]?.taken}
					/>
					<OrderButton
						id={places[3]?.id}
						title={4}
						isTaken={places[3]?.taken}
					/>
				</Stack>
			</Stack>
		)
	}

	if (Number(bus.type.id) === 15) {
		// 1 3 2
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
					<OrderButton
						id={places[0]?.id}
						title={1}
						isTaken={places[0]?.taken}
					/>
				</Stack>
				<Stack direction="row" sx={{ gap: "8px" }}>
					<OrderButton
						id={places[1]?.id}
						title={2}
						isTaken={places[1]?.taken}
					/>
					<OrderButton
						id={places[2]?.id}
						title={3}
						isTaken={places[2]?.taken}
					/>
					<OrderButton
						id={places[3]?.id}
						title={4}
						isTaken={places[3]?.taken}
					/>
				</Stack>
				<Stack direction="row" justifyContent={"space-between"} sx={{ gap: "8px" }}>
					<OrderButton
						id={places[4]?.id}
						title={5}
						isTaken={places[4]?.taken}
					/>
					<OrderButton
						id={places[4]?.id}
						title={6}
						isTaken={places[4]?.taken}
					/>
				</Stack>
			</Stack>
		)
	}

	if (Number(bus.type.id) === 18) {
		// row-10, column-4
		return (
			<Stack
				direction="column"
				p={2}
				sx={{
					width: "fit-content",
					border: "1px solid",
					borderColor: "grey.100",
					borderRadius: "10px",
					flexWrap: "wrap",
					gap: "8px"
				}}
			>
				<Stack direction="row" sx={{ gap: "8px", flexWrap: "wrap" }}>
					{places.map((row, index) => (
						<OrderButton
							forBus
							id={row?.id}
							title={index + 1}
							isTaken={row?.taken}
							key={row?.id}
						/>
					))}
				</Stack>
			</Stack>
		)
	}

	return (
		<Stack
			direction="row"
			p={2}
			justifyContent={"flex-start"}
			alignItems={"flex-start"}
			sx={{
				border: "1px solid",
				borderColor: "grey.100",
				borderRadius: "10px",
				flexWrap: "wrap",
				gap: "8px"
			}}
		>
			{places.map((row, index) => (
				<OrderButton
					key={row.id}
					id={row.id}
					title={index + 1}
					isTaken={row.taken}
				/>
			))}
		</Stack>
	)
}

export default OrderTypes
