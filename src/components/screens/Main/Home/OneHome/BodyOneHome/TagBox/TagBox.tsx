import { Button, Icon, Stack } from "@mui/material"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { FC, useState } from "react"
import BaseModal from "@components/ui/Modal/BaseModal"
import { useTypedSelector } from "@store/index"
import NeedAuthBox from "@components/modules/NeedAuthBox"
import { useLikeAnnouncementMutation } from "@store/rtk-api/announcement-rtk/announcementEndpoints"
import { useParams } from "react-router-dom"
import { TypeofEntityEnum } from "types/enums"
import { useDispatch } from "react-redux"
import { setAuth } from "@store/reducers/auth/auth.slice"

interface Props {
	isLike?: boolean
	likesCount?: number
}

const TagBox: FC<Props> = ({ likesCount, isLike }) => {
	const [like, setLike] = useState(Number(likesCount))
	const isAuth = useTypedSelector((state) => state.auth.isAuth)
	const [likeAnnouncement] = useLikeAnnouncementMutation()
	const dispatch = useDispatch()

	const { announceId } = useParams()

	const handleClick = () => {
		const token = localStorage.getItem("access_token")

		if (likesCount === undefined) {
			return null
		}

		if (token && isAuth && announceId) {
			return likeAnnouncement({
				announcementId: Number(announceId),
				kind: TypeofEntityEnum.ANNOUNCEMENT
			})
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
		<Stack direction="row">
			<Button
				startIcon={
					<Icon component={FavoriteBorderIcon} />
					// <Icon
					// 	component={iconClick === "0" ? FavoriteBorderIcon : FavoriteIcon}
					// />
				}
				onClick={handleClick}
				sx={{
					backgroundColor: "secondary.300",
					borderRadius: "12px",
					fontSize: "12px",
					height: "30px",
					fontWeight: 600
				}}
			>
				{likesCount ? likesCount : "0"}
			</Button>
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
		</Stack>
	)
}

export default TagBox
