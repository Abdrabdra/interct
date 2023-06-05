import AbsoluteBox from "@components/modules/AbsoluteBox"
import { MainButton } from "@components/ui/Button"
import SubmitButton from "@components/ui/Button/SubmitButton"
import { Box, IconButton, Stack, Typography } from "@mui/material"
import { useTypedSelector } from "@store/index"
import { incrementStep } from "@store/reducers/stepper/stepper.slice"
import { HTMLInputTypeAttribute, useRef, useState } from "react"
import { useDispatch } from "react-redux"

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"

import "./UploadFile.modules.scss"
import PictureOne from "./PictureOne"

const UploadFile: React.FC<{ handleSetImage: (value: File) => void }> = ({
	handleSetImage
}) => {
	const filePicker = useRef<any>(null)

	const [selectedFile, setSelectedFile] = useState<File[]>()

	const handleChange = (e: any) => {
		const input = e.target

		if (!input.files?.length) {
			return
		}

		setSelectedFile([input.files[0]])
		handleSetImage(input.files[0])
	}

	const handleAddImageClick = () => {
		filePicker.current.click()
	}

	const handleDeleteImage = (id: number) => {
		setSelectedFile(selectedFile?.filter((file, index) => index != id))
	}

	return (
		<Stack spacing={2}>
			<Stack justifyContent="center">
				{!selectedFile && (
					<MainButton onClick={handleAddImageClick} bgcolor="primary.main">
						<input
							type="file"
							ref={filePicker}
							className="hiddenImagePicker"
							onChange={handleChange}
							accept="image/*,.png,.jpg,.jpeg,.web"
						/>
						Добавить фотографию
					</MainButton>
				)}
			</Stack>

			{selectedFile &&
				selectedFile.map((row, index) => (
					<Stack spacing={1} key={index}>
						<Box sx={{ position: "relative" }}>
							<IconButton
								onClick={() => handleDeleteImage(index)}
								sx={{
									position: "absolute",
									top: "18px",
									right: "8px",
									width: "30px",
									height: "30px",
									backgroundColor: "rgba(0, 0, 0, 0.6)",
									borderRadius: "5px",
									color: "#FF0000"
								}}
							>
								<DeleteOutlineIcon />
							</IconButton>

							<PictureOne image={row} />
						</Box>
					</Stack>
				))}
		</Stack>
	)
}

export default UploadFile
