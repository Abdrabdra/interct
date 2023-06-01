import { Formik } from "formik"
import { Stack, TextField, Typography } from "@mui/material"
import * as Yup from "yup"
import { useState } from "react"

import { useTypedSelector } from "@store/index"
import { setFormSelectedMileage } from "@store/reducers/stepper/stepper.slice"
import { useDispatch } from "react-redux"
import { NumericFormat } from "react-number-format"

const Schema = Yup.object().shape({
	selectedMileage: Yup.number()
		.typeError("Введите числа")
		.positive("Пробег не может иметь отрицательные числа")
		.integer("Введите целое число")
		.max(999999, "Должно быть меньше 10-ти чисел")
		// .min(1, "Должно быть больше одного числа")
		.required("Пробег обязателен")
})

const NewConditionTab = () => {
	const dispatch = useDispatch()
	const selectedMileage = useTypedSelector(
		(state) => state.stepper.form.selectedMileage
	)

	const [mileage, setMileage] = useState<string | number | undefined>(
		selectedMileage
	)
	const handleMileageChange = (e: any) => {
		const { value } = e.target

		setMileage(value)
		dispatch(setFormSelectedMileage(String(value).replace(/\s/g, "")))
	}

	console.log(selectedMileage)

	return (
		<Stack spacing={1.25}>
			<Formik
				initialValues={{ mileage: 0 }}
				onSubmit={(values) => {}}
				validationSchema={Schema}
			>
				{(props) => (
					<Stack
						spacing={1}
						sx={{
							backgroundColor: "common.white",
							borderRadius: "10px",
							padding: "14px 15px 14px 20px"
						}}
					>
						<Typography>Пробег (км)</Typography>

						<NumericFormat
							value={mileage}
							onChange={(e) => handleMileageChange(e)}
							thousandSeparator=" "
							isAllowed={(values) => {
								const { value } = values
								return Number(value) <= 999999
							}}
							customInput={TextField}
						/>
					</Stack>
				)}
			</Formik>
		</Stack>
	)
}

export default NewConditionTab
