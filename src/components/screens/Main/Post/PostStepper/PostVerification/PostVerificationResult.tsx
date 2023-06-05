import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Box, Stack, Typography } from "@mui/material"

import {
	incrementStep,
	resetStep,
	resetStepper
} from "@store/reducers/stepper/stepper.slice"

import { MainButton } from "@components/ui/Button"
import AbsoluteBox from "@components/modules/AbsoluteBox"
import { FC } from "react"

interface Props {
	error: {
		status: number
		data: any
	} | null
}

const PostVerificationResult: FC<Props> = ({ error }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleClick = () => {
		if (error) {
			dispatch(resetStepper())
			navigate("/app/home")
			dispatch(resetStep())
			return
		}

		return dispatch(incrementStep())
	}

	return (
		<Stack justifyContent="center" alignItems="center">
			<Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
				{error ? "Ошибка при отправке Объявлений" : "Объявление на проверке"}
			</Typography>
			<Typography sx={{ fontSize: "12px", fontWeight: 500, color: "grey.800" }}>
				{error ? `${error.data?.message}` : "Объявление на проверке"}
			</Typography>

			<Box>
				<AbsoluteBox>
					<MainButton onClick={handleClick}>Закончить</MainButton>
				</AbsoluteBox>
			</Box>
		</Stack>
	)
}

export default PostVerificationResult
