import { DriveIUnitEnum, StatementEnum, Status, WheelEnum } from "../enums"

export interface IOneAnnouncementResponse {
	a: {
		id: number
		price: number
		description: string
		createdAt: Date
		status: Status
		views: number
		generation: {
			createdFrom?: number
			createdTo?: number
			id: number
			image: string
			title: string
		}
		about: {
			id: number
			year: number
			mileage: number
			steeringWheel: WheelEnum
			driveUnit: DriveIUnitEnum
			volume: number
			state: StatementEnum
			customsClearance: boolean
			color: string
			phone: string
		}
		images: IOneImage[]
		author: {
			id: number
			firstName: string
			user: {
				id: number
				phone: string
			}
		}
		marka: IOneTitle
		city: IOneTitle
		body: IOneTitle
		model: IOneTitle
		tags: ITags[]
	}
	count: {
		commentsCount: number
		likesCount: number
	}
	isLike: boolean
}

interface IOneTitle {
	id: number
	title: string
}

export interface ITags {
	id: number
	title: string
}

export interface IOneImage {
	id: number
	image: string
}
