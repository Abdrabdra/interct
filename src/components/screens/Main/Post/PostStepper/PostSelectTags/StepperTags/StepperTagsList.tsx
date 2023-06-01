import { FC } from "react"
import { Stack } from "@mui/material"

import StepperTagsOne from "./StepperTagsOne"

import { IDescriptionTag } from "types/Marka/Marka"
import { useTypedSelector } from "@store/index"

interface Props {
	data: IDescriptionTag[]
}

const StepperTagsList: FC<Props> = ({ data }) => {
	const tags = useTypedSelector((state) => state.stepper.form.selectedTags)

	const withIdTags = tags.map((row) => row.id)

	return (
		<Stack spacing={1}>
			{data.map((row) => (
				<StepperTagsOne
					data={row}
					initialChecked={withIdTags.includes(row.id) ? true : false}
				/>
			))}
		</Stack>
	)
}

export default StepperTagsList
