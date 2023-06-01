import { createSlice } from "@reduxjs/toolkit"
import { values } from "lodash-es"

interface IInitState {
	// состояние: нет в бэке
	// marks: number[] | null
	// models: number[] | null

	// cities: number[] | null

	helper: {
		reset: boolean
	}

	values: {
		limit: number
		page: number

		marks: number[]
		models: number[]

		yearTo: string
		yearFrom: string
		orderByPriceASC: string
		orderByPriceDESC: string
		priceTo: string
		priceFrom: string
	}
}

const initialState: IInitState = {
	// состояние: нет в бэке
	// models: null,
	// marks: null,
	// cities: null,

	helper: {
		reset: true
	},

	values: {
		limit: 10,
		page: 1,

		marks: [],
		models: [],

		yearFrom: "",
		yearTo: "",
		orderByPriceASC: "",
		orderByPriceDESC: "",
		priceFrom: "",
		priceTo: ""
	}
}

const filterReducer = createSlice({
	name: "filter",
	initialState,
	reducers: {
		setFilter: (state, { payload }) => {
			state.values = { ...state.values, ...payload }
		},
		setFilterReset: (state) => {
			state.values = initialState.values
		}
	}
})

export const { setFilter, setFilterReset } = filterReducer.actions

export default filterReducer.reducer
