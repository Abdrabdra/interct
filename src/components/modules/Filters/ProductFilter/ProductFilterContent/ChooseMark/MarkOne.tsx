import { Checkbox, FormControlLabel } from "@mui/material"
import { useTypedSelector } from "@store/index"
import React, { FC } from "react"

interface Props {
	id: number
	title: string
	marks: number[]
	handleSetMark: (id: number) => void
	handleRemoveMark: (id: number) => void
}

const MarkOne: FC<Props> = ({
	id,
	title,
	marks,
	handleSetMark,
	handleRemoveMark
}) => {
	const selectedMarks = marks
	const initialValue = selectedMarks.filter((row) => row === id)

	const [checked, setChecked] = React.useState(
		initialValue.length === 1 ? true : false
	)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
		const { checked } = e.target

		setChecked(checked)

		if (checked) {
			handleSetMark(id)
		}
		if (!checked) {
			handleRemoveMark(id)
		}
	}

	return (
		<FormControlLabel
			label={title}
			control={
				<Checkbox checked={checked} onChange={(e) => handleChange(e, id)} />
			}
		/>
	)
}

export default MarkOne
