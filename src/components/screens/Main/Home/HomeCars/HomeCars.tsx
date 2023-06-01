import { ProductFilterButton } from "@components/modules/Filters/ProductFilter"
import { Stack } from "@mui/material"
import { Box, Container, Typography } from "@mui/material"
import { useState } from "react"
import ContentList from "../MainHome/Announcement/Content/ContentList"

const HomeCars = () => {
	const [counts, setCounts] = useState(0)

	const getCounts = (value: number) => {
		setCounts(value)
	}

	return (
		<Box>
			<Container>
				<Stack spacing={2}>
					<Stack direction="row" justifyContent="space-between" alignItems={"center"}>
						<Typography>{counts} объявлений</Typography>
						<ProductFilterButton />
					</Stack>

					<ContentList getCounts={getCounts} />
				</Stack>
			</Container>
		</Box>
	)
}

export default HomeCars
