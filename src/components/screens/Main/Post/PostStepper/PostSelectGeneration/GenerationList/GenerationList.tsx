import { Stack } from "@mui/material"
import { useTypedSelector } from "@store/index"
import {
	incrementStep,
	setFormSelectedGeneration
} from "@store/reducers/stepper/stepper.slice"
import { useGetGenerationQuery } from "@store/rtk-api/marka-rtk/markaEndpoints"
import { useDispatch } from "react-redux"

import BrandOne from "../../PostSelectBrand/BrandList/BrandOne"
import BrandSkeleton from "../../PostSelectBrand/BrandList/BrandSkeleton"

const GenerationList = () => {
	const dispatch = useDispatch()
	const selectedGeneration = useTypedSelector(
		(state) => state.stepper.form.selectedGeneration
	)
	const selectedMark = useTypedSelector(
		(state) => state.stepper.form.selectedMark
	)

	const queryParams = {
		modelId: selectedMark?.id ? selectedMark.id : undefined
	}

	const { data, isLoading, isSuccess } = useGetGenerationQuery(queryParams)

	const handleSelect = (id: number, title: string) => {
		setTimeout(() => {
			dispatch(setFormSelectedGeneration({ id: id, title: title }))
			dispatch(incrementStep())
		}, 250)
	}

	return (
		<Stack spacing={1.25}>
			{isLoading ? (
				<BrandSkeleton />
			) : isSuccess ? (
				data.map((row) => (
					<BrandOne
						key={row.id}
						data={row}
						handleSelect={handleSelect}
						selectedBrand={selectedGeneration ? selectedGeneration : undefined}
						generationData={row}
					/>
				))
			) : (
				"Ошибка при загрузки"
			)}
		</Stack>
	)
}

export default GenerationList
