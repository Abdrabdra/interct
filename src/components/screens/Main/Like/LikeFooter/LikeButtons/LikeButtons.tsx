import { IconButton, Stack, Typography } from "@mui/material"

import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined"
import ShareIcon from "@mui/icons-material/Share"
import { FC } from "react"
import { IAnnouncement } from "types/Announcement/Announcement.type"
import {
	useGetOneAnnouncementQuery,
	useLazyGetOneSessionQuery,
	useLikeAnnouncementMutation
} from "@store/rtk-api/announcement-rtk/announcementEndpoints"
import { ISessionData } from "types/Session/ISession"
import { useDispatch } from "react-redux"
import announcementApi from "@store/rtk-api/announcement-rtk/announcementApi"
// import { TypeofEntityEnum } from "types/enums"

interface Props {
	data: ISessionData
}

const LikeButtons: FC<Props> = ({ data }) => {
	const handleCopy = () => {
		navigator.clipboard.writeText(`https://7kzu.kz/app/home/one/${data.id}`)
	}

	// const { data: oneData } = useGetOneAnnouncementQuery(String(data.id))

	const [like] = useLikeAnnouncementMutation()
	const [get] = useLazyGetOneSessionQuery()

	const dispatch = useDispatch()

	const handleLike = async () => {
		await like({ sessionId: data.id })
		dispatch(announcementApi.util.invalidateTags(["session"]))
	}

	return (
		<Stack direction="row" justifyContent="space-between">
			<Stack direction="row" spacing={1.4}>
				<Stack direction="row" spacing={1} alignItems="center">
					<IconButton onClick={handleLike} color="primary" sx={{ padding: 0 }}>
						{data.likes && data?.likes[0]?.id ? <FavoriteIcon /> : <FavoriteBorderIcon />}
					</IconButton>
					{/* <Typography color="primary">{oneData?.count.likesCount}</Typography> */}
				</Stack>
				<Stack direction="row" spacing={1} alignItems="center">
					<IconButton color="primary" sx={{ padding: 0 }}>
						<QuestionAnswerOutlinedIcon />
					</IconButton>
					<Typography color="primary">
						{/* {oneData?.count.commentsCount} */}
					</Typography>
				</Stack>
			</Stack>

			<IconButton color="primary" onClick={handleCopy}>
				<ShareIcon />
			</IconButton>
		</Stack>
	)
}

export default LikeButtons
