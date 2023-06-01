import { Stack } from "@mui/material"

import { useTypedSelector } from "@store/index"

import PostVerificationResult from "./PostVerificationResult"

const PostVerification = () => {
	const error = useTypedSelector((state) => state.stepper.error)

	return (
		<Stack
			justifyContent={"center"}
			alignItems="center"
			sx={{ height: "calc(100vh - 250px)" }}
		>
			<PostVerificationResult error={error} />
		</Stack>
	)
}

export default PostVerification
