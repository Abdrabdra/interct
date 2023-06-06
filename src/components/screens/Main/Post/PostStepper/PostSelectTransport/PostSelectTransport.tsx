import AbsoluteBox from "@components/modules/AbsoluteBox"
import { MainButton } from "@components/ui/Button"
import SubmitButton from "@components/ui/Button/SubmitButton"
import { StyledMainInput } from "@components/ui/Input"
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent
} from "@mui/material"
import { Typography } from "@mui/material"
import { Box, Divider, Stack } from "@mui/material"
import { incrementStep } from "@store/reducers/stepper/stepper.slice"
import {
	useCreateBusMutation,
	useGetPlaceTypeQuery
} from "@store/rtk-api/announcement-rtk/announcementEndpoints"
import { useFormik } from "formik"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import UploadFile from "./UploadFile"

const PostSelectTransport = () => {
	const [value, setValue] = React.useState("")

	const { data } = useGetPlaceTypeQuery("")
	const [create] = useCreateBusMutation()

	const formik = useFormik({
		initialValues: { number: "", typeId: undefined, image: "" },
		onSubmit: (values) => {
			values.typeId &&
				imageFile &&
				create({
					number: values.number,
					typeId: values.typeId,
					image: imageFile
				})
		}
	})

	const { handleSubmit, values, handleChange, setFieldValue } = formik

	const handleSelectChange = (event: SelectChangeEvent) => {
		setValue(event.target.value as string)
		setFieldValue("typeId", event.target.value)
	}

	const [imageFile, setImageFile] = useState<File | undefined>()

	const handleSetImage = (value: File) => {
		setImageFile(value)
	}

	const dispatch = useDispatch()

	const handleSelectImages = () => {
		dispatch(incrementStep())
	}

	return (
		<form onSubmit={handleSubmit}>
			<Stack spacing={1.25}>
				<StyledMainInput
					label="Гос. Номер"
					value={values.number}
					onChange={handleChange}
					name={"number"}
				/>

				<Box sx={{ minWidth: 150 }}>
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">TypeId</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={value}
							label="TypeId"
							onChange={handleSelectChange}
						>
							{data?.map((row) => (
								<MenuItem key={row.id} value={row.id}>
									<Stack>
										<Typography>Название: {row.title}</Typography>
										<Typography>Цена: {row.cost}</Typography>
									</Stack>
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Box>

				<UploadFile handleSetImage={handleSetImage} />

				<MainButton type="submit">Создать</MainButton>

				<Box>
					<AbsoluteBox>
						<SubmitButton onClick={handleSelectImages} />
					</AbsoluteBox>
				</Box>
			</Stack>
		</form>
	)
}

export default PostSelectTransport
