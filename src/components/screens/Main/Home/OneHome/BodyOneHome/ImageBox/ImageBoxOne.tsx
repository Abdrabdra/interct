import { Box } from "@mui/material"
import { $image_api } from "api"
import { FC } from "react"

interface Props {
	image?: string
}

const ImageBoxOne: FC<Props> = ({ image }) => {
	// const blob = [image]

	return (
		<Box
			component="img"
			src={`${$image_api}${image}`}
			sx={{
				width: "100%",
				height: "200px",
				borderRadius: "10px",
				backgroundColor: "secondary.200",
				backgroundRepeat: "no-repeat",
				objectFit: "cover",
				objectPosition: "center"
			}}
		/>
	)
}

export default ImageBoxOne
