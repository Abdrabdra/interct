import { Box, Container, Stack, Typography } from "@mui/material"
import { toMonthName } from "@utils/toMonthName"
import { FC } from "react"
import { IAnnouncement } from "types/Announcement/Announcement.type"
import LikeButtons from "./LikeButtons"

interface Props {
	data: IAnnouncement
}

const LikeFooter: FC<Props> = ({ data }) => {
	const date = new Date(data.createdAt)

	return (
		<Box>
			<Container>
				<Stack justifyContent="space-between" sx={{ flex: "1" }}>
					<LikeButtons data={data} />
					<Typography sx={{ color: "grey.800", fontSize: "12px" }}>
						{date.getDate()} {toMonthName(date)} {date.getFullYear()}
					</Typography>
				</Stack>
			</Container>
		</Box>
	)
}

export default LikeFooter
