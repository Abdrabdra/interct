import { createSlice } from "@reduxjs/toolkit"
// import { DriveIUnitEnum, StatementEnum, WheelEnum } from "types/enums"

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

		districtsToIds: number[]
		districtFromId: string
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
		districtsToIds: [],
		districtFromId: ""
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
		setStepFormDistrictsToIds: (state, { payload }) => {
			const mergedArr = [...state.form.districtsToIds, ...[payload]]
			state.form.districtsToIds = mergedArr.filter(
				(row, index) => mergedArr.indexOf(row) === index
			)
		},
		deleteStepFormDistrictsToIds: (state, { payload }) => {
			state.form.districtsToIds = state.form.districtsToIds.filter(
				(row) => row != payload
			)
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
	setStepFormDistrictsToIds,
	deleteStepFormDistrictsToIds,

	resetStepper
} = stepperReducer.actions

export default stepperReducer.reducer
