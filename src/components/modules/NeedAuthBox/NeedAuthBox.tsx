import { useNavigate } from "react-router-dom"
import { Button, Stack, Typography } from "@mui/material"

const NeedAuthBox = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate("/auth")
	}

	return (
		<Stack
			justifyContent="center"
			alignItems="center"
			sx={{ height: "calc(100vh - 185px)" }}
		>
			<Stack spacing={1}>
				<Typography sx={{ fontWeight: 500, fontSize: "20px" }}>
					Нужна Авторизация
				</Typography>
				<Button onClick={handleClick} variant="contained">
					Войти
				</Button>
			</Stack>
		</Stack>
	)
}

export default NeedAuthBox
