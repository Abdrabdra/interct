import { IconButton, Stack, Typography } from "@mui/material"

import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined"
import ShareIcon from "@mui/icons-material/Share"
import { FC } from "react"
import { IAnnouncement } from "types/Announcement/Announcement.type"
import {
	useGetOneAnnouncementQuery,
	useLikeAnnouncementMutation
} from "@store/rtk-api/announcement-rtk/announcementEndpoints"
import { TypeofEntityEnum } from "types/enums"

interface Props {
	data: IAnnouncement
}

const LikeButtons: FC<Props> = ({ data }) => {
	const handleCopy = () => {
		navigator.clipboard.writeText(`http://avtolike.kz/app/home/one/${data.id}`)
	}

	const { data: oneData } = useGetOneAnnouncementQuery(String(data.id))

	const [like] = useLikeAnnouncementMutation()

	const handleLike = () => {
		like({ kind: TypeofEntityEnum.ANNOUNCEMENT, announcementId: data.id })
	}

	return (
		<Stack direction="row" justifyContent="space-between">
			<Stack direction="row" spacing={1.4}>
				<Stack direction="row" spacing={1} alignItems="center">
					<IconButton onClick={handleLike} color="primary" sx={{ padding: 0 }}>
						{data.like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
					</IconButton>
					<Typography color="primary">{oneData?.count.likesCount}</Typography>
				</Stack>
				<Stack direction="row" spacing={1} alignItems="center">
					<IconButton color="primary" sx={{ padding: 0 }}>
						<QuestionAnswerOutlinedIcon />
					</IconButton>
					<Typography color="primary">
						{oneData?.count.commentsCount}
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
