import { Skeleton, Stack } from "@mui/material"

const CommentsTabSkeleton = () => {
	return (
		<Stack spacing={2}>
			{[1, 2, 3].map((row) => (
				<Stack
					key={row}
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
			))}
		</Stack>
	)
}

export default CommentsTabSkeleton
