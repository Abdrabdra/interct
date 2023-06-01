import { IDescriptionTag, IMarka } from "./Marka"

export interface IGetMarkaResponse {
	data: IMarka[]
	count: number
}

export interface IGetDescriptionResponse {
	id: number
	title: string
	tags: IDescriptionTag[]
}
