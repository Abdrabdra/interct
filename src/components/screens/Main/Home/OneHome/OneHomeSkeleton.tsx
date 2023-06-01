import { Skeleton, Stack } from "@mui/material"

const OneHomeSkeleton = () => {
	return (
		<Stack spacing={1}>
			<Skeleton
				animation={"wave"}
				variant={"rectangular"}
				width={"100%"}
				height={200}
				sx={{
					borderRadius: "20px"
				}}
			/>
			<Skeleton />
			<Stack>
				<Skeleton animation={"wave"} width="50%" sx={{ pt: 1 }} />
				<Skeleton animation={"wave"} width="35%" sx={{ pt: 1 }} />
			</Stack>
			<Skeleton animation={"wave"} height={287} />
			<Skeleton animation={"wave"} height={137} />
		</Stack>
	)
}

export default OneHomeSkeleton
