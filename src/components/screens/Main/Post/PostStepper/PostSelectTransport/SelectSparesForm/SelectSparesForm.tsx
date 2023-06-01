import AbsoluteBox from "@components/modules/AbsoluteBox"
import SubmitButton from "@components/ui/Button/SubmitButton"
import {
	Divider,
	FormControl,
	FormControlLabel,
	Radio,
	Box,
	RadioGroup
} from "@mui/material"
import { useTypedSelector } from "@store/index"
import {
	incrementStep,
	setFormSelectedTransport
} from "@store/reducers/stepper/stepper.slice"
import { Form, Formik } from "formik"
import { FC, useState } from "react"
import { useDispatch } from "react-redux"
import { SelectFormProps } from "../SelectedForm.types"

const SelectSparesForm: FC<SelectFormProps> = ({ expanded }) => {
	const dispatch = useDispatch()
	const stateSelectedTransport = useTypedSelector(
		(state) => state.stepper.form.selectedTransport
	)

	const [disabled, setDisabled] = useState(true)

	const name = "selectedTransport"

	return (
		<Formik
			initialValues={{
				selectedTransport: stateSelectedTransport
					? stateSelectedTransport
					: "SPARE"
			}}
			onSubmit={(values) => {
				setTimeout(() => {
					dispatch(setFormSelectedTransport(values.selectedTransport))
					console.log(values.selectedTransport)
					dispatch(incrementStep())
				}, 250)
			}}
		>
			{({ values, setFieldValue }) => (
				<Form>
					<FormControl component="fieldset" sx={{ width: "100%" }}>
						<RadioGroup
							name={name}
							value={values.selectedTransport.toString()}
							onChange={(event) => {
								setFieldValue(name, event.currentTarget.value)
								setDisabled(false)
							}}
						>
							<FormControlLabel
								value={"SPARE"}
								control={<Radio required />}
								label={"Запчасти"}
								labelPlacement="start"
								sx={{ display: "flex", justifyContent: "space-between" }}
							/>
						</RadioGroup>
					</FormControl>
					<Box sx={{ display: expanded === "panel2" ? "initial" : "none" }}>
						<AbsoluteBox>
							<SubmitButton type="submit" disabled={disabled} />
						</AbsoluteBox>
					</Box>
				</Form>
			)}
		</Formik>
	)
}

export default SelectSparesForm
