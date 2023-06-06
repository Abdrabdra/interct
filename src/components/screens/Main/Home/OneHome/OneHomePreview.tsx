import { Box, Container, Stack } from "@mui/material"
import { useTypedSelector } from "@store/index"
import {
	useGetCityQuery,
	useGetDistrictQuery
} from "@store/rtk-api/announcement-rtk/announcementEndpoints"
import { useGetUserMeQuery } from "@store/rtk-api/user-rtk/userEndpoints"
import { FC } from "react"

import {
	Description,
	DoubleTab,
	ImageBox,
	TagBox,
	TitleBox
} from "./BodyOneHome"
import OptionBox from "./BodyOneHome/OptionBox"

const OneHomePreview: FC<any> = () => {
	const { data } = useGetUserMeQuery("")

	const { data: cities } = useGetCityQuery("")

	const form = useTypedSelector((state) => state.stepper.form)

	const cityFromName = cities?.filter((row) => row.id === form.cityFrom)
	const cityToName = cities?.filter((row) => row.id === form.cityTo)

	const { data: districtData } = useGetDistrictQuery(form.cityFrom)
	const previewDistrictFrom =
		districtData &&
		districtData.filter((row) => row.id === Number(form.districtFromId))

	const { data: districtToData } = useGetDistrictQuery(form.cityTo)
	const previewDistrictTo =
		districtToData &&
		form.districtsToIds.map(
			(to) =>
				districtToData.filter((row) => {
					if (to === row.id) {
						return row
					}
				})[0]
		)

	const details = cityFromName &&
		cityToName &&
		previewDistrictFrom &&
		previewDistrictTo && {
			cityFrom: { id: cityFromName[0].id, title: cityFromName[0].title },
			cityTo: { id: cityToName[0].id, title: cityToName[0].title },
			districtFrom: {
				id: Number(form.districtFromId),
				title: previewDistrictFrom[0]?.title
			},
			districtTo: previewDistrictTo,
			arrivalDate: form.arrivalDate,
			arrivalTime: form.arrivalTime
		}

	return (
		<Box>
			<Container>
				<Stack spacing={2}>
					<ImageBox forPreview />
					<TagBox />
					<TitleBox
						title={`${cityFromName && cityFromName[0]?.title}-${
							cityToName && cityToName[0]?.title
						}`}
						phone={data?.phone}
						price={data?.bus?.type?.cost}
					/>
					<DoubleTab forPreview commentsCount={99} details={details} />
					{/* <Description description={`${data.description}`} /> */}
					{/* <OptionBox data={} /> */}
				</Stack>
			</Container>
		</Box>
	)
}

export default OneHomePreview
