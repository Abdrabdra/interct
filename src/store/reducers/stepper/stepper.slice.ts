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
		selectedTransport?: string // вид объявления, машина, лодка, мото, запчасти
		selectedBrand?: { id?: number; title?: string } // марка - markaId
		selectedMark?: { id?: number; title?: string } // модель - modelId
		selectedManufacture?: number // годВыпуска - year
		selectedCase?: { id?: number; title?: string } // кузов - bodyTypeId
		selectedGeneration?: { id?: number; title?: string } // поколение - generationId
		selectedEngine?: string // двигатель (бензин, дизель) - transmissionId ?????????
		selectedGear?: DriveIUnitEnum // привод - driveUnit

		selectedMileage?: number // пробег - mileage
		selectedCustomsClearance?: boolean // Растоможка - customsClearance
		selectedCondition?: StatementEnum // состояние (новое, б/у) - state

		selectedPrice?: number // цена - price
		selectedPicture: File[] //
		selectedTags: ITitle[] //
		selectedCity?: { id?: number; title?: string } // город - cityId

		selectedDescription?: string // description
		selectedContactNumber?: string //
		steeringWheel?: WheelEnum // левоРуль(право) - steeringWheel
		selectedColor?: string
	}
}

const initialState: IInitState = {
	step: 0,
	stepTitle: "",
	error: null,

	form: {
		selectedTransport: undefined,
		selectedBrand: { id: undefined, title: undefined },
		selectedMark: { id: undefined, title: undefined },
		selectedManufacture: undefined,
		selectedCase: { id: undefined, title: undefined },
		selectedGeneration: { id: undefined, title: undefined },
		selectedEngine: undefined,
		selectedGear: undefined,
		selectedCondition: StatementEnum.BOO,
		selectedPrice: undefined,
		selectedPicture: [],
		selectedTags: [],
		selectedCity: { id: undefined, title: undefined },

		selectedDescription: undefined,
		selectedContactNumber: undefined,
		steeringWheel: undefined,
		selectedMileage: undefined,
		selectedCustomsClearance: undefined,
		selectedColor: undefined
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
		resetStepper: () => initialState,

		setDefaultState: (state)=> {
			state.error = initialState.error
			state.form = initialState.form
			state.step = initialState.step
			state.stepTitle = initialState.stepTitle
		},
		setStepperError: (state, { payload }) => {
			state.error = payload
		},

		setFormSelectedTransport: (state, { payload }) => {
			state.form.selectedTransport = payload
		},
		setFormSelectedBrand: (state, { payload }) => {
			state.form.selectedBrand = payload
		},
		setFormSelectedMark: (state, { payload }) => {
			state.form.selectedMark = payload
		},
		setFormSelectedManufacture: (state, { payload }) => {
			state.form.selectedManufacture = payload
		},
		setFormSelectedCase: (state, { payload }) => {
			state.form.selectedCase = payload
		},
		setFormSelectedGeneration: (state, { payload }) => {
			state.form.selectedGeneration = payload
		},
		setFormSelectedEngine: (state, { payload }) => {
			state.form.selectedEngine = payload
		},
		setFormSelectedGear: (state, { payload }) => {
			state.form.selectedGear = payload
		},
		setFormSelectedCondition: (state, { payload }) => {
			state.form.selectedCondition = payload
		},
		setFormSelectedPrice: (state, { payload }) => {
			state.form.selectedPrice = payload
		},
		setFormSelectedPicture: (state, { payload }) => {
			state.form.selectedPicture = payload
		},

		// forTag
		setFormSelectedTags: (state, { payload }) => {
			state.form.selectedTags.push(payload)
		},
		deleteFromFormTag: (state, { payload }) => {
			state.form.selectedTags = state.form.selectedTags.filter(
				(row) => row.id !== payload
			)
		},

		setFormSelectedCity: (state, { payload }) => {
			state.form.selectedCity = payload
		},

		setFormSelectedDescription: (state, { payload }) => {
			state.form.selectedDescription = payload
		},
		setFormSelectedContactNumber: (state, { payload }) => {
			state.form.selectedContactNumber = payload
		},
		setFormSteeringWheel: (state, { payload }) => {
			state.form.steeringWheel = payload
		},
		setFormSelectedMileage: (state, { payload }) => {
			state.form.selectedMileage = payload
		},
		setFormSelectedCustomsClearance: (state, { payload }) => {
			state.form.selectedCustomsClearance = payload
		},
		setFormSelectedColor: (state, { payload }) => {
			state.form.selectedColor = payload
		}
	}
})

export const {
	setStep,
	resetStep,
	incrementStep,
	decrementStep,
	setStepTitle,
	setStepperError,
	resetStepper,

	setDefaultState,
	setFormSelectedTransport,
	setFormSelectedBrand,
	setFormSelectedMark,
	setFormSelectedManufacture,
	setFormSelectedCase,
	setFormSelectedGeneration,
	setFormSelectedEngine,
	setFormSelectedGear,
	setFormSelectedCondition,
	setFormSelectedPrice,
	setFormSelectedPicture,

	setFormSelectedTags,
	deleteFromFormTag,

	setFormSelectedCity,

	setFormSelectedDescription,
	setFormSelectedContactNumber,
	setFormSteeringWheel,
	setFormSelectedMileage,
	setFormSelectedCustomsClearance,
	setFormSelectedColor
} = stepperReducer.actions

export default stepperReducer.reducer
