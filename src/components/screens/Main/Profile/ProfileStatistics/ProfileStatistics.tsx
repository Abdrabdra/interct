import { Link } from "react-router-dom"
import { Box, IconButton, Stack, Typography } from "@mui/material"

import QueryStatsIcon from "@mui/icons-material/QueryStats"

const ProfileStatistics = () => (
	<Link
		to="/app/profile/stats"
		style={{ color: "#000", textDecoration: "none", flex: "1" }}
	>
		<Stack
			p={2}
			spacing={1.8}
			sx={{
				bgcolor: "common.white",
				borderRadius: "20px",
				height: "170px"
			}}
		>
			<Box>
				<IconButton color="primary" sx={{ backgroundColor: "secondary.100" }}>
					<QueryStatsIcon sx={{}} />
				</IconButton>
			</Box>
			<Stack spacing={0.7}>
				<Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
					Статистика
				</Typography>
				<Typography
					sx={{ fontSize: "12px", fontWeight: 600, color: "secondary.900" }}
				>
					Статистика продаж, просмотров, кликов и т.д.
				</Typography>
			</Stack>
		</Stack>
	</Link>
)

export default ProfileStatistics
