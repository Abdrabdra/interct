import AbsoluteBox from "@components/modules/AbsoluteBox"
import SubmitButton from "@components/ui/Button/SubmitButton"
import { Radio, RadioGroup } from "@mui/material"
import {
	Box,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormLabel,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Stack,
	Typography
} from "@mui/material"
import { useTypedSelector } from "@store/index"
import {
	incrementStep,
	setStepForm
} from "@store/reducers/stepper/stepper.slice"
import {
	useGetCityQuery,
	useGetDistrictQuery
} from "@store/rtk-api/announcement-rtk/announcementEndpoints"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

const PostSelectCityFrom = () => {
	const { data } = useGetCityQuery("")

	const prevCityFrom = useTypedSelector((state) => state.stepper.form.cityFrom)

	const [value, setValue] = React.useState(String(prevCityFrom))

	const dispatch = useDispatch()
	const handleChange = (event: SelectChangeEvent) => {
		setValue(event.target.value)
		dispatch(setStepForm({ cityFrom: event.target.value }))
	}

	const handleSelectImages = () => {
		dispatch(incrementStep())
	}

	return (
		<Stack spacing={2}>
			<Box sx={{ minWidth: 150 }}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">
						Город отправления
					</InputLabel>
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

			{value && (
				<Stack spacing={1}>
					<Typography>Районы</Typography>

					<GetCitiesById cityId={value} />
				</Stack>
			)}
			<AbsoluteBox>
				<SubmitButton onClick={handleSelectImages} />
			</AbsoluteBox>
		</Stack>
	)
}

export default PostSelectCityFrom

const GetCitiesById: React.FC<{ cityId: string | number }> = ({ cityId }) => {
	const { data } = useGetDistrictQuery(cityId)
	const dispatch = useDispatch()

	const prevCityFromId = useTypedSelector(
		(state) => state.stepper.form.cityFrom
	)
	const prevDistrictFromId = useTypedSelector(
		(state) => state.stepper.form.districtFromId
	)

	const [value, setValue] = React.useState<undefined | string>(
		String(prevDistrictFromId)
	)

	useEffect(() => {
		dispatch(setStepForm({ districtFromId: "" }))
		setValue("")
	}, [cityId])

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value)
		dispatch(setStepForm({ districtFromId: event.target.value }))
	}

	return (
		<Stack>
			{data && (
				<RadioGroup
					aria-labelledby="demo-controlled-radio-buttons-group"
					name="controlled-radio-buttons-group"
					value={value}
					onChange={handleChange}
				>
					{data.map((row) => (
						<FormControlLabel
							key={row.id}
							value={row.id}
							control={<Radio  />}
							label={row.title}
						/>
					))}
				</RadioGroup>
			)}
		</Stack>
	)
}
