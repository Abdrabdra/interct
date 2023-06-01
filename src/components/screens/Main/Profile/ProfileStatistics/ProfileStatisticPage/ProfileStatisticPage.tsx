import { Box, Container, Stack, Typography } from "@mui/material"

const ProfileStatisticPage = () => {
	return (
		<Container>
			<Stack spacing={3}>
				<Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
					Статистика
				</Typography>

				<Stack>
					<Box
						sx={{
							width: "120px",
							height: "120px",
							borderRadius: "24px",
							bgcolor: "secondary.300",
							mb: "20px"
						}}
					/>

					<Box
						sx={{
							width: "120px",
							height: "120px",
							borderRadius: "24px",
							bgcolor: "secondary.300",
							mb: "20px"
						}}
					/>
				</Stack>
			</Stack>
		</Container>
	)
}

export default ProfileStatisticPage
