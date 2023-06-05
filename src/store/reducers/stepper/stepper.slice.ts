import { createSlice } from "@reduxjs/toolkit"
import { DriveIUnitEnum, StatementEnum, WheelEnum } from "types/enums"

interface ITitle {
	id?: number
	title?: string
}

interface IInitState {
	step: number
	stepTitle: string
	error: {
		status: number
		data: any
	} | null

	form: {
		arrivalDate?: Date
		arrivalTime?: number
		cityTo?: number
		cityFrom?: number

		districtsToIds?: [string]
		districtFromId?: number
	}
}

const initialState: IInitState = {
	step: 0,
	stepTitle: "",
	error: null,

	form: {
		arrivalDate: undefined,
		arrivalTime: undefined,
		cityTo: undefined,
		cityFrom: undefined,
		districtsToIds: undefined,
		districtFromId: undefined
	}
}

const stepperReducer = createSlice({
	name: "stepper",
	initialState,
	reducers: {
		setStep: (state, { payload }) => {
			state.step = payload
		},
		setStepTitle: (state, { payload }) => {
			state.stepTitle = payload
		},
		resetStep: (state) => {
			state.step = 0
		},
		incrementStep: (state) => {
			state.step += 1
		},
		decrementStep: (state) => {
			state.step -= 1
		},

		setStepForm: (state, { payload }) => {
			state.form = { ...state.form, ...payload }
		},

		resetStepper: () => initialState
	}
})

export const {
	setStep,
	resetStep,
	incrementStep,
	decrementStep,
	setStepTitle,

	setStepForm,

	resetStepper
} = stepperReducer.actions

export default stepperReducer.reducer
