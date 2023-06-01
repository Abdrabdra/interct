import { Box, CircularProgress } from "@mui/material"
import { useDispatch } from "react-redux"

import AbsoluteBox from "@components/modules/AbsoluteBox"
import SubmitButton from "@components/ui/Button/SubmitButton"
import OneHomePreview from "@components/screens/Main/Home/OneHome/OneHomePreview"

import { RootState, useTypedSelector } from "@store/index"
import {
	incrementStep,
	setStepperError
} from "@store/reducers/stepper/stepper.slice"
import { useCreateAnnouncementMutation } from "@store/rtk-api/announcement-rtk/announcementEndpoints"

import { WheelEnum } from "types/enums"
import { MainButton } from "@components/ui/Button"
import { useEffect } from "react"
import SuspenseLoader from "@components/modules/SuspenseLoader"

const PostPreview = () => {
	const dispatch = useDispatch()
	const [create, { isLoading, isError, isSuccess, error, reset }] =
		useCreateAnnouncementMutation()

	const stepper = useTypedSelector((state: RootState) => state.stepper.form)

	const data = {
		model: stepper.selectedMark?.title,
		marka: stepper.selectedBrand?.title,
		price: stepper.selectedPrice,
		description: stepper.selectedDescription,
		phone: stepper.selectedContactNumber,

		details: {
			city: stepper.selectedCity?.title,
			generation: stepper.selectedGeneration?.title,
			body: stepper.selectedCase?.title,
			volume: stepper.selectedEngine,
			mileage: stepper.selectedMileage,
			transmission: 1, // тут из за бэка не могу взять трансмишшн
			driveUnit: stepper.selectedGear,
			steeringWheel: stepper.steeringWheel,
			color: stepper.selectedColor,
			customsClearance: stepper.selectedCustomsClearance,
			state: stepper.selectedCondition
		}
	}

	const formData = new FormData()

	formData.append("bodyTypeId", String(stepper.selectedCase?.id))
	formData.append("cityId", String(stepper.selectedCity?.id))
	formData.append("customsClearance", String(stepper.selectedCustomsClearance))
	formData.append("driveUnit", String(stepper.selectedGear))
	formData.append("generationId", String(stepper.selectedGeneration?.id))
	formData.append("markaId", String(stepper.selectedBrand?.id))
	formData.append("mileage", String(stepper.selectedMileage).replace(/\s/g, ""))
	formData.append("modelId", String(stepper.selectedMark?.id))
	formData.append("price", String(stepper.selectedPrice).replace(/\s/g, ""))
	formData.append("state", String(stepper.selectedCondition))
	formData.append(
		"steeringWheel",
		String(stepper?.steeringWheel ? stepper.steeringWheel : WheelEnum.LEFT)
	)
	formData.append(
		"tags",
		String(stepper.selectedTags.map((row) => row.id).join())
	)
	formData.append("transmissionId", String(1))
	formData.append("volume", String(3.5))
	formData.append("year", String(stepper.selectedManufacture))

	formData.append("phone", String(stepper.selectedContactNumber))
	formData.append("description", String(stepper.selectedDescription))
	formData.append("color", String(stepper.selectedColor))

	for (let i = 0; i < stepper.selectedPicture.length; i++) {
		formData.append("file", stepper.selectedPicture[i])
	}

	const handleClick = () => {
		create(formData)
	}

	useEffect(() => {
		if (isError) {
			handleError()
			reset()
		}
	}, [isError])

	useEffect(() => {
		if (isSuccess) {
			dispatch(setStepperError(null))
			handleSuccess()
			reset()
		}
	}, [isSuccess])

	const handleError = () => {
		dispatch(setStepperError(error))
		dispatch(incrementStep())
	}
	const handleSuccess = () => {
		dispatch(incrementStep())
	}

	return (
		<Box>
			<OneHomePreview data={data} />

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
