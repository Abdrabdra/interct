import { Box } from "@mui/material"
import { FC } from "react"

interface Props {
	image: File
}

const ImageBoxOne: FC<Props> = ({ image }) => {
	const blob = [image]

	return (
		<Box
			component="img"
			src={URL.createObjectURL(new Blob(blob, { type: "application/zip" }))}
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
