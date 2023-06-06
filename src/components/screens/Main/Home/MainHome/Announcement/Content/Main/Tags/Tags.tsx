import { FC } from "react"

import OneTag from "./OneTag"
import numberWithSpaces from "@utils/numberWithSpaces"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"
import "./Tags.style.scss"

import { FreeMode } from "swiper"
import { Box, useMediaQuery } from "@mui/material"

interface Props {
	tags: {
		year: string
		state: number
		mileage: string
		body: string
		volume: string
	}
}

const Tags: FC<Props> = ({ tags }) => {
	const { year, state, mileage, body, volume } = tags

	const is400 = useMediaQuery("(min-width: 400px)")
	const is550 = useMediaQuery("(min-width: 550px)")

	return (
		<Box>
			<Swiper
				slidesPerView={is550 ? 5 : is400 ? 3.5 : 2.5}
				spaceBetween={4}
				freeMode={true}
				modules={[FreeMode]}
				className="mySwiper"
			>
				<SwiperSlide>
					<OneTag tags>{year}</OneTag>
				</SwiperSlide>
				<SwiperSlide>
					<OneTag tags>{state}KZT</OneTag>
				</SwiperSlide>
				<SwiperSlide>
					<OneTag tags>{mileage}</OneTag>
				</SwiperSlide>
				<SwiperSlide>
					<OneTag tags>{body}</OneTag>
				</SwiperSlide>
				<SwiperSlide>
					<OneTag tags>{volume}л</OneTag>
				</SwiperSlide>
			</Swiper>
		</Box>
	)
}

export default Tags
