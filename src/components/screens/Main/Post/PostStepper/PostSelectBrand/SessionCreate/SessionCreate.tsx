import { MainButton } from "@components/ui/Button"
import { StyledMainInput } from "@components/ui/Input"
import { Stack } from "@mui/material"
import { setStepForm } from "@store/reducers/stepper/stepper.slice"
import dayjs from "dayjs"
import { useFormik } from "formik"
import React from "react"
import { useDispatch } from "react-redux"
import { ISession } from "types/Session/ISession"
import SessionArrivalDate from "./SessionArrivalDate"

const SessionCreate = () => {
	const initialValues: ISession = {
		arrivalDate: undefined,
		arrivalTime: 2, // test
		cityFromId: undefined,
		cityToId: undefined,
		districtFromId: undefined,
		districtsToIds: undefined
	}
	const formik = useFormik({
		initialValues: initialValues,
		onSubmit: (values) => {}
	})

	const { handleSubmit, values, handleChange, setFieldValue } = formik

	return (
		<form onSubmit={handleSubmit}>
			<Stack>
				<SessionArrivalDate />
			</Stack>
		</form>
	)
}

export default SessionCreate
