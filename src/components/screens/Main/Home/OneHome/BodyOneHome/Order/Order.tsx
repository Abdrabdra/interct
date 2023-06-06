import { MainButton } from "@components/ui/Button"
import { useCreateTicketMutation } from "@store/rtk-api/announcement-rtk/announcementEndpoints"
import { useGetUserMeQuery } from "@store/rtk-api/user-rtk/userEndpoints"
import React from "react"
import { useParams } from "react-router-dom"
import { IPlace } from "types/Session/ISession"
interface Props {
	places: IPlace[]
	bus: {
		id: number
	}
}
const Order: React.FC<Props> = ({ places, bus }) => {
	const { announceId } = useParams()

	const { data } = useGetUserMeQuery("")

	const [create] = useCreateTicketMutation()

	const handleClick = () => {
		announceId &&
			data &&
			create({ busId: bus.id, sessionPlaceId: places[0].id })
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
