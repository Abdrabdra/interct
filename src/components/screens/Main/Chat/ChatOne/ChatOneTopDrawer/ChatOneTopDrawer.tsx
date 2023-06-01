import GoBackButton from "@components/ui/Button/GoBackButton"
import { AppBar, Box, Container, useMediaQuery } from "@mui/material"
import { Typography } from "@mui/material"
import { Avatar, Divider, Stack } from "@mui/material"
import React from "react"

type Props = {
	name: string
}

const ChatOneTopDrawer: React.FC<Props> = ({ name }) => {
	const isMedium = useMediaQuery("(min-width:1200px)")

	return (
		<AppBar
			position="fixed"
			color="primary"
			sx={{
				top: 0,
				bottom: "auto",
				justifyContent: "flex-end",
				paddingTop: isMedium ? "20px" : "12px",
				paddingBottom: isMedium ? "20px" : "12px",
				backgroundColor: "secondary.200",
				borderBottomLeftRadius: "20px",
				borderBottomRightRadius: "20px"
			}}
		>
			<Container>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: "10px"
					}}
				>
					<Stack
						direction="row"
						justifyContent={"flex-start"}
						alignItems={"center"}
						spacing={1.75}
						sx={{ width: "100%" }}
					>
						<GoBackButton />
						<Divider
							variant="middle"
							orientation="vertical"
							sx={{ width: "1px", height: "26px", backgroundColor: "grey.800" }}
						/>
						<Stack direction={"row"} spacing={2} alignItems="center">
							<Avatar
								sx={{ width: 32, height: 32, marginLeft: "8px" }}
							></Avatar>
							<Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
								{name}
							</Typography>
						</Stack>
					</Stack>
				</Box>
			</Container>
		</AppBar>
	)
}

export default ChatOneTopDrawer
