import { useEffect, useState } from "react"
import Map, { GeolocateControl, Marker } from "react-map-gl"
import { IconButton, Stack } from "@mui/material"

import "mapbox-gl/dist/mapbox-gl.css"
import { Button } from "@mui/material"

import AirportShuttleIcon from "@mui/icons-material/AirportShuttle"
import BootstrapTooltip from "@components/ui/Tooltip/BootstrapTooltip"
import { Typography } from "@mui/material"
import { IOneSession } from "types/Session/ISession"
import { SessionStatus } from "types/enums"

// const MAPBOX_TOKEN =
// "pk.eyJ1IjoidXNlcmJla292IiwiYSI6ImNsaWpnYjRteTAzYXEzY3FjMHF3YWZuNzMifQ.zY6h_VkjnW_cDHCTOkbjcA"

const MapBox: React.FC<{ data: IOneSession }> = ({ data }) => {
	const [viewport, setViewport] = useState<{
		latitude?: number
		longitude?: number
		zoom: number
	}>({ latitude: undefined, longitude: undefined, zoom: 15 })

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((pos) => {
			setViewport({
				latitude: pos.coords.latitude,
				longitude: pos.coords.longitude,
				// width: "100vw",
				// height: "100vh",
				zoom: 15
			})
		})
	}, [])

	const [lat, setLat] = useState(42.348727)
	const [long, setLong] = useState(69.568115)

	const handleClick = () => {
		setLat((prev) => prev + 0.0001)
		setLong((prev) => prev + 0.0001)
	}

	const date = new Date(data.arrivalDate)

	return (
		<div style={{ height: "500px", width: "100%" }}>
			{viewport.latitude && (
				<Map
					mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
					// {...viewport}
					initialViewState={viewport}
					// @ts-ignore
					onViewPortChange={(viewport) => setViewport(viewport)}
					mapStyle="mapbox://styles/mapbox/streets-v11"
				>
					<GeolocateControl
						positionOptions={{ enableHighAccuracy: true }}
						trackUserLocation={true}
					/>
					<Marker latitude={viewport.latitude} longitude={viewport.longitude}>
						<BootstrapTooltip
							body={
								<Stack alignItems={"start"} spacing={0.5} sx={{ width: "250px" }}>
									<TooltipRow
										title={"Статус"}
										value={
											data.status === SessionStatus.COLLECTS
												? "В ожидании"
												: data.status === SessionStatus.InTransit
												? "В пути"
												: data.status === SessionStatus.FINISH
												? "Выполнено"
												: "Ошибка"
										}
									/>
									<TooltipRow
										title={"Время отправления"}
										value={
											date.getDate() +
											"." +
											date?.getMonth() +
											"." +
											date?.getFullYear() +
											" " +
											date.getHours() +
											":" +
											date.getMinutes()
										}
									/>
									<TooltipRow
										title={"Место сбора"}
										value={data.cityFrom.title + " - " + data.districtFrom.title}
									/>
									<TooltipRow
										title={"Место Прибытия"}
										value={
											data.cityTo.title +
											" - " +
											data.districtsTo.map((row) => row.title).join(", ")
										}
									/>

									<TooltipRow
										title={"Цена билета"}
										value={data.bus.type.cost + "KZT"}
									/>
								</Stack>
							}
							buttonTitle={""}
							test={true}
						/>
					</Marker>
				</Map>
			)}
		</div>
	)
}

export default MapBox

const TooltipRow: React.FC<{ title: string; value: string }> = ({
	title,
	value
}) => {
	return (
		<Stack
			direction={"row"}
			spacing={1}
			alignItems="center"
			justifyContent={"space-between"}
			sx={{ width: "100%" }}
		>
			<Typography
				sx={{
					color: "common.white"
				}}
			>
				{title}{" "}
			</Typography>
			<Stack
				sx={{
					padding: "5px",
					borderRadius: "10px",
					backgroundColor: "common.white"
				}}
			>
				<Typography variant="caption" sx={{ color: "common.black" }}>
					{value}
				</Typography>
			</Stack>
		</Stack>
	)
}
