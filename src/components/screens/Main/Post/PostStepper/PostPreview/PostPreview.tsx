import { Box, CircularProgress } from "@mui/material"
import { useDispatch } from "react-redux"

import AbsoluteBox from "@components/modules/AbsoluteBox"
import SubmitButton from "@components/ui/Button/SubmitButton"
import OneHomePreview from "@components/screens/Main/Home/OneHome/OneHomePreview"

import { RootState, useTypedSelector } from "@store/index"
import { incrementStep } from "@store/reducers/stepper/stepper.slice"
import {
	useCreateAnnouncementMutation,
	useCreateSessionMutation
} from "@store/rtk-api/announcement-rtk/announcementEndpoints"

import { MainButton } from "@components/ui/Button"
import { useEffect } from "react"
import SuspenseLoader from "@components/modules/SuspenseLoader"

const PostPreview = () => {
	const dispatch = useDispatch()
	const [create, { isLoading, isError, isSuccess, error, reset }] =
		useCreateSessionMutation()

	const stepper = useTypedSelector((state: RootState) => state.stepper.form)

	const form = useTypedSelector((state) => state.stepper.form)

	const handleClick = () => {
		create({
			arrivalDate: form.arrivalDate,
			arrivalTime: form.arrivalTime,
			cityFromId: form.cityFrom,
			cityToId: form.cityTo,
			districtFromId: Number(form.districtFromId),
			districtsToIds: form.districtsToIds
		})
	}

	console.log("fd: ", form)

	useEffect(() => {
		if (isError) {
			handleError()
			reset()
		}
	}, [isError])

	useEffect(() => {
		if (isSuccess) {
			// dispatch(setStepperError(null))
			handleSuccess()
			reset()
		}
	}, [isSuccess])

	const handleError = () => {
		// dispatch(setStepperError(error))
		dispatch(incrementStep())
	}
	const handleSuccess = () => {
		dispatch(incrementStep())
	}

	return (
		<Box>
			<OneHomePreview data={""} />

			{isLoading && <Box>ЗАГРУЗКА...</Box>}
			{isSuccess && <Box>Успешно</Box>}

			<Box>
				<AbsoluteBox>
					<MainButton
						onClick={handleClick}
						disabled={isLoading}
						bgcolor="primary.main"
					>
						{isLoading && <CircularProgress sx={{ mr: "10px" }} />}
						Подтвердить
					</MainButton>
				</AbsoluteBox>
			</Box>
		</Box>
	)
}

export default PostPreview
