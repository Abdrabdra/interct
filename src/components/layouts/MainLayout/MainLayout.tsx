import { Box, Stack, useMediaQuery } from "@mui/material"
import { Outlet } from "react-router-dom"
import { MainDrawer } from "../../ui/Drawer"
import TopDrawer from "../../ui/Drawer/TopDrawer"

const MainLayout = () => {
	const isMedium = useMediaQuery("(min-width:900px)")

	return (
		<>
			<TopDrawer />
			<Box
				sx={{
					minHeight: "100%",
					paddingTop: isMedium ? "125px" : "100px",
					paddingBottom: "85px"
				}}
			>
				<Outlet />
			</Box>
			<MainDrawer />
		</>
	)
}

export default MainLayout
