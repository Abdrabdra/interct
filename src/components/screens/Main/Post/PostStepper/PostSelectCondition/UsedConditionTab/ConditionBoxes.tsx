import { useState } from "react"
import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material"

import { useTypedSelector } from "@store/index"
import { useDispatch } from "react-redux"
import {
	setFormSelectedCondition,
	setFormSelectedCustomsClearance
} from "@store/reducers/stepper/stepper.slice"
import { StatementEnum } from "types/enums"

const ConditionBoxes = () => {
	const dispatch = useDispatch()
	const selectedCustomsClearance = useTypedSelector(
		(state) => state.stepper.form.selectedCustomsClearance
	)
	const selectedCondition = useTypedSelector(
		(state) => state.stepper.form.selectedCondition
	)

	const [customsClearance, setCustomsClearance] = useState(
		selectedCustomsClearance ? true : false
	)
	const [emergency, setEmergency] = useState(
		selectedCondition === StatementEnum.EMERGENCY ? true : false
	)

	const handleChange = (e: any) => {
		const { checked } = e.target

		setCustomsClearance(checked)
		dispatch(setFormSelectedCustomsClearance(checked))
	}

	const handleEmergency = (e: any) => {
		const { checked } = e.target

		setEmergency(checked)
		checked === true
			? dispatch(setFormSelectedCondition(StatementEnum.EMERGENCY))
			: dispatch(setFormSelectedCondition(StatementEnum.BOO))
	}

	return (
		<>
			<Box
				sx={{
					padding: "14px 15px 14px 20px",
					borderRadius: "10px",
					backgroundColor: "common.white"
				}}
			>
				<FormGroup>
					<FormControlLabel
						control={
							<Checkbox
								checked={customsClearance}
								onChange={(e) => handleChange(e)}
							/>
						}
						label={"Растоможен в Казахстане"}
					/>
				</FormGroup>
			</Box>

			<Box
				sx={{
					padding: "14px 15px 14px 20px",
					borderRadius: "10px",
					backgroundColor: "common.white"
				}}
			>
				<FormGroup>
					<FormControlLabel
						control={
							<Checkbox
								checked={emergency}
								onChange={(e) => handleEmergency(e)}
							/>
						}
						label={"Аварийная"}
					/>
				</FormGroup>
			</Box>

			<Box
				sx={{
					padding: "14px 15px 14px 20px",
					borderRadius: "10px",
					backgroundColor: "common.white"
				}}
			>
				<FormGroup>
					<FormControlLabel control={<Checkbox />} label={"На заказ"} />
				</FormGroup>
			</Box>
		</>
	)
}

export default ConditionBoxes
