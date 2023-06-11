import {
	Avatar,
	Box,
	Button,
	Divider,
	Icon,
	Stack,
	Typography
} from "@mui/material"
import ShareIcon from "@mui/icons-material/Share"

import GoBackButton from "../../../Button/GoBackButton"
import {
	matchPath,
	useLocation,
	useNavigate,
	useParams
} from "react-router-dom"
import { useEffect, useState } from "react"
import useCheckPath from "../../DrawerUtils/CheckPath"

const TopOneHomeDrawer = ({ path }: any) => {
	const location = useLocation()

	const pathname = matchPath(
		{ path: "/app/home/one/:announceId" },
		location.pathname
	)

	const handleCopy = () => {
		navigator.clipboard.writeText(
			`https://7kzu.kz/app/home/one/${pathname?.params?.announceId}`
		)
	}

	return (
		<Stack
			direction="row"
			justifyContent={"space-between"}
			alignItems={"center"}
			spacing={1.75}
			sx={{ width: "100%" }}
		>
			<GoBackButton forPost={false} />
			{path === "/app/home/one/:announceId" ? (
				<Button
					onClick={handleCopy}
					sx={{
						minWidth: "50px",
						width: "50px",
						height: "50px",
						borderRadius: "12px"
					}}
				>
					<Icon component={ShareIcon} />
				</Button>
			) : (
				<Box />
			)}
		</Stack>
	)
}

export default TopOneHomeDrawer
