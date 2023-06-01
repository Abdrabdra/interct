import { Box, Skeleton, Stack, Typography } from "@mui/material"

import StepperAccordion from "@components/modules/StepperAccordion"
import { useGetDescriptionsQuery } from "@store/rtk-api/marka-rtk/markaEndpoints"
import StepperTags from "./StepperTags"
import AbsoluteBox from "@components/modules/AbsoluteBox"
import SubmitButton from "@components/ui/Button/SubmitButton"
import { incrementStep } from "@store/reducers/stepper/stepper.slice"
import { useDispatch } from "react-redux"

const PostSelectTags = () => {
	const { data, isLoading, isSuccess } = useGetDescriptionsQuery("")

	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(incrementStep())
	}

	return (
		<Stack>
			{isLoading ? (
				<>
					<Skeleton animation="wave" />
					<Skeleton animation="wave" />
					<Skeleton animation="wave" />
				</>
			) : isSuccess ? (
				<Stack spacing={1}>
					{data.map((row) => (
						<StepperAccordion key={row.id} summary={row.title}>
							<StepperTags data={row} />
						</StepperAccordion>
					))}

					<Box>
						<AbsoluteBox>
							<SubmitButton onClick={handleClick} />
						</AbsoluteBox>
					</Box>
				</Stack>
			) : (
				<>Ошибка при загрузки</>
			)}
		</Stack>
	)
}

export default PostSelectTags
