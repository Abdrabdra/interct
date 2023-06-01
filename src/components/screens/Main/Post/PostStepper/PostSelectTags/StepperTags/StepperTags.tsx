import { Stack } from "@mui/material"
import { FC } from "react"
import { IGetDescriptionResponse } from "types/Marka/MarkaResponse"
import StepperTagsList from "./StepperTagsList"

interface Props {
	data: IGetDescriptionResponse
}

const StepperTags: FC<Props> = ({ data }) => {
	return (
		<Stack>
			<StepperTagsList data={data.tags} />
		</Stack>
	)
}

export default StepperTags
