import { CircularProgress, Stack } from "@mui/material"

const SuspenseLoader = () => {
	return (
		<Stack
			justifyContent="center"
			alignItems="center"
			sx={{ height: "calc(100vh - 185px)" }}
		>
			<CircularProgress color="primary" />
		</Stack>
	)
}

export default SuspenseLoader
