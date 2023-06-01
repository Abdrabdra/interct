// library
import React from "react"
import {
	Box,
	Container,
	Typography
} from "@mui/material"
import LoginHeadBox from "./LoginHeadBox"
import LoginForm from "./LoginForm"

const Login: React.FC = () => {
	return (
		<Box>
			<LoginHeadBox />

			<Container>
				<Typography
					align="center"
					sx={{
						marginTop: "35px",
						lineHeight: "29.11px",
						fontSize: "24px",
						marginBottom: "24px",
						fontWeight: 500
					}}
				>
					Добро Пожаловать!
				</Typography>

				<LoginForm />
			</Container>
		</Box>
	)
}

export default Login
