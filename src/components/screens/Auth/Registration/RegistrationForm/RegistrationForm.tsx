import { useFormik } from "formik"
import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
	Button,
	CircularProgress,
	Container,
	Stack,
	Typography
} from "@mui/material"

import { ActionsEnum } from "@store/enum"
import { AppDispatch, RootState, useTypedSelector } from "@store/index"
import { login, registration } from "@store/reducers/auth/auth.action"

import { MainButton } from "@components/ui/Button"
import { StyledMainInput, StyledNewInput } from "@components/ui/Input"
import { RegistrationSchema } from "@utils/schema/validation"
import { ILogin } from "types/ILogin"
import { IRegistration } from "types/IRegistration"

const RegistrationForm = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`/auth/login`)
	}

	const dispatch = useDispatch<AppDispatch>()
	const { status, error } = useTypedSelector((state) => state.auth)

	const formik = useFormik({
		initialValues: {
			regName: "",
			regPhone: "",
			regPassword: ""
		},
		onSubmit: async (values) => {
			try {
				await dispatch(
					registration({
						name: values.regName,
						phone: values.regPhone,
						password: values.regPassword
					} as IRegistration)
				)

				setTimeout(() => {
					navigate("/auth/login")
				}, 2000)
			} catch (e) {}
		},
		validationSchema: RegistrationSchema
	})

	const { values, errors, handleChange, handleSubmit } = formik
	const { regName, regPhone, regPassword } = values

	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (inputRef.current) inputRef.current.focus()
	}, [])

	console.log("error: ", error)

	return (
		<form
			onSubmit={handleSubmit}
			style={{ display: "flex", justifyContent: "center" }}
		>
			<Stack spacing={3} sx={{ width: "500px" }}>
				<Stack spacing={2}>
					<Stack>
						<StyledMainInput
							label="Имя пользователя"
							bgcolor="secondary.600"
							ref={inputRef}
							name="regName"
							value={regName}
							onChange={handleChange}
							placeholder="Имя пользователя"
						/>
						{errors.regName && (
							<Typography color="error">{errors.regName}</Typography>
						)}
					</Stack>
					<Stack>
						<StyledMainInput
							label="Номер телефона"
							bgcolor="secondary.600"
							name="regPhone"
							value={regPhone}
							onChange={handleChange}
							placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _"
						/>
						{errors.regPhone && (
							<Typography color="error">{errors.regPhone}</Typography>
						)}
					</Stack>
					<Stack>
						<StyledMainInput
							label="Пароль"
							bgcolor="secondary.600"
							id="my-input"
							aria-describedby="my-helper-text"
							name="regPassword"
							type="password"
							value={regPassword}
							onChange={handleChange}
							placeholder="Введите пароль"
						/>
						{errors.regPassword && (
							<Typography color="error">{errors.regPassword}</Typography>
						)}
					</Stack>
				</Stack>

				<Stack spacing={1}>
					{error && status !== ActionsEnum.SUCCESS && (
						<Typography color="error">{error}</Typography>
					)}

					{status === ActionsEnum.SUCCESS && (
						<Typography color="primary">Регистрация прошла успешно!</Typography>
					)}

					<MainButton
						// disabled={status === ActionsEnum.LOADING}
						// startIcon={
						// 	status === ActionsEnum.LOADING && (
						// 		<CircularProgress sx={{ color: "#FFF" }} />
						// 	)
						// }
						type="submit"
					>
						Регистрироваться
					</MainButton>

					<Stack>
						<Typography>У вас уже есть аккаунт? </Typography>
						<MainButton onClick={() => handleClick()}>Войти</MainButton>
					</Stack>
				</Stack>
			</Stack>
		</form>
	)
}

export default RegistrationForm
