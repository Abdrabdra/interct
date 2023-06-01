import { Stack, Typography } from "@mui/material"
import GoBackButton from "@components/ui/Button/GoBackButton"
import { useTypedSelector } from "@store/index"

const TopPostDrawer = () => {
	const currentStep = useTypedSelector((state) => state.stepper.step)
	const stepperError = useTypedSelector((state) => state.stepper.error)

	console.log(currentStep)
	console.log(stepperError)

	return (
		<Stack
			direction="row"
			alignItems={"center"}
			justifyContent={
				currentStep === 14 && stepperError === null ? "center" : "flex-start"
			}
			spacing={1.75}
			sx={{ width: "100%" }}
		>
			{currentStep === 14 && stepperError === null ? (
				<Typography
					textAlign={"center"}
					sx={{ fontWeight: 500, fontSize: "24px" }}
				>
					AVTO LIKE
				</Typography>
			) : (
				<GoBackButton forPost={true} />
			)}
		</Stack>
	)
}

export default TopPostDrawer
