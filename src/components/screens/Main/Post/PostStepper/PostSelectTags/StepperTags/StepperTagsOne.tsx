import { Checkbox, FormControlLabel, FormGroup } from "@mui/material"
import {
	deleteFromFormTag,
	setFormSelectedTags
} from "@store/reducers/stepper/stepper.slice"
import { FC, useState } from "react"
import { useDispatch } from "react-redux"
import { IDescriptionTag } from "types/Marka/Marka"

interface Props {
	data: IDescriptionTag
	initialChecked?: boolean
}

const StepperTagsOne: FC<Props> = ({ data, initialChecked }) => {
	const dispatch = useDispatch()
	const [checked, setChecked] = useState(
		initialChecked ? initialChecked : false
	)

	const handleChange = (e: any) => {
		const { checked } = e.target

		if (checked === true) {
			setChecked(checked)
			dispatch(setFormSelectedTags({ id: data.id, title: data.title }))
		} else {
			setChecked(checked)
			dispatch(deleteFromFormTag(data.id))
		}
	}

	return (
		<FormGroup>
			<FormControlLabel
				control={
					<Checkbox checked={checked} onChange={(e) => handleChange(e)} />
				}
				label={data.title}
			/>
		</FormGroup>
	)
}

export default StepperTagsOne
