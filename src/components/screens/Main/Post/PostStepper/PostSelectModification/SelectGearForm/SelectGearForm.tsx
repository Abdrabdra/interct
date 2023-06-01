import {
	Divider,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup
} from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"

import { setFormSelectedGear } from "@store/reducers/stepper/stepper.slice"
import { Gear } from "./Gear.consts"
import { DriveIUnitEnum } from "types/enums"
import { useTypedSelector } from "@store/index"

const SelectGearForm = () => {
	const dispatch = useDispatch()
	const selectedGear = useTypedSelector(
		(state) => state.stepper.form.selectedGear
	)

	const [value, setValue] = useState(selectedGear)

	return (
		<FormControl component="fieldset" sx={{ width: "100%" }}>
			<RadioGroup
				value={value}
				onChange={(event) => {
					setValue(event.currentTarget.value as DriveIUnitEnum)
					dispatch(setFormSelectedGear(event.currentTarget.value))
				}}
			>
				<FormControlLabel
					value={DriveIUnitEnum.FRONTWHEEL}
					control={<Radio required />}
					label={Gear.FRONT}
					labelPlacement="start"
					sx={{ display: "flex", justifyContent: "space-between" }}
				/>
				<Divider sx={{ width: "250px", marginLeft: "16px" }} />
				<FormControlLabel
					value={DriveIUnitEnum.REAR}
					control={<Radio required />}
					label={Gear.REAR}
					labelPlacement="start"
					sx={{ display: "flex", justifyContent: "space-between" }}
				/>
				<Divider sx={{ width: "250px", marginLeft: "16px" }} />
				<FormControlLabel
					value={DriveIUnitEnum.FOURWHELL}
					control={<Radio required />}
					label={Gear.FOURWHELL}
					labelPlacement="start"
					sx={{ display: "flex", justifyContent: "space-between" }}
				/>
			</RadioGroup>
		</FormControl>
	)
}

export default SelectGearForm
