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
import PostServices from "./PostServices"

const PostStepperHead = React.lazy(() => import("./PostStepperHead"))
const PostSelectTransport = React.lazy(() => import("./PostSelectTransport"))
const PostSelectBrand = React.lazy(() => import("./PostSelectBrand"))
const PostSelectMark = React.lazy(() => import("./PostSelectMark"))
const PostSelectManufacture = React.lazy(
	() => import("./PostSelectManufacture")
)
const PostSelectCase = React.lazy(() => import("./PostSelectCase"))
const PostSelectGeneration = React.lazy(() => import("./PostSelectGeneration"))
const PostSelectModification = React.lazy(
	() => import("./PostSelectModification")
)
const PostSelectCondition = React.lazy(() => import("./PostSelectCondition"))
const PostSelectPrice = React.lazy(() => import("./PostSelectPrice"))
const PostSelectPicture = React.lazy(() => import("./PostSelectPicture"))
const PostSelectTags = React.lazy(() => import("./PostSelectTags"))
const PostCity = React.lazy(() => import("./PostCity"))

const PostSelectContacts = React.lazy(() => import("./PostSelectContacts"))
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
							<PostSelectMark />
						) : activeStep === 3 ? (
							<PostSelectManufacture />
						) : activeStep === 4 ? (
							<PostSelectCase />
						) : activeStep === 5 ? (
							<PostSelectGeneration />
						) : activeStep === 6 ? (
							<PostSelectModification />
						) : activeStep === 7 ? (
							<PostSelectCondition />
						) : activeStep === 8 ? (
							<PostSelectPrice />
						) : activeStep === 9 ? (
							<PostSelectPicture />
						) : activeStep === 10 ? (
							<PostSelectTags />
						) : activeStep === 11 ? (
							<PostCity />
						) : activeStep === 12 ? (
							<PostSelectContacts />
						) : activeStep === 13 ? (
							<PostPreview />
						) : activeStep === 14 ? (
							<PostVerification />
						) : activeStep === 15 ? (
							<PostServices />
						) : (
							<Box>AvtoLike</Box>
						)}
					</React.Suspense>
				</Box>
			</Box>
		</Stack>
	)
}

export default PostStepper
