import { MainButton } from "@components/ui/Button"
import BootstrapTooltip from "@components/ui/Tooltip/BootstrapTooltip"
import {
	Button,
	CircularProgress,
	Container,
	Divider,
	List,
	ListItem,
	ListItemText,
	Toolbar,
	Typography
} from "@mui/material"
import { AppBar } from "@mui/material"
import { Dialog } from "@mui/material"
import { IconButton, Slide, Stack } from "@mui/material"
import { TransitionProps } from "@mui/material/transitions"
import { buildSelectors } from "@reduxjs/toolkit/dist/query/core/buildSelectors"
import { useCreateTicketMutation } from "@store/rtk-api/announcement-rtk/announcementEndpoints"
import { useGetUserMeQuery } from "@store/rtk-api/user-rtk/userEndpoints"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { IOneSession, IPlace } from "types/Session/ISession"

import CloseIcon from "@mui/icons-material/Close"
import { useTypedSelector } from "@store/index"
import { useDispatch } from "react-redux"
import { setTicket, setTicketReset } from "@store/reducers/order/order.slice"
import OrderTypes from "./OrderTypes"

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />
})
interface Props {
	places: IPlace[]
	bus: {
		id: number
	}
	data?: IOneSession
}

const Order: React.FC<Props> = ({ places, bus, data }) => {
	const dispatch = useDispatch()
	const { announceId } = useParams()

	const { data: userData } = useGetUserMeQuery("")

	// dialog
	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
		dispatch(setTicketReset())
		setIsTicket(false)
	}

	const date = data?.arrivalDate && new Date(data?.arrivalDate)

	const selectedTicket = useTypedSelector((state) => state.order.values)

	const [create, { reset, isLoading, isSuccess, data: ticketData }] =
		useCreateTicketMutation()
	const handleCreateTicket = (id: number) => {
		create({ busId: bus.id, sessionPlaceId: id })
	}

	// success
	const [isTicket, setIsTicket] = useState(false)

	useEffect(() => {
		if (isSuccess) {
			setIsTicket(true)
			reset()
		}
	}, [isSuccess])

	const navigate = useNavigate()

	return (
		<div>
			<MainButton variant="outlined" onClick={handleClickOpen}>
				Выбрать место
			</MainButton>
			<Dialog
				fullScreen
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}
			>
				<AppBar sx={{ position: "relative" }}>
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							onClick={handleClose}
							aria-label="close"
						>
							<CloseIcon />
						</IconButton>
						<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
							{data?.cityFrom.title + " - " + data?.cityTo.title}
						</Typography>
						<Button autoFocus color="inherit" onClick={handleClose}>
							Ок
						</Button>
					</Toolbar>
				</AppBar>
				<Container>
					<Stack spacing={2} pt={1}>
						<Typography>
							Дата отправления:{" "}
							{date?.getDate() +
								"." +
								date?.getMonth() +
								"." +
								date?.getFullYear()}
						</Typography>

						<OrderTypes bus={bus} places={places} />
					</Stack>
				</Container>
				{isTicket ? (
					<AppBar
						position="fixed"
						sx={{
							top: "auto",
							bottom: 0,
							backgroundColor: "common.white",
							color: "common.black"
						}}
					>
						<Toolbar>
							<Stack spacing={2} sx={{ width: "100%", py: "15px" }}>
								<Stack>
									<Typography variant="h4" color="primary">
										Успешно Забронировано!
									</Typography>
									<Typography sx={{ fontSize: "12px" }}>
										Место {selectedTicket.id}
									</Typography>
									<Typography sx={{ fontSize: "12px" }}>
										Цена {data?.bus.type.cost}
									</Typography>
									<Typography sx={{ fontSize: "12px" }}>
										Дата{" "}
										{date?.getDate() +
											"." +
											date?.getMonth() +
											"." +
											date?.getFullYear()}
									</Typography>
								</Stack>

								<MainButton
									bgcolor="primary.main"
									onClick={() => {
										navigate("/")
										dispatch(setTicketReset())
									}}
									sx={{ fontSize: "14px" }}
								>
									Главная
								</MainButton>
							</Stack>
						</Toolbar>
					</AppBar>
				) : selectedTicket.id ? (
					<AppBar
						position="fixed"
						sx={{
							top: "auto",
							bottom: 0,
							backgroundColor: "common.white",
							color: "common.black"
						}}
					>
						<Toolbar>
							<Stack
								direction="row"
								justifyContent={"space-between"}
								sx={{ width: "100%", py: "15px" }}
							>
								<Stack>
									<Typography variant="h6">
										Выбрано {selectedTicket.title}
									</Typography>
									<Typography sx={{ fontSize: "12px" }}>
										Цена {data?.bus.type.cost}
									</Typography>
								</Stack>

								<MainButton
									startIcon={isLoading && <CircularProgress />}
									disabled={isLoading}
									onClick={() => handleCreateTicket(Number(selectedTicket.id))}
									sx={{ width: "max-content", fontSize: "14px" }}
								>
									Бронировать билет
								</MainButton>
							</Stack>
						</Toolbar>
					</AppBar>
				) : null}
			</Dialog>
		</div>
	)
}

export default Order

export const OrderButton: React.FC<{
	id: number
	title: string | number
	isTaken: boolean
}> = ({ title, id, isTaken }) => {
	const dispatch = useDispatch()

	const ticket = useTypedSelector((state) => state.order.values)

	const handleClick = () => {
		if (ticket.id === id) {
			dispatch(setTicketReset())
		} else {
			dispatch(setTicket({ id: id, title: title }))
		}
	}

	return (
		<Button
			onClick={handleClick}
			variant={ticket.id === id ? "contained" : "outlined"}
			disabled={isTaken}
			sx={{
				minWidth: "36px",
				width: "36px",
				height: "36px"
			}}
		>
			{title}
		</Button>
	)
}
