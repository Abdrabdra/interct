import { Box, Stack, Typography } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./Banner.style.scss"

import bannerImg from "../../../../../../_mockup/banner/banner1.png"

const banners = [
	{
		title: "Avto Like запустился",
		text: "Покупайте автомобили через наше приложение Avto-Like.kz",
		img: bannerImg
	},
	{
		title: "Avto Like запустился",
		text: "Покупайте автомобили через наше приложение Avto-Like.kz",
		img: bannerImg
	},
	{
		title: "Avto Like запустился",
		text: "Покупайте автомобили через наше приложение Avto-Like.kz",
		img: bannerImg
	}
]

const Banner = () => {
	return (
		<Box sx={{ backgroundColor: "grey.0" }}>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				loop={true}
				pagination={{
					clickable: true
				}}
				modules={[Pagination, Navigation]}
			>
				{banners.map((banner, index) => (
					<SwiperSlide key={index}>
						<Stack
							direction={"row"}
							sx={{
								display: "flex",
								backgroundColor: "secondary.100",
								height: "160px",
								borderRadius: "12px"
							}}
						>
							<Box>
								<img
									src={banner.img}
									alt={"Banner Background"}
									style={{ height: "100%", borderBottomLeftRadius: "12px" }}
								/>
							</Box>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									flex: 1
								}}
							>
								<Stack justifyContent={"center"}>
									<Typography variant="h6" color="common.white">
										{banner.title}
									</Typography>
									<Typography variant="subtitle2" color="common.white">
										{banner.text}
									</Typography>
								</Stack>
							</Box>
						</Stack>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	)
}

export default Banner
