import { useFormik } from "formik"
import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { CircularProgress, Stack, Typography } from "@mui/material"

import { ActionsEnum } from "@store/enum"
import { AppDispatch, RootState, useTypedSelector } from "@store/index"
import { login } from "@store/reducers/auth/auth.action"

import { MainButton } from "@components/ui/Button"
import { StyledMainInput } from "@components/ui/Input"
import { LoginSchema } from "@utils/schema/validation"
import { ILogin } from "types/ILogin"

const LoginForm = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()
	const { status, error } = useTypedSelector((state: RootState) => state.auth)

	const formik = useFormik({
		initialValues: {
			phone: "",
			password: ""
		},
		onSubmit: async (values) => {
			dispatch(login(values as ILogin))
		},
		validationSchema: LoginSchema
	})

	const { values, errors, handleChange, handleSubmit } = formik
	const { phone, password } = values
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (inputRef.current) inputRef.current.focus()
	}, [])

	const handleClick = () => {
		navigate(`/auth/registration`)
	}

	return (
		<form
			onSubmit={handleSubmit}
			style={{ display: "flex", justifyContent: "center" }}
		>
			<Stack spacing={3} sx={{ width: "500px" }}>
				<Stack spacing={2}>
					<Stack>
						<StyledMainInput
							label="Номер телефона"
							bgcolor="secondary.600"
							ref={inputRef}
							name="phone"
							value={phone}
							onChange={handleChange}
							placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _"
						/>
						{errors.phone && (
							<Typography color="error">{errors.phone}</Typography>
						)}
					</Stack>
					<Stack>
						<StyledMainInput
							label="Пароль"
							bgcolor="secondary.600"
							id="my-input"
							aria-describedby="my-helper-text"
							name="password"
							type="password"
							value={password}
							onChange={handleChange}
							placeholder="Введите пароль"
						/>
						{errors.password && (
							<Typography color="error">{errors.password}</Typography>
						)}
					</Stack>
				</Stack>

				<Stack spacing={1}>
					{error && <Typography color="error">{error}</Typography>}

					<MainButton
						// disabled={status === ActionsEnum.LOADING}
						// startIcon={
						// 	status === ActionsEnum.LOADING && (
						// 		<CircularProgress sx={{ color: "#FFF" }} />
						// 	)
						// }
						type="submit"
					>
						Войти
					</MainButton>

					<Stack>
						<Typography>У вас нет аккаунта? </Typography>
						<MainButton onClick={() => handleClick()}>
							Регистрируйтесь
						</MainButton>
					</Stack>
				</Stack>
			</Stack>
		</form>
	)
}

export default LoginForm
