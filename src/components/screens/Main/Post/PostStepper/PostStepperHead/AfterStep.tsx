import { Box } from "@mui/material"
import { FC } from "react"
import { STEP_TITLES } from "../PostStepper.constants"

interface Props {
	step: number
}

const AfterStep: FC<Props> = ({ step }) => {
	return (
		<>
			{[...Array(STEP_TITLES.length - 1 - step)].map((row, index) => (
				<Box
					key={index}
					sx={{
						width: "17px",
						height: "3px",
						borderRadius: "1px",
						backgroundColor: "grey.500"
					}}
				/>
			))}
		</>
	)
}

export default AfterStep
