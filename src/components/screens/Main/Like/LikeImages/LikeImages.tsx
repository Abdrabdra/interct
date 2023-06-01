import { Box, Stack } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./LikeImages.style.scss"
import { FC } from "react"
import { $image_api } from "api"

interface Props {
	data: string | null
}

const LikeImages: FC<Props> = ({ data }) => {
	return (
		<Box sx={{ display: "flex", justifyContent: "center" }}>
			<Box
				sx={{ backgroundColor: "grey.0", width: "100%", maxWidth: "1200px" }}
			>
				<Swiper
					spaceBetween={10}
					slidesPerView={1}
					loop={true}
					pagination={{
						clickable: true
					}}
					modules={[Pagination]}
				>
					<SwiperSlide>
						<Stack justifyContent={"center"} alignItems={"center"}>
							<Box
								component={"img"}
								src={`${$image_api}${data}`}
								sx={{
									height: "300px",
									backgroundColor: "secondary.200",
									backgroundRepeat: "no-repeat",
									objectFit: "cover",
									objectPosition: "center"
								}}
							/>
						</Stack>
					</SwiperSlide>
				</Swiper>
			</Box>
		</Box>
	)
}

export default LikeImages
