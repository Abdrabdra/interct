import { Box, Container, Stack } from "@mui/material"

import Announcement from "./Announcement"
import Banner from "./Banner"
import NavBox from "./NavBox/NavBox"

const MainHome: React.FC = () => {
	return (
		<Box>
			<Container>
				<Stack spacing={1}>
					<Banner />
					<NavBox />
					<Announcement />
				</Stack>
			</Container>
		</Box>
	)
}

export default MainHome
