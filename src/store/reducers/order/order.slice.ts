import { createSlice } from "@reduxjs/toolkit"
import { ActionsEnum } from "../../enum"

interface IInitState {
	values: {
		id?: number
		title?: string
	}
}

const initialState: IInitState = {
	values: {
		id: undefined,
		title: undefined
	}
}

const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		setTicket: (state, { payload }) => {
			state.values = { ...state.values, ...payload }
		},
		setTicketReset: (state) => {
			state.values = initialState.values
		}
	}
})

export const { setTicket, setTicketReset } = orderSlice.actions

export default orderSlice.reducer
