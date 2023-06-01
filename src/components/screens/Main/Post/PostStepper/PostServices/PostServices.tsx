import OneService from "@components/modules/OneService"
import { MainButton } from "@components/ui/Button"
import { Stack, Typography } from "@mui/material"
import {
	resetStep,
	setDefaultState
} from "@store/reducers/stepper/stepper.slice"
import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const PostServices = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleClick = () => {
		dispatch(setDefaultState())
		navigate("/app/home")
		dispatch(resetStep())
	}

	return (
		<Stack spacing={2}>
			<Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
				Продвигать
			</Typography>

			<OneService
				title={"Турбо"}
				services={["Рекламу на 7 дней", "Много лайков", "Продвижение"]}
				price={549}
				handleClick={handleClick}
			/>
			<OneService
				title={"VIP"}
				services={["Рекламу на 7 дней", "Много лайков", "Продвижение"]}
				price={1990}
				handleClick={handleClick}
			/>
		</Stack>
	)
}

export default PostServices
