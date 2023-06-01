import { FC } from "react"
import { Stack } from "@mui/material"
import { useDispatch } from "react-redux"

import { useGetModelQuery } from "@store/rtk-api/marka-rtk/markaEndpoints"

import { useTypedSelector } from "@store/index"
import {
	incrementStep,
	setFormSelectedMark
} from "@store/reducers/stepper/stepper.slice"

import BrandSkeleton from "../../PostSelectBrand/BrandList/BrandSkeleton"
import BrandOne from "../../PostSelectBrand/BrandList/BrandOne"

interface Props {
	searchValue?: string
}

const ModelList: FC<Props> = ({ searchValue }) => {
	const dispatch = useDispatch()
	const { selectedMark, selectedBrand } = useTypedSelector(
		(state) => state.stepper.form
	)

	const queryParams = {
		title: searchValue ? searchValue : undefined,
		markaId: selectedBrand?.id
	}

	const { data, isLoading, isSuccess } = useGetModelQuery(queryParams, {
		refetchOnMountOrArgChange: true
	})

	const handleSelect = (id: number, title: string) => {
		setTimeout(() => {
			dispatch(setFormSelectedMark({ id: id, title: title }))
			dispatch(incrementStep())
		}, 250)
	}

	return (
		<Stack spacing={1.25}>
			{isLoading ? (
				<BrandSkeleton />
			) : isSuccess ? (
				data.data.map((row) => (
					<BrandOne
						key={row.id}
						data={row}
						handleSelect={handleSelect}
						selectedBrand={selectedMark ? selectedMark : undefined}
					/>
				))
			) : (
				"Ошибка при загрузки"
			)}
		</Stack>
	)
}

export default ModelList
