import { SessionStatus } from "types/enums"
export interface ITicket {
	id: number
	cost: number
	bus: IBus
	session: ITicketSession
}

interface IBus {
	id: number
	image: string
	number: string
}

interface ITicketSession {
	id: number
	place: IPlace
	taken: boolean
	session: {
		arrivalDate: Date
		arrivalTime: number
		id: number
		status: SessionStatus
	}
}

interface IPlace {
	column: number
	floor: number
	id: number
	row: number
}
