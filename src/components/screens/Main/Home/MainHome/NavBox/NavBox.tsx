import { Box, Button, Icon, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"

import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"
import HandymanIcon from "@mui/icons-material/Handyman"
import AddIcon from "@mui/icons-material/Add"

const boxes = [
	{ title: "Объявления", icon: DirectionsCarIcon, route: "home/cars" },
	{ title: "Главная", icon: HandymanIcon, route: "home" },
	{ title: "Подать", icon: AddIcon, route: "post" }
]

const NavBox = () => {
	return (
		<Stack direction="row" justifyContent="space-evenly" spacing={1}>
			{boxes.map((box, index) => (
				<Box
					key={index}
					sx={{
						padding: "12px",
						backgroundColor: "common.white",
						borderRadius: "10px",
						flex: "0 1 110px"
					}}
				>
					<Link to={`/app/${box.route}`} style={{ textDecoration: "none" }}>
						<Button
							variant="contained"
							sx={{
								width: "100%",
								height: "50px",
								backgroundColor: "secondary.300",
								borderRadius: "5px",
								marginBottom: "12px"
							}}
						>
							<Icon component={box.icon} />
						</Button>
						<Typography
							align="center"
							sx={{
								fontSize: "10px",
								fontWeight: 500,
								letterSpacing: "1px",
								textDecoration: "none",
								color: "common.black"
							}}
						>
							{box.title}
						</Typography>
					</Link>
				</Box>
			))}
		</Stack>
	)
}

export default NavBox
