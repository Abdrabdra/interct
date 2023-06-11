import { FC, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"

import { useTypedSelector } from "@store/index"
import { useGetSessionQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints"

import Main from "./Main/Main"
import ContentSkeleton from "./ContentSkeleton"
import InfoStats from "@components/modules/InfoStat/InfoStat"
import ContentListPagination from "./ContentListPagination"
// import { Status } from "types/enums"

interface Props {
	withoutParams?: boolean
	forMyAnnouncements?: boolean
	getCounts?: (value: number) => void
	withoutPagination?: boolean
}

const ContentList: FC<Props> = ({
	withoutParams,
	forMyAnnouncements,
	getCounts,
	withoutPagination
}) => {
	const filterValues = useTypedSelector((state) => state.filter.values)
	const queryWithFilterParams = { ...filterValues }

	const userId = useTypedSelector((state) => state.auth.userId)

	const getParams = () => {
		if (forMyAnnouncements) {
			return { status: forMyAnnouncements, profileId: userId }
		}
		if (withoutParams) {
			return {}
		}

		return {...queryWithFilterParams, marks: undefined, cityFromId: queryWithFilterParams.marks}
	}

	const { data, isLoading, isFetching, isSuccess } = useGetSessionQuery(
		getParams(),
		{
			refetchOnMountOrArgChange: true
		}
	)

	// useEffect(() => {
	// 	if (isSuccess) {
	// 		getCounts && getCounts(data.count)
	// 	}
	// }, [data])

	return (
		<Stack spacing={1.5}>
			{isLoading ? (
				<ContentSkeleton />
			) : isSuccess ? (
				data.count === 0 ? (
					<Typography>Нет Объявлений</Typography>
				) : (
					<>
						{data.data.map((row) => (
							<Box
								key={row.id}
								sx={{
									height: "146px",
									backgroundColor: "common.white",
									borderRadius: "10px"
								}}
							>
								<Main car={row} />
								{/* <InfoStats views={row.views} publishDate={row.createdAt} /> */}
							</Box>
						))}
						{withoutPagination ? null : (
							<ContentListPagination count={data.count} />
						)}
					</>
				)
			) : (
				"Ошибка при загрузки"
			)}
		</Stack>
	)
}

export default ContentList
