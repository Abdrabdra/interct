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
	deleteStepFormDistrictsToIds,
	incrementStep,
	setStepForm,
	setStepFormDistrictsToIds
} from "@store/reducers/stepper/stepper.slice"
import {
	useGetCityQuery,
	useGetDistrictQuery
} from "@store/rtk-api/announcement-rtk/announcementEndpoints"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

const PostSelectCityTo = () => {
	const { data } = useGetCityQuery("")

	const prevCityTo = useTypedSelector((state) => state.stepper.form.cityTo)

	const [value, setValue] = React.useState(String(prevCityTo))

	const dispatch = useDispatch()
	const handleChange = (event: SelectChangeEvent) => {
		setValue(event.target.value)
		dispatch(setStepForm({ cityTo: event.target.value }))
		dispatch(setStepForm({ districtsToIds: [] }))
	}

	const handleSelectImages = () => {
		dispatch(incrementStep())
	}

	return (
		<Stack spacing={2}>
			<Box sx={{ minWidth: 150 }}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Город Прибытия</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={value}
						label="Город прибытия"
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

export default PostSelectCityTo

const GetCitiesById: React.FC<{ cityId: string | number }> = ({ cityId }) => {
	const { data } = useGetDistrictQuery(cityId)

	return (
		<Stack>
			{data?.map((row) => (
				<CheckBoxRow key={row.id} id={row.id} label={row.title} />
			))}
		</Stack>
	)
}

const CheckBoxRow: React.FC<{ id: number; label: string }> = ({
	id,
	label
}) => {
	const dispatch = useDispatch()

	const prevDistrictsToIds = useTypedSelector(
		(state) => state.stepper.form.districtsToIds
	)

	const initialValue = prevDistrictsToIds.filter((row) => row === id)[0]

	const [checked, setChecked] = React.useState(initialValue ? true : false)
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { checked } = event.target

		if (checked) {
			dispatch(setStepFormDistrictsToIds(id))
		} else {
			dispatch(deleteStepFormDistrictsToIds(id))
		}

		setChecked(checked)
	}

	return (
		<FormControlLabel
			control={
				<Checkbox
					checked={checked}
					onChange={handleChange}
					inputProps={{ "aria-label": "controlled" }}
				/>
			}
			label={label}
		/>
	)
}
