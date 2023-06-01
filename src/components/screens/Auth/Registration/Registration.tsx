// library
import React, { useEffect, useRef } from "react"
import {
	Box,
	Button,
	CircularProgress,
	Container,
	Stack,
	Typography
} from "@mui/material"
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { registration } from "@store/reducers/auth/auth.action"
import { IRegistration } from "../../../../types/IRegistration"

import AuthBg from "@assets/images/Auth/auth_bg.png"

import { useTypedSelector } from "../../../../store"
import { StyledNewInput } from "../../../ui/Input"
import { ActionsEnum } from "../../../../store/enum"
import { LoginSchema } from "@utils/schema/validation"
import LoginHeadBox from "../Login/LoginHeadBox"
import RegistrationForm from "./RegistrationForm"

const Registration: React.FC = () => {
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
					Регистрация
				</Typography>

				<RegistrationForm />
			</Container>
		</Box>
	)
}

export default Registration
