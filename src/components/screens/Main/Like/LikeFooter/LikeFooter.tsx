import { Box, Container, Stack, Typography } from "@mui/material"
import { toMonthName } from "@utils/toMonthName"
import { FC } from "react"
import { IAnnouncement } from "types/Announcement/Announcement.type"
import { ISessionData } from "types/Session/ISession"
import LikeButtons from "./LikeButtons"

interface Props {
	data: ISessionData
}

const LikeFooter: FC<Props> = ({ data }) => {
	const date = new Date(data.arrivalDate)

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
