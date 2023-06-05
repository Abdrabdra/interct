import { FC, useState } from "react"
import { Box, Button, Stack } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"

import { $image_api } from "api"
import { RootState, useTypedSelector } from "@store/index"

import ImageBoxOne from "./ImageBoxOne"
import ImageBoxModal from "./ImageBoxModal"
import { IOneImage } from "types/Announcement/OneAnnouncement.type"

interface Props {
	images?: IOneImage[]
	forPreview?: boolean
}

const ImageBox: FC<Props> = ({ images, forPreview }) => {
	// const selectedImages = useTypedSelector(
	// 	(state: RootState) => state.stepper.form.selectedPicture
	// )

	return (
		<Box sx={{ backgroundColor: "grey.0" }}>
			<Swiper spaceBetween={50} slidesPerView={1} loop={true}>
				{forPreview
					? ""
				// 	selectedImages.map((row, index) => (
				// 		<SwiperSlide key={index}>
				// 			<ImageBoxOne image={row} />
				// 		</SwiperSlide>
				//   ))
					: images?.map((row, index) => (
							<SwiperSlide key={index}>
								<ImageBoxModal data={images} image={row} />
							</SwiperSlide>
					  ))}
			</Swiper>
		</Box>
	)
}
export default ImageBox
