import { FC } from "react"
import { useDispatch } from "react-redux"
import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded"
import {
	decrementStep,
	resetStepper
} from "@store/reducers/stepper/stepper.slice"
import { RootState, useTypedSelector } from "@store/index"

const StartIcon = () => {
	return (
		<Box
			sx={{
				backgroundColor: "common.white",
				width: "32px",
				height: "32px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				borderRadius: "16px"
			}}
		>
			<ArrowBackIosNewRoundedIcon
				sx={{ color: "primary.main", fontSize: "18px" }}
			/>
		</Box>
	)
}

interface GoBackButtonProps {
	forPost?: boolean
}

const GoBackButton: FC<GoBackButtonProps> = ({ forPost }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(-1)
	}

	const currentStep = useTypedSelector((state: RootState) => state.stepper.step)
	const currentStepTitle = useTypedSelector(
		(state: RootState) => state.stepper.stepTitle
	)

	const handlePostClick = () => {
		if (currentStep === 0) {
			handleClick()
			dispatch(resetStepper())
		} else {
			dispatch(decrementStep())
		}
	}

	return (
		<Button
			onClick={forPost ? handlePostClick : handleClick}
			startIcon={<StartIcon />}
			sx={{ color: "common.white", fontWeight: 600, fontSize: "16px" }}
		>
			{forPost ? `${currentStepTitle}` : "Назад"}
		</Button>
	)
}

export default GoBackButton
