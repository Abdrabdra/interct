import { Skeleton, Stack } from "@mui/material"

const CommentsTabOneSkeleton = () => {
	return (
		<Stack
			sx={{
				height: "122px",
				padding: "16px",
				borderRadius: "12px",
				backgroundColor: "common.white"
			}}
		>
			<Skeleton width="50%" />
			<Skeleton width="30%" />
		</Stack>
	)
}

export default CommentsTabOneSkeleton
