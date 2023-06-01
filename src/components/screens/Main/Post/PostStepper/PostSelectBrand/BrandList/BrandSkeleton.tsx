import { Skeleton, Stack } from "@mui/material"

const BrandSkeleton = () => {
	return (
		<Stack spacing={1.25}>
			{[1, 2, 3, 4, 5].map((row) => (
				<Skeleton key={row} animation="wave" height={60} />
			))}
		</Stack>
	)
}

export default BrandSkeleton
