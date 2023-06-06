import * as React from "react"
import dayjs, { Dayjs } from "dayjs"
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
// import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker"
import { StaticDatePicker, StaticDateTimePicker } from "@mui/x-date-pickers"
import { useDispatch } from "react-redux"
import { setStepForm } from "@store/reducers/stepper/stepper.slice"
import { useTypedSelector } from "@store/index"

const SessionArrivaDate = () => {
	const [value, setValue] = React.useState<Dayjs | null>(dayjs())

	const handleChange = (value: dayjs.Dayjs | null) => {
		setValue(value)
		console.log("time: ", value?.get("h"), " ", value?.get("m"))
	}

	const dispatch = useDispatch()
	const handleAccept = (value: dayjs.Dayjs | null) => {
		dispatch(
			setStepForm({
				arrivalDate: value?.format(),
				arrivalTime: Number(value?.get("h") + "." + value?.get("m"))
			})
		)
		setValue(value)
	}

	const prevArrivaDate = useTypedSelector(
		(state) => state.stepper.form.arrivalDate
	)

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"ru"}>
			{/* <DemoContainer components={["StaticDatePicker"]}>
				<DemoItem label="Дата прибытия">
					<StaticDatePicker
						value={value}
						onChange={handleChange}
						onAccept={handleAccept}
					/>
				</DemoItem>
			</DemoContainer> */}
			<StaticDateTimePicker
				value={value}
				onChange={handleChange}
				onAccept={handleAccept}
				ampm={false}
			/>
		</LocalizationProvider>
	)
}

export default SessionArrivaDate
