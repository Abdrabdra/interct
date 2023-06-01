import { Box, Container, Stack } from "@mui/material"
import { useGetOneAnnouncementQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints"
import { useParams } from "react-router-dom"

import {
	Description,
	DoubleTab,
	ImageBox,
	TagBox,
	TitleBox
} from "./BodyOneHome"
import ButtonsBox from "./BodyOneHome/ButtonsBox"
import OptionBox from "./BodyOneHome/OptionBox"
import SimilarBox from "./BodyOneHome/SimilarBox"
import OneHomeSkeleton from "./OneHomeSkeleton"

const OneHome = () => {
	const { announceId } = useParams()

	const { data, isLoading } = useGetOneAnnouncementQuery(
		announceId ? announceId : ""
	)

	// need to fix generation, transmission, color. Waiting changes from back
	const details = data && {
		city: data?.a.city.title,
		generation: data?.a.generation.title,
		body: data?.a.body.title,
		volume: data?.a.about?.volume,
		mileage: data?.a.about?.mileage,
		// transmission: "Коробка Передач",
		driveUnit: data?.a.about?.driveUnit,
		steeringWheel: data?.a.about?.steeringWheel,
		color: data?.a.about.color,
		customsClearance: data?.a.about?.customsClearance,
		state: data?.a.about?.state
	}

	return (
		<Box>
			<Container>
				{isLoading ? (
					<OneHomeSkeleton />
				) : data ? (
					<Stack spacing={2}>
						<ImageBox images={data.a.images} />
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center"
						>
							<TitleBox
								title={`${data.a.marka.title} ${data.a.model.title}`}
								price={data.a.price}
							/>
							<TagBox
								isLike={data?.isLike}
								likesCount={data.count.likesCount}
							/>
						</Stack>
						<DoubleTab
							commentsCount={data.count.commentsCount}
							details={details}
						/>
						<Description description={data.a.description} />
						<OptionBox data={data.a.tags} />
						<SimilarBox markaId={data.a.marka.id} modelId={data.a.model.id} />
						<ButtonsBox
							profileId={data.a.author.id}
							phone={data.a.about.phone}
						/>
					</Stack>
				) : null}
			</Container>
		</Box>
	)
}

export default OneHome
