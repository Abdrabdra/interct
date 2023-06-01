import { createSlice } from "@reduxjs/toolkit"
import { ActionsEnum } from "../../enum"
import { login, logout, registration } from "./auth.action"

interface IInitState {
	isAuth: boolean
	error: null | string
	status: ActionsEnum
	userId?: string
}

const initialState: IInitState = {
	isAuth: false,
	error: null,
	status: ActionsEnum.IDLE,
	userId: undefined
}

const authReducer = createSlice({
	name: "auth",
	reducers: {
		setAuth: (state, { payload }) => {
			state.isAuth = payload
		},
		setUserId: (state, { payload }) => {
			state.userId = payload
		},
		setStatus: (state, { payload }) => {
			//debugger
			state.status = payload
		}
	},
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.status = ActionsEnum.LOADING
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.status = ActionsEnum.SUCCESS
				state.isAuth = true
			})
			.addCase(login.rejected, (state, response: any) => {
				state.status = ActionsEnum.ERROR
				state.error = response.payload.message
				console.log(response.payload.message)
				// debugger
			})

			.addCase(registration.pending, (state) => {
				state.status = ActionsEnum.LOADING
			})
			.addCase(registration.fulfilled, (state, { payload }) => {
				state.status = ActionsEnum.SUCCESS
			})
			.addCase(registration.rejected, (state, response: any) => {
				state.status = ActionsEnum.ERROR
				state.error = response.payload.response.data.message
			})

			.addCase(logout.fulfilled, () => {
				return initialState
			})
	}
})

export const { setAuth, setStatus, setUserId } = authReducer.actions

export default authReducer.reducer
