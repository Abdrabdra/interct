import { Stack } from "@mui/material"

import LikeHeader from "./LikeHeader"
import LikeImages from "./LikeImages"
import LikeFooter from "./LikeFooter"
import { useGetAnnouncementsQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints"
import ViewHeightBox from "@components/modules/ViewHeightBox"

const Like = () => {
	const queryParams = {
		favorites: true
	}

	const { data, isSuccess } = useGetAnnouncementsQuery(queryParams)

	return (
		<Stack spacing={3}>
			{isSuccess && data.count > 0 ? (
				data?.data.map((row) => (
					<Stack spacing={1} key={row.id}>
						<LikeHeader data={row} />
						<LikeImages data={row.avatar} />
						<LikeFooter data={row} />
					</Stack>
				))
			) : (
				<ViewHeightBox text={"Нет избранных"} />
			)}
		</Stack>
	)
}

export default Like
