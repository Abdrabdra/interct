import { Stack } from "@mui/material"
import { useTypedSelector } from "@store/index"
import {
	incrementStep,
	setFormSelectedCase
} from "@store/reducers/stepper/stepper.slice"
import { useGetBodyQuery } from "@store/rtk-api/marka-rtk/markaEndpoints"
import { useDispatch } from "react-redux"
import BrandOne from "../../PostSelectBrand/BrandList/BrandOne"
import BrandSkeleton from "../../PostSelectBrand/BrandList/BrandSkeleton"

const CaseList = () => {
	const dispatch = useDispatch()
	const selectedCase = useTypedSelector(
		(state) => state.stepper.form.selectedCase
	)
	const handleSelect = (id: number, title: string) => {
		setTimeout(() => {
			dispatch(setFormSelectedCase({id: id, title: title}))
			dispatch(incrementStep())
		}, 250)
	}

	const { data, isLoading, isSuccess } = useGetBodyQuery("")

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
						selectedBrand={selectedCase ? selectedCase : undefined}
					/>
				))
			) : (
				"Ошибка при загрузки"
			)}
		</Stack>
	)
}

export default CaseList
