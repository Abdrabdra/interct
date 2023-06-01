import { Box, Container, Stack, Typography } from "@mui/material"

import EditForm from "./EditForm"

const ProfileInfoEdit = () => {
	return (
		<Container>
			<Stack spacing={3}>
				<Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
					Личные данные
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

					<EditForm />
				</Stack>
			</Stack>
		</Container>
	)
}

export default ProfileInfoEdit
