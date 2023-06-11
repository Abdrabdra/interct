import { Box, Icon, Stack, Typography } from "@mui/material"
import { FC } from "react"
import { useNavigate } from "react-router-dom"

import numberWithSpaces from "@utils/numberWithSpaces"
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera"

import LikeButton from "./LikeButton"
import Tags from "./Tags"

import { IAnnouncement } from "types/Announcement/Announcement.type"
import { $image_api } from "api"
import { ISessionData } from "types/Session/ISession"

interface Props {
	car: ISessionData
}

const Main: FC<Props> = ({ car }) => {
	const { id } = car
	const navigate = useNavigate()

	const tags = {
		year: car.bus.type.title,
		state: car.bus.type.cost,
		mileage: car.cityFrom.title,
		body: car.cityTo.title,
		volume: "Быстрый"
	}

	const handleNavigate = () => {
		navigate(`/app/home/one/${id}`)
	}

	const date = new Date(car.arrivalDate)

	return (
		<Stack direction="row" spacing={1} sx={{ padding: "4px 8px 8px 4px" }}>
			<Box
				onClick={handleNavigate}
				sx={{
					backgroundColor: "secondary.200",
					borderRadius: "10px",
					width: "120px",
					height: "110px",
					position: "relative"
				}}
			>
				<Stack
					spacing={1}
					direction={"row"}
					alignItems={"center"}
					sx={{
						color: "grey.100",
						position: "absolute",
						top: "4px",
						left: "4px",
						padding: "4px 8px",
						backgroundColor: "secondary.300",
						borderRadius: "8px"
					}}
				>
					<Icon component={PhotoCameraIcon} sx={{ fontSize: 15 }} />
					<Typography
						sx={{ fontSize: "12px", fontWeight: 500, lineHeight: "14px" }}
					>
						1
					</Typography>
				</Stack>
				{car.bus && (
					<Box
						component="img"
						src={`${$image_api}${car.bus.image}`}
						sx={{
							backgroundRepeat: "no-repeat",
							objectFit: "cover",
							objectPosition: "center",

							borderRadius: "10px",
							width: "120px",
							height: "110px"
						}}
					/>
				)}
			</Box>
			<Stack justifyContent="center" sx={{ flex: "1" }}>
				<Stack
					direction={"row"}
					justifyContent="space-between"
					alignItems="start"
				>
					<Stack onClick={handleNavigate} sx={{ flex: 1 }}>
						<Typography variant="h6">
							{car.cityFrom.title} - {car.cityTo.title}
						</Typography>
						<Typography variant="h6" color="primary">
							{numberWithSpaces(car.bus.type.cost)}KZT
						</Typography>
						<Typography
							variant="h6"
							sx={{ fontWeight: 500, fontSize: "12px", color: "secondary.500" }}
						>
							{date.getDate() -
								1 +
								"." +
								date?.getMonth() +
								"." +
								date?.getFullYear()}{" "}
							-{" "}
							{date.getDate() +
								"." +
								date?.getMonth() +
								"." +
								date?.getFullYear()}
						</Typography>
					</Stack>
					{car.likes && <LikeButton profilelike={car?.likes[0]?.id} id={id} />}
				</Stack>
				<Tags tags={tags} />
			</Stack>
		</Stack>
	)
}

export default Main
