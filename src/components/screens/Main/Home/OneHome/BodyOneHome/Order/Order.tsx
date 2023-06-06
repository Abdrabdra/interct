import { MainButton } from "@components/ui/Button"
import { useCreateTicketMutation } from "@store/rtk-api/announcement-rtk/announcementEndpoints"
import React from "react"
import { useParams } from "react-router-dom"

const Order = () => {
	const { announceId } = useParams()

	const [create] = useCreateTicketMutation()

	const handleClick = () => {
		announceId && create({ id: Number(announceId), row: 1, column: 1 })
	}

	return (
		<MainButton
			onClick={handleClick}
			size="small"
			bgcolor="primary.main"
			sx={{ minWidth: "20px", width: "auto" }}
		>
			Забронировать
		</MainButton>
	)
}

export default Order
