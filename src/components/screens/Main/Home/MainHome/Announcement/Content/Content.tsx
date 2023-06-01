import { Box, Typography } from "@mui/material"

import ContentList from "./ContentList"

const Content = () => {
	return (
		<Box>
			<Typography variant="h4" my={1}>
				Объявления
			</Typography>
			<ContentList withoutPagination withoutParams />
		</Box>
	)
}

export default Content
