import { Link } from "react-router-dom"
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material"

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight"
import { FC } from "react"

const ProfileTickets = () => {
	return (
		<Link
			to="/app/profile/tickets"
			style={{ color: "#000", textDecoration: "none" }}
		>
			<Stack
				p={2.5}
				pt={2}
				spacing={3}
				sx={{ backgroundColor: "secondary.100", borderRadius: "20px" }}
			>
				<Stack
					direction={"row"}
					justifyContent="space-between"
					alignItems="center"
				>
					<Typography
						sx={{ fontSize: "18px", fontWeight: 500, color: "common.white" }}
					>
						Мои Билеты
					</Typography>
					<IconButton color="primary">
						<KeyboardArrowRightIcon />
					</IconButton>
				</Stack>
			</Stack>
		</Link>
	)
}

export default ProfileTickets
