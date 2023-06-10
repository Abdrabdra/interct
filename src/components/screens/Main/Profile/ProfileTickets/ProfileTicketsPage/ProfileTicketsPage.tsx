import ChipStatus from "@components/ui/Chip/ChipStatus"
import { Container, Paper, Stack, Typography } from "@mui/material"
import { useGetTicketsQuery } from "@store/rtk-api/announcement-rtk/announcementEndpoints"
import { $image_api } from "api"
import React from "react"

const ProfileTicketsPage = () => {
	const { data } = useGetTicketsQuery("")

	return (
		<Container>
			<Stack spacing={3}>
				<Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
					Мои билеты
				</Typography>

				<Stack spacing={1}>
					{data?.map((row) => {
						const date = new Date(row.session.session.arrivalDate)
						console.log(row)

						return (
							<Paper
								key={row.id}
								sx={{
									padding: "8px",
									borderRadius: "12px",
									display: "flex",
									flexDirection: "row"
								}}
							>
								<img
									src={`${$image_api}${row.bus.image}`}
									style={{
										width: "86px",
										height: "86px",
										borderRadius: "10%",
										objectFit: "cover"
									}}
								/>
								<Stack spacing={1} sx={{ flex: 1 }}>
									<Stack
										direction={"row"}
										alignContent="center"
										justifyContent={"space-around"}
										alignItems="center"
									>
										<Stack>
											<Typography variant={"h6"} sx={{ width: "max-content" }}>
												Дата выхода
											</Typography>
											<Typography>
												{date?.getDate() +
													"." +
													date?.getMonth() +
													"." +
													date?.getFullYear()}
											</Typography>
										</Stack>

										<ChipStatus status={row.session.session.status} />
										<Stack>
											<Typography variant={"h6"} sx={{ width: "max-content" }}>
												Место
											</Typography>
											<Typography>
												Ряд {row.session.place.row}, Колонна{" "}
												{row.session.place.column}
											</Typography>
										</Stack>
									</Stack>

									<Stack
										direction={"row"}
										alignContent="center"
										justifyContent={"space-around"}
									>
										<Stack>
											<Typography variant={"h6"} sx={{ width: "max-content" }}>
												Цена
											</Typography>
											<Typography>{row.cost}</Typography>
										</Stack>
										<Stack>
											<Typography variant={"h6"} sx={{ width: "max-content" }}>
												Номер машины
											</Typography>
											<Typography>{row.bus.number}</Typography>
										</Stack>
										<Stack>
											<Typography variant={"h6"} sx={{ width: "max-content" }}>
												Номер билета
											</Typography>
											<Typography>{row.session.id}</Typography>
										</Stack>
									</Stack>
								</Stack>
							</Paper>
						)
					})}
				</Stack>
			</Stack>
		</Container>
	)
}

export default ProfileTicketsPage
