import { Stack, Container, Typography } from "@mui/material"

import ContentList from "@components/screens/Main/Home/MainHome/Announcement/Content/ContentList"

const SettingsArchive = () => {
	return (
		<Container>
			<Stack spacing={3}>
				<Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
					Архив лайков
				</Typography>

				<ContentList />
			</Stack>
		</Container>
	)
}

export default SettingsArchive
