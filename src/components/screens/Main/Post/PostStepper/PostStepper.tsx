import * as React from "react"
import { useDispatch } from "react-redux"
import { Box, Stepper, Stack, CircularProgress } from "@mui/material"

import { RootState, useTypedSelector } from "@store/index"
import {
	// decrementStep,
	// incrementStep,
	// resetStep,
	setStepTitle
} from "@store/reducers/stepper/stepper.slice"

import { STEP_TITLES } from "./PostStepper.constants"
import PostSelectCityFrom from "./PostSelectCityFrom"
import PostSelectCityTo from "./PostSelectCityTo"

const PostStepperHead = React.lazy(() => import("./PostStepperHead"))
const PostSelectTransport = React.lazy(() => import("./PostSelectTransport"))
const PostSelectBrand = React.lazy(() => import("./PostSelectBrand"))

const PostPreview = React.lazy(() => import("./PostPreview"))
const PostVerification = React.lazy(() => import("./PostVerification"))

const PostStepper = () => {
	const dispatch = useDispatch()

	const isAuth = useTypedSelector((state) => state.auth.isAuth)
	const activeStep = useTypedSelector((state: RootState) => state.stepper.step)

	// const isStepOptional = (step: number) => {
	//   return step === 20;
	// };
	// const handleNavigateMainPage = () => {
	//   navigate("/app/home");
	// };
	// const handleNext = () => {
	//   dispatch(incrementStep());
	// };
	// const handleBack = () => {
	//   dispatch(decrementStep());
	// };
	// const handleReset = () => {
	//   dispatch(resetStep());
	// };

	React.useEffect(() => {
		dispatch(setStepTitle(STEP_TITLES[activeStep]))
	}, [activeStep])

	return (
		<Stack>
			<Box sx={{ width: "100%" }}>
				<Stepper
					activeStep={activeStep}
					sx={{ display: "flex", flexDirection: "column" }}
				>
					<PostStepperHead />
				</Stepper>
				<Box sx={{ paddingTop: "10px" }}>
					<React.Suspense
						fallback={
							<Stack
								justifyContent={"center"}
								alignItems="center"
								sx={{ height: "50vh" }}
							>
								<CircularProgress color="primary" />
							</Stack>
						}
					>
						{activeStep === 0 ? (
							<PostSelectTransport />
						) : activeStep === 1 ? (
							<PostSelectBrand />
						) : activeStep === 2 ? (
							<PostSelectCityFrom />
						) : activeStep === 3 ? (
							<PostSelectCityTo />
						) : activeStep === 4 ? (
							<PostPreview />
						) : activeStep === 5 ? (
							<PostVerification />
						) : (
							<Box>InterCT</Box>
						)}
					</React.Suspense>
				</Box>
			</Box>
		</Stack>
	)
}

export default PostStepper
