import { Box, OutlinedInput, Stack, Typography } from "@mui/material"

import { useDispatch } from "react-redux"

import { RootState, useTypedSelector } from "@store/index"
import {
	incrementStep,
	setFormSelectedContactNumber,
	setFormSelectedDescription
} from "@store/reducers/stepper/stepper.slice"

import { Form, Formik } from "formik"
import AbsoluteBox from "@components/modules/AbsoluteBox"
import SubmitButton from "@components/ui/Button/SubmitButton"
import * as Yup from "yup"

const phoneRegExp =
	/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
const Schema = Yup.object().shape({
	selectedDescription: Yup.string().typeError("Введите буквы"),

	selectedContactNumber: Yup.string()
		.matches(phoneRegExp, "Номер не валидный")
		.required("Номер обязательно")
})

const PostSelectContacts = () => {
	const dispatch = useDispatch()

	const selectedDescription = useTypedSelector(
		(state: RootState) => state.stepper.form.selectedDescription
	)
	const selectedContactNumber = useTypedSelector(
		(state: RootState) => state.stepper.form.selectedContactNumber
	)

	return (
		<Formik
			initialValues={{
				selectedDescription: selectedDescription,
				selectedContactNumber: selectedContactNumber
			}}
			onSubmit={(values) => {
				setTimeout(() => {
					dispatch(setFormSelectedDescription(values.selectedDescription))
					dispatch(setFormSelectedContactNumber(values.selectedContactNumber))
					dispatch(incrementStep())
				}, 250)
			}}
			validationSchema={Schema}
		>
			{({ values, errors, handleChange }) => (
				<Form>
					<Stack spacing={1}>
						<Stack
							spacing={1}
							sx={{
								backgroundColor: "common.white",
								borderRadius: "10px",
								padding: "14px 15px 14px 20px"
							}}
						>
							<Typography>Описание</Typography>
							<OutlinedInput
								name={"selectedDescription"}
								value={values.selectedDescription}
								onChange={handleChange}
								placeholder="Описание"
								multiline
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
							{/* {errors.selectedDescription && (
								<Typography sx={{ color: "red" }}>
									{errors.selectedDescription}
								</Typography>
							)} */}
						</Stack>
						<Stack
							spacing={1}
							sx={{
								backgroundColor: "common.white",
								borderRadius: "10px",
								padding: "14px 15px 14px 20px"
							}}
						>
							<Typography>Телефон</Typography>
							<OutlinedInput
								name={"selectedContactNumber"}
								value={values.selectedContactNumber}
								onChange={handleChange}
								placeholder="Номер Телефона"
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
							{errors.selectedContactNumber && (
								<Typography sx={{ color: "red" }}>
									{errors.selectedContactNumber}
								</Typography>
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

export default PostSelectContacts
