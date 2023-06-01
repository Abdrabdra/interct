import { Container, Drawer } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import HomeRoundedIcon from "@mui/icons-material/HomeRounded"
import FavoriteIcon from "@mui/icons-material/Favorite"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded"
import PersonRoundedIcon from "@mui/icons-material/PersonRounded"

import "./MainDrawer.style.scss"

import NavigationDrawer from "./NavigationDrawer"
import OneHomeDrawer from "./OneHomeDrawer"
import useCheckPath from "../DrawerUtils/CheckPath"
import { useTypedSelector } from "@store/index"

const links = [
	{ id: 1, route: "home", icon: HomeRoundedIcon, text: "Главная" },
	{ id: 2, route: "like", icon: FavoriteIcon, text: "Лайки" },
	{ id: 3, route: "post", icon: AddCircleIcon, text: "Подача" },
	{ id: 4, route: "chat", icon: ChatBubbleRoundedIcon, text: "Сообщения" },
	{ id: 5, route: "profile", icon: PersonRoundedIcon, text: "Профиль" }
]

const MainDrawer = () => {
	const location = useLocation()
	const { isAuth } = useTypedSelector((state) => state.auth)

	const [path, setPath] = useState<String | null>(null)

	const matchedPath = useCheckPath()
	useEffect(() => {
		matchedPath != null ? setPath(matchedPath) : setPath("/app/home")
	}, [location])

	return (
		<>
			<Drawer
				anchor="bottom"
				variant="permanent"
				PaperProps={{
					sx: {
						backgroundColor:
							path === "/app/chat/one/:chatId" ? "common.white" : "transparent",
						border: "none",
						display: { lg: "none" }
					}
				}}
			>
				<Container>
					{path === "/app/home/one/:announceId" ? (
						// <OneHomeDrawer />
						<></>
					) : path === "/app/home" || path === "/app/home/search" ? (
						<NavigationDrawer links={links} />
					) : path === "/app/post" ? (
						isAuth ? null : (
							<NavigationDrawer links={links} />
						)
					) : (
						<></>
					)}
				</Container>
			</Drawer>
		</>
	)
}

export default MainDrawer
