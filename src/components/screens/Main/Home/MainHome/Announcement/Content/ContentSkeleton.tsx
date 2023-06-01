import { Box, Skeleton, Stack } from "@mui/material"

const ContentSkeleton = () => {
	return (
		<Stack spacing={1.5}>
			{[1, 2, 3].map((row) => (
				<Stack
					key={row}
					spacing={0.5}
					sx={{
						height: "146px",
						backgroundColor: "common.white",
						borderRadius: "10px",
						padding: "4px 8px 8px 4px"
					}}
				>
					<Stack direction="row" spacing={1}>
						<Skeleton
							width={120}
							height={110}
							variant="rectangular"
							sx={{
								borderRadius: "10px"
							}}
						/>
						<Stack sx={{ flex: 1 }}>
							<Skeleton animation="wave" width="50%" height={25} />
							<Skeleton
								animation="wave"
								width="35%"
								height={25}
								sx={{ mb: "8px" }}
							/>
							<Skeleton animation="wave" width="25%" sx={{ mb: "8px" }} />
							<Stack direction="row" spacing={1}>
								<Skeleton animation="wave" sx={{ flex: 1 }} />
								<Skeleton animation="wave" sx={{ flex: 1 }} />
								<Skeleton animation="wave" sx={{ flex: 1 }} />
								<Skeleton animation="wave" sx={{ flex: 1 }} />
								<Skeleton animation="wave" sx={{ flex: 1 }} />
							</Stack>
						</Stack>
					</Stack>
					<Stack direction="row" spacing={1}>
						<Skeleton animation="wave" width={65} />
						<Skeleton animation="wave" width={65} />
					</Stack>
				</Stack>
			))}
		</Stack>
	)
}

export default ContentSkeleton
