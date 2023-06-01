import { useEffect, useState } from "react"
import { AppBar, Box, Container, useMediaQuery } from "@mui/material"
import { Route, Routes, useLocation } from "react-router-dom"

import { useTypedSelector } from "@store/index"

import TopOneHomeDrawer from "./TopOneHomeDrawer"
import TopHomeDrawer from "./TopHomeDrawer"
import useCheckPath from "../DrawerUtils/CheckPath"
import TopPostDrawer from "./TopPostDrawer"
import TopMediumDrawer from "./TopMediumDrawer"
import TopLogoDrawer from "./TopLogoDrawer"
import TopGoBackDrawer from "./TopGoBackDrawer"

const TopDrawer = () => {
	const location = useLocation()
	const { isAuth } = useTypedSelector((state) => state.auth)

	const [path, setPath] = useState<String | null>(null)

	const matchedPath: string | null | undefined = useCheckPath()
	useEffect(() => {
		matchedPath != null ? setPath(matchedPath) : setPath("logo")
	}, [location])

	const isMedium = useMediaQuery("(min-width:1200px)")

	return path === "/app/chat/one/:chatId" ? null : (
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
					{isMedium ? (
						<TopMediumDrawer />
					) : path === "/app/home/one/:announceId" ? (
						<TopOneHomeDrawer path={path} />
					) : path === "/app/home" || path === "/app/home/search" ? (
						<TopHomeDrawer />
					) : path === "/app/post" ? (
						isAuth ? (
							<TopPostDrawer />
						) : (
							<TopLogoDrawer />
						)
					) : path === "back" ? (
						<TopGoBackDrawer />
					) : (
						<TopLogoDrawer />
					)}
				</Box>
			</Container>
		</AppBar>
	)
}

export default TopDrawer
