import { Button, Stack, Typography } from "@mui/material"

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import { useDispatch } from "react-redux"

import { RootState, useTypedSelector } from "@store/index"
import {
	incrementStep,
	setFormSelectedManufacture
} from "@store/reducers/stepper/stepper.slice"
import { generateArrayOfYears } from "@utils/generateArrayOfYears"

const PostSelectManufacture = () => {
	const dispatch = useDispatch()
	const selectedManufacture = useTypedSelector(
		(state: RootState) => state.stepper.form.selectedManufacture
	)

	const handleClick = (value: number) => {
		setTimeout(() => {
			dispatch(setFormSelectedManufacture(value))
			dispatch(incrementStep())
		}, 250)
	}

	return (
		<Stack spacing={1.8}>
			<Stack spacing={1.25}>
				{generateArrayOfYears(1950).map((row, index) => (
					<Button
						key={index}
						onClick={() => handleClick(row)}
						fullWidth
						variant="contained"
						sx={{
							borderRadius: "10px",
							padding: "14px 15px 14px 20px",
							backgroundColor:
								selectedManufacture === row ? "primary.main" : "common.white"
						}}
					>
						<Stack
							direction="row"
							justifyContent="space-between"
							sx={{
								flex: "1"
							}}
						>
							<Typography
								sx={{
									color: "common.black",
									fontSize: "18px",
									fontWeight: 600
								}}
							>
								{row}
							</Typography>
							<KeyboardArrowRightIcon sx={{ color: "common.black" }} />
						</Stack>
					</Button>
				))}
			</Stack>
		</Stack>
	)
}

export default PostSelectManufacture
