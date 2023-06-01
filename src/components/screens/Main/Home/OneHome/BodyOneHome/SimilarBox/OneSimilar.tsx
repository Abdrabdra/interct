import { Box, IconButton, Stack, Typography } from "@mui/material"
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded"
import { FC } from "react"
import { IAnnouncement } from "types/Announcement/Announcement.type"
import numberWithSpaces from "@utils/numberWithSpaces"
import { $image_api } from "api"
import { useNavigate } from "react-router-dom"

interface Props {
	data: IAnnouncement
}

const OneSimilar: FC<Props> = ({ data }) => {
	const navigate = useNavigate()

	const handleNavigate = () => {
		navigate(`/app/home/one/${data.id}`)
	}

	return (
		<Stack
			onClick={handleNavigate}
			sx={{
				width: "166px",
				backgroundColor: "common.white",
				borderRadius: "12px",
				padding: "8px"
			}}
		>
			<Box
				component={"img"}
				src={`${$image_api}${data.avatar}`}
				sx={{
					width: "100%",
					height: "110px",
					borderRadius: "10px",
					marginBottom: "8px",
					backgroundColor: "secondary.200",
					backgroundRepeat: "no-repeat",
					objectFit: "cover",
					objectPosition: "center"
				}}
			/>
			<Typography
				sx={{
					color: "grey.800",
					fontWeight: 500,
					fontSize: "10px",
					lineHeight: "12.12px",
					marginBottom: "3px"
				}}
			>
				{data.year}г.
			</Typography>
			<Typography
				sx={{
					fontWeight: 600,
					fontSize: "12px",
					lineHeight: "14.7px",
					marginBottom: "5px"
				}}
			>
				{`${data.marka} ${data.model}`}
			</Typography>
			<Typography
				sx={{
					color: "primary.main",
					fontWeight: 500,
					fontSize: "14px",
					lineHeight: "16.98px",
					marginBottom: "12px"
				}}
			>
				{numberWithSpaces(data.price)} KZT
			</Typography>
			<Stack direction={"row"} justifyContent={"space-between"}>
				<Typography
					sx={{
						color: "secondary.300",
						fontSize: "12px",
						fontWeight: 500,
						lineHeight: "20px"
					}}
				>
					Подробнее
				</Typography>
				<IconButton
					color={"primary"}
					sx={{
						width: "24px",
						height: "24px",
						backgroundColor: "secondary.300"
					}}
				>
					<ArrowForwardIosRoundedIcon sx={{ fontSize: "13px" }} />
				</IconButton>
			</Stack>
		</Stack>
	)
}

export default OneSimilar
