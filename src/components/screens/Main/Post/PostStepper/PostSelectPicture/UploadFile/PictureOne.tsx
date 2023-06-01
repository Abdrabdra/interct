import { Box } from "@mui/material"
import { FC } from "react"

interface Props {
	image: File
}

const PictureOne: FC<Props> = ({ image }) => {
	const blob = [image]

	return (
		<Box
			component="img"
			src={URL.createObjectURL(new Blob(blob, { type: "application/image" }))}
			sx={{
				width: "100%",
				height: "250px",
				borderRadius: "10px",
				backgroundColor: "secondary.200",
				backgroundRepeat: "no-repeat",
				objectFit: "cover",
				objectPosition: "center"
			}}
		/>
	)
}

export default PictureOne
