import { useEffect, useState } from "react"
import Map, { GeolocateControl, Marker } from "react-map-gl"
import { Stack } from "@mui/material"

import "mapbox-gl/dist/mapbox-gl.css"
import { Button } from "@mui/material"

import AirportShuttleIcon from "@mui/icons-material/AirportShuttle"

// const MAPBOX_TOKEN =
// "pk.eyJ1IjoidXNlcmJla292IiwiYSI6ImNsaWpnYjRteTAzYXEzY3FjMHF3YWZuNzMifQ.zY6h_VkjnW_cDHCTOkbjcA"

const MapBox = () => {
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

	console.log("viewport: ", viewport)

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
					<Marker latitude={lat} longitude={long}>
						<Button
							startIcon={<AirportShuttleIcon />}
							onClick={handleClick}
						></Button>
					</Marker>
				</Map>
			)}
		</div>
	)
}

export default MapBox
