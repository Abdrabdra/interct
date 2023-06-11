import { Icon, IconButton, Stack } from "@mui/material"
import { FC, useEffect, useState } from "react"

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"

import { useLikeAnnouncementMutation } from "@store/rtk-api/announcement-rtk/announcementEndpoints"
// import { TypeofEntityEnum } from "types/enums"
import BaseModal from "@components/ui/Modal/BaseModal"
import { useTypedSelector } from "@store/index"
import NeedAuthBox from "@components/modules/NeedAuthBox"
import { useDispatch } from "react-redux"
import { setAuth } from "@store/reducers/auth/auth.slice"

interface Props {
	profilelike: string
	id: number
}

const LikeButton: FC<Props> = ({ profilelike, id }) => {
	const isAuth = useTypedSelector((state) => state.auth.isAuth)
	const [iconClick, setIconClick] = useState(profilelike)
	const dispatch = useDispatch()

	useEffect(() => {
		setIconClick(profilelike)
	}, [profilelike])

	const [like] = useLikeAnnouncementMutation()

	const handleIconClick = () => {
		const token = localStorage.getItem("access_token")

		if (token && isAuth) {
			return like({ sessionId: id })
		}

		localStorage.removeItem("access_item")
		dispatch(setAuth(false))
		setOpen(true)
	}

	// forModal
	const [open, setOpen] = useState(false)
	const handleModalClose = () => {
		setOpen(false)
	}

	return (
		<>
			<IconButton
				onClick={handleIconClick}
				sx={{
					width: "32px",
					height: "32px",
					minWidth: "32px",
					borderRadius: "5px",
					color: "primary.main",
					backgroundColor: "secondary.300"
				}}
			>
				<Icon
					component={iconClick === "0" ? FavoriteBorderIcon : FavoriteIcon}
				/>
			</IconButton>
			<BaseModal open={open} handleModalClose={handleModalClose}>
				<Stack
					sx={{
						backgroundColor: "common.white",
						borderRadius: "15px",
						padding: "20px",
						height: "150px"
					}}
				>
					<NeedAuthBox />
				</Stack>
			</BaseModal>
		</>
	)
}

export default LikeButton
