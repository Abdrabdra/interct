import BaseModal from "@components/ui/Modal/BaseModal"
import { Box, Container, Stack } from "@mui/material"
import { $image_api } from "api"
import { FC, useState } from "react"

import { IOneImage } from "types/Announcement/OneAnnouncement.type"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./ImageBoxModal.style.scss"

interface Props {
	data: IOneImage[]
	image: { id: number; image: string }
}

const ImageBoxModal: FC<Props> = ({ data, image }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleModalOpen = () => {
		setIsModalOpen(true)
	}

	const handleModalClose = () => {
		setIsModalOpen(false)
	}

	return (
		<>
			<Box
				onClick={handleModalOpen}
				component={"img"}
				src={`${$image_api}${image.image}`}
				sx={{
					width: "100%",
					height: "200px",
					borderRadius: "20px",
					backgroundColor: "secondary.200",
					backgroundRepeat: "no-repeat",
					objectFit: "cover",
					objectPosition: "center"
				}}
			/>
			<BaseModal
				withCloseIcon={true}
				open={isModalOpen}
				handleModalClose={handleModalClose}
			>
				<Stack
					justifyContent={"center"}
					alignItems="center"
					sx={{
						outlineWidth: 0,
						// backgroundColor: "white",
						borderRadius: "10px"
						// padding: "20px"
						// maxWidth: "500px"
					}}
				>
					<Box sx={{ maxWidth: "90vw" }}>
						<Swiper
							className={"imageBoxModal"}
							spaceBetween={50}
							slidesPerView={1}
							loop={true}
							navigation={{
								nextEl: ".swiper-button-next",
								prevEl: ".swiper-button-prev",
								disabledClass: "disable" // When the navigation button is not available, the Class is added, that is, when the Swiper index is 0, the last Class class name without prevel will add a disable, which is .swiper-button-prev .disable
							}}
							pagination={{
								clickable: true
							}}
							mousewheel={true}
							modules={[Pagination, Navigation]}
							onSlideChange={() => {
								// changeStep(current.swiper.activeIndex, 'swiper')
							}}
							// onSwiper={(swiper) => {
							// 	current.swiper = swiper
							// }}
						>
							{data?.map((row, index) => (
								<SwiperSlide>
									<Stack
										justifyContent={"center"}
										alignItems="center"
										sx={{ height: "100%" }}
									>
										<Box
											component={"img"}
											src={`${$image_api}${row.image}`}
											sx={{
												// width: "400px",
												// height: "200px",
												borderRadius: "20px",
												backgroundRepeat: "no-repeat",
												objectFit: "cover",
												objectPosition: "center"
											}}
										/>
									</Stack>
								</SwiperSlide>
							))}
							<div className="swiper-button-prev"></div>
							<div className="swiper-button-next"></div>
						</Swiper>
					</Box>
				</Stack>
			</BaseModal>
		</>
	)
}

export default ImageBoxModal
