export interface IMarka {
	id: number
	title: string
}

export interface IGeneration {
	id: number
	title: string
	image: string
	createdFrom: number
	createdTo: number
}

export interface IDescriptionTag {
	id: number
	title: string
}

export interface IGetCityResponse {
	id: number
	title: string
	cities: IDescriptionTag[]
}
