import { MainButton } from "@components/ui/Button"
import { Box, Container, Stack } from "@mui/material"
import {
	useGetOneAnnouncementQuery,
	useGetOneSessionQuery
} from "@store/rtk-api/announcement-rtk/announcementEndpoints"
import { useParams } from "react-router-dom"

import {
	Description,
	DoubleTab,
	ImageBox,
	TagBox,
	TitleBox
} from "./BodyOneHome"
import ButtonsBox from "./BodyOneHome/ButtonsBox"
import { IDetail } from "./BodyOneHome/DoubleTab/DoubleTab"
import MapBox from "./BodyOneHome/MapBox"
import OptionBox from "./BodyOneHome/OptionBox"
import Order from "./BodyOneHome/Order"
import SimilarBox from "./BodyOneHome/SimilarBox"
import OneHomeSkeleton from "./OneHomeSkeleton"

const OneHome = () => {
	const { announceId } = useParams()

	const { data, isLoading } = useGetOneSessionQuery(
		announceId ? announceId : ""
	)

	const details: IDetail | undefined = data && {
		arrivalDate: data.arrivalDate,
		arrivalTime: data.arrivalTime,
		cityFrom: data.cityFrom,
		cityTo: data.cityTo,
		districtFrom: data.districtFrom,
		districtTo: data.districtsTo
	}

	return (
		<Box>
			<Container>
				{isLoading ? (
					<OneHomeSkeleton />
				) : data ? (
					<Stack spacing={2}>
						<ImageBox images={data.bus.image} />
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center"
						>
							<TitleBox
								title={`${data.cityFrom.title} ${data.cityTo.title}`}
								price={data.bus.type.cost}
							/>
							<Order data={data} places={data.places} bus={data.bus} />
							{/* <TagBox
								isLike={data?.isLike}
								likesCount={data.count.likesCount}
							/> */}
						</Stack>
						<DoubleTab commentsCount={0} details={details} />
						{/* <Description description={data.a.description} /> */}
						{/* <OptionBox data={data.a.tags} /> */}
						{/* <SimilarBox markaId={data.a.marka.id} modelId={data.a.model.id} /> */}

						<MapBox data={data} />

						<ButtonsBox profileId={data.bus.user.id} phone={data.bus.number} />
					</Stack>
				) : null}
			</Container>
		</Box>
	)
}

export default OneHome
