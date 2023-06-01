import {
	Divider,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup
} from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"

import { setFormSelectedEngine } from "@store/reducers/stepper/stepper.slice"
import { SelectFormProps } from "../PostSelectModification.types"

import { ENGINE } from "./Engine.consts"
import { useTypedSelector } from "@store/index"

const name = "selectedEngine"

const SelectEngineForm = ({}) => {
	const dispatch = useDispatch()
	const selectedEngine = useTypedSelector(
		(state) => state.stepper.form.selectedEngine
	)

	const [value, setValue] = useState(selectedEngine)

	return (
		<FormControl component="fieldset" sx={{ width: "100%" }}>
			<RadioGroup
				name={name}
				value={value}
				onChange={(event) => {
					setValue(event.currentTarget.value)
					dispatch(setFormSelectedEngine(event.currentTarget.value))
				}}
			>
				<FormControlLabel
					value={ENGINE.PETROL}
					control={<Radio required />}
					label={ENGINE.PETROL}
					labelPlacement="start"
					sx={{ display: "flex", justifyContent: "space-between" }}
				/>
				<Divider sx={{ width: "250px", marginLeft: "16px" }} />
				<FormControlLabel
					value={ENGINE.DIESEL}
					control={<Radio required />}
					label={ENGINE.DIESEL}
					labelPlacement="start"
					sx={{ display: "flex", justifyContent: "space-between" }}
				/>
			</RadioGroup>
		</FormControl>
	)
}

export default SelectEngineForm
