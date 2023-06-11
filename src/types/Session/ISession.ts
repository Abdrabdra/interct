import { SessionStatus } from "types/enums"

export interface ISession {
	arrivalDate?: Date
	arrivalTime?: number
	cityToId?: number
	cityFromId?: number
	districtsToIds?: number[]
	districtFromId?: number
}

export interface ISessionResponse {
	data: ISessionData[]
	count: number
}
export interface ISessionData {
	id: number
	arrivalDate: Date
	arrivalTime: number
	likes: ILikes[] | []
	status: string
	cityFrom: {
		id: number
		title: string
	}
	cityTo: {
		id: number
		title: string
	}
	bus: {
		id: number
		number: string
		image: string
		type: {
			id: number
			title: string
			cost: number
		}
	}
}

interface ILikes {
	id: number
}

export interface IOneSession {
	id: number
	arrivalDate: Date
	arrivalTime: number
	status: SessionStatus
	cityFrom: {
		id: number
		title: string
	}
	cityTo: {
		id: number
		title: string
	}
	bus: {
		id: number
		number: string
		image: string
		type: {
			id: number
			title: string
			cost: number
		}
		coordinates: {
			id: number
			lat: number
			lon: number
		}
		user: {
			id: number
			money: number
			phone: string
		}
	}
	places: IPlace[]
	districtFrom: {
		id: number
		title: string
	}
	districtsTo: [
		{
			id: number
			title: string
		},
		{
			id: number
			title: string
		},
		{
			id: number
			title: string
		}
	]
}

export interface IPlace {
	id: number
	taken: boolean
	place: {
		id: number
		column: number
		floor: number
		row: number
	}
}
