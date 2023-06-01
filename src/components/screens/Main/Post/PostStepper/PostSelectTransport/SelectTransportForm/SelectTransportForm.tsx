import SubmitButton from "@components/ui/Button/SubmitButton"
import {
	Divider,
	FormControl,
	FormControlLabel,
	Radio,
	Box,
	RadioGroup
} from "@mui/material"
import { Form, Formik } from "formik"
import { FC } from "react"
import { useDispatch } from "react-redux"

import {
	incrementStep,
	setFormSelectedTransport
} from "@store/reducers/stepper/stepper.slice"
import { SelectFormProps } from "../SelectedForm.types"

import AbsoluteBox from "@components/modules/AbsoluteBox"
import { useTypedSelector } from "@store/index"

const name = "selectedTransport"

const SelectTransportForm: FC<SelectFormProps> = ({ expanded }) => {
	const dispatch = useDispatch()
	const stateSelectedTransport = useTypedSelector(
		(state) => state.stepper.form.selectedTransport
	)

	return (
		<Formik
			initialValues={{
				selectedTransport: stateSelectedTransport
					? stateSelectedTransport
					: "ANNOUNCEMENT"
			}}
			onSubmit={(values) => {
				setTimeout(() => {
					dispatch(setFormSelectedTransport(values.selectedTransport))
					dispatch(incrementStep())
				}, 250)
			}}
		>
			{({ values, setFieldValue, isValid }) => (
				<Form>
					<FormControl component="fieldset" sx={{ width: "100%" }}>
						<RadioGroup
							name={name}
							value={values.selectedTransport.toString()}
							onChange={(event) => {
								setFieldValue(name, event.currentTarget.value)
							}}
						>
							<FormControlLabel
								value={"ANNOUNCEMENT"}
								control={<Radio required />}
								label={"Автомобиль"}
								labelPlacement="start"
								sx={{ display: "flex", justifyContent: "space-between" }}
							/>
							<Divider sx={{ width: "250px", marginLeft: "16px" }} />
							<FormControlLabel
								value={"MOTOTECHNICS"}
								control={<Radio required />}
								label={"Мотоциклы"}
								labelPlacement="start"
								sx={{ display: "flex", justifyContent: "space-between" }}
							/>
							<Divider sx={{ width: "250px", marginLeft: "16px" }} />
							<FormControlLabel
								value={"BOAT"}
								control={<Radio required />}
								label={"Водный транспорт"}
								labelPlacement="start"
								sx={{ display: "flex", justifyContent: "space-between" }}
							/>
						</RadioGroup>
					</FormControl>

					<Box sx={{ display: expanded === "panel1" ? "initial" : "none" }}>
						<AbsoluteBox>
							<SubmitButton type="submit" />
						</AbsoluteBox>
					</Box>
				</Form>
			)}
		</Formik>
	)
}

export default SelectTransportForm
