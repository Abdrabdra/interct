import { Button, Stack } from "@mui/material"

const OneHomeDrawer = () => {
	return (
		<Stack
			direction="row"
			justifyContent={"space-between"}
			spacing={2.5}
			sx={{ marginBottom: "12px" }}
		>
			<Button
				variant="contained"
				sx={{
					flex: "1",
					height: "50px",
					color: "common.white",
					backgroundColor: "secondary.300",
					borderRadius: "10px"
				}}
			>
				Написать
			</Button>
			<Button
				variant="contained"
				sx={{
					flex: "1",
					height: "50px",
					color: "common.white",
					backgroundColor: "primary.main",
					borderRadius: "10px"
				}}
			>
				Позвонить
			</Button>
		</Stack>
	)
}

export default OneHomeDrawer
