import { FC, useEffect, useState } from "react"
import { Box, Button, Stack } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"

import { $image_api } from "api"
import { RootState, useTypedSelector } from "@store/index"

import ImageBoxOne from "./ImageBoxOne"
import ImageBoxModal from "./ImageBoxModal"
import { IOneImage } from "types/Announcement/OneAnnouncement.type"
import { useGetUserMeQuery } from "@store/rtk-api/user-rtk/userEndpoints"

interface Props {
	images?: string
	forPreview?: boolean
}

const ImageBox: FC<Props> = ({ images, forPreview }) => {
	const { data, refetch } = useGetUserMeQuery("")
	useEffect(() => {
		refetch()
	}, [])

	return (
		<Box sx={{ backgroundColor: "grey.0" }}>
			<Swiper spaceBetween={50} slidesPerView={1} loop={true}>
				{forPreview ? (
					<SwiperSlide>
						<ImageBoxOne image={data?.bus?.image} />
					</SwiperSlide>
				) : (
					<SwiperSlide>
						<ImageBoxModal data={images} image={images} />
					</SwiperSlide>
				)}
			</Swiper>
		</Box>
	)
}
export default ImageBox
