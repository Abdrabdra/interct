import { Box, OutlinedInput, Stack, TextField, Typography } from "@mui/material"

import { useDispatch } from "react-redux"

import { RootState, useTypedSelector } from "@store/index"
import {
	incrementStep,
	setFormSelectedColor,
	setFormSelectedPrice
} from "@store/reducers/stepper/stepper.slice"

import * as Yup from "yup"
import { Form, Formik } from "formik"
import AbsoluteBox from "@components/modules/AbsoluteBox"
import SubmitButton from "@components/ui/Button/SubmitButton"
import { NumericFormat } from "react-number-format"

const Schema = Yup.object().shape({
	selectedPrice: Yup.number()
		.typeError("Введите числа")
		.positive("Цена не может иметь отрицательные числа")
		.integer("Введите целое число")
		.max(999999999, "Должно быть не больше 9-ти чисел")
		// .min(1, "Должно быть больше одного числа")
		.required("Цена обязательна"),
	selectedColor: Yup.string().required("Введите цвет")
})

const PostSelectPrice = () => {
	const dispatch = useDispatch()

	const selectedPrice = useTypedSelector(
		(state: RootState) => state.stepper.form.selectedPrice
	)
	const selectedColor = useTypedSelector(
		(state: RootState) => state.stepper.form.selectedColor
	)

	return (
		<Formik
			initialValues={{
				selectedPrice: selectedPrice,
				selectedColor: selectedColor
			}}
			onSubmit={(values) => {
				setTimeout(() => {
					dispatch(setFormSelectedPrice(values.selectedPrice))
					dispatch(setFormSelectedColor(values.selectedColor))
					dispatch(incrementStep())
				}, 250)
			}}
			validationSchema={Schema}
		>
			{({ values, errors, handleChange, setFieldValue }) => (
				<Form>
					<Stack
						spacing={1}
						sx={{
							backgroundColor: "common.white",
							borderRadius: "10px",
							padding: "14px 15px 14px 20px"
						}}
					>
						<Stack spacing={1}>
							<Typography>Цена</Typography>

							<NumericFormat
								value={values.selectedPrice}
								name={"selectedPrice"}
								type="text"
								onChange={handleChange}
								thousandSeparator=" "
								isAllowed={(values) => {
									const { value } = values
									return Number(value) <= 999999999
								}}
								customInput={TextField}
							/>
							{errors.selectedPrice && (
								<Typography color={"error"}>{errors.selectedPrice}</Typography>
							)}
						</Stack>

						<Stack spacing={1}>
							<Typography>Цвет</Typography>

							<OutlinedInput
								name={"selectedColor"}
								value={values.selectedColor}
								onChange={handleChange}
								placeholder="Цвет объявления"
								sx={{
									flex: 1,
									paddingLeft: "18px",
									backgroundColor: "common.white",
									borderRadius: "10px",
									input: {
										paddingLeft: "0"
									}
								}}
							/>
							{errors.selectedColor && (
								<Typography color={"error"}>{errors.selectedColor}</Typography>
							)}
						</Stack>
					</Stack>
					<Box>
						<AbsoluteBox>
							<SubmitButton type="submit" />
						</AbsoluteBox>
					</Box>
				</Form>
			)}
		</Formik>
	)
}

export default PostSelectPrice
