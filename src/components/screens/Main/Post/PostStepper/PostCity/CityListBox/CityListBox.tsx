import { Stack } from "@mui/material"
import { useTypedSelector } from "@store/index"
import {
	incrementStep,
	setFormSelectedCity
} from "@store/reducers/stepper/stepper.slice"
import { FC } from "react"
import { useDispatch } from "react-redux"

import { IGetCityResponse } from "types/Marka/Marka"
import BrandOne from "../../PostSelectBrand/BrandList/BrandOne"

interface Props {
	cityData: IGetCityResponse
}

const CityListBox: FC<Props> = ({ cityData }) => {
	const dispatch = useDispatch()
	const selectedCity = useTypedSelector(
		(state) => state.stepper.form.selectedCity
	)

	const handleSelect = (id: number, title: string) => {
		setTimeout(() => {
			dispatch(setFormSelectedCity({ id: id, title: title }))
			dispatch(incrementStep())
		}, 250)
	}

	return (
		<>
			{cityData.cities.map((row) => (
				<BrandOne
					data={row}
					handleSelect={handleSelect}
					selectedBrand={selectedCity ? selectedCity : undefined}
				/>
			))}
		</>
	)
}

export default CityListBox
