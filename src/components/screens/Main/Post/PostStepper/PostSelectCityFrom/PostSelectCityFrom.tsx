import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Stack
} from "@mui/material"
import { setStepForm } from "@store/reducers/stepper/stepper.slice"
import { useGetCityQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints"
import React from "react"
import { useDispatch } from "react-redux"

const PostSelectCityFrom = () => {
	const { data } = useGetCityQuery("")

	const [value, setValue] = React.useState("")

	const dispatch = useDispatch()
	const handleChange = (event: SelectChangeEvent) => {
		setValue(event.target.value as string)
		dispatch(setStepForm({ cityFrom: event.target.value }))
	}

	return (
		<Box sx={{ minWidth: 150 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Город отправления</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={value}
					label="Город отправления"
					onChange={handleChange}
				>
					{data?.map((row) => (
						<MenuItem value={row.id} key={row.id}>
							{row.title}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	)
}

export default PostSelectCityFrom

