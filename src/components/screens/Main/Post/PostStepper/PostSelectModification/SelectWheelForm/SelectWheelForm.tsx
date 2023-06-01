import {
	Divider,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup
} from "@mui/material"
import { FC, useState } from "react"
import { useDispatch } from "react-redux"

import { setFormSteeringWheel } from "@store/reducers/stepper/stepper.slice"
import { Wheel } from "./Wheel.consts"
import { WheelEnum } from "types/enums"
import { useTypedSelector } from "@store/index"

const SelectWheelForm = () => {
	const dispatch = useDispatch()
	const selectedWheel = useTypedSelector(
		(state) => state.stepper.form.steeringWheel
	)

	const [value, setValue] = useState(selectedWheel)

	return (
		<FormControl component="fieldset" sx={{ width: "100%" }}>
			<RadioGroup
				value={value}
				onChange={(event) => {
					setValue(event.currentTarget.value as WheelEnum)
					dispatch(setFormSteeringWheel(event.currentTarget.value))
				}}
			>
				<FormControlLabel
					value={WheelEnum.LEFT}
					control={<Radio required />}
					label={Wheel.LEFT}
					labelPlacement="start"
					sx={{ display: "flex", justifyContent: "space-between" }}
				/>
				<Divider sx={{ width: "250px", marginLeft: "16px" }} />
				<FormControlLabel
					value={WheelEnum.RIGHT}
					control={<Radio required />}
					label={Wheel.RIGHT}
					labelPlacement="start"
					sx={{ display: "flex", justifyContent: "space-between" }}
				/>
			</RadioGroup>
		</FormControl>
	)
}

export default SelectWheelForm
