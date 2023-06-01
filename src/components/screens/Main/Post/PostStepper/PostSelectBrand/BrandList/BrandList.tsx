import { FC } from "react"
import { Stack } from "@mui/material"
import { useGetMarkaQuery } from "@store/rtk-api/marka-rtk/markaEndpoints"

import BrandOne from "./BrandOne"
import BrandSkeleton from "./BrandSkeleton"
import { useTypedSelector } from "@store/index"
import { useDispatch } from "react-redux"
import {
	incrementStep,
	setFormSelectedBrand
} from "@store/reducers/stepper/stepper.slice"

interface Props {
	searchValue?: string
}

const BrandList: FC<Props> = ({ searchValue }) => {
	const dispatch = useDispatch()
	const selectedBrand = useTypedSelector(
		(state) => state.stepper.form.selectedBrand
	)

	const queryParams = {
		title: searchValue ? searchValue : undefined
	}

	const { data, isLoading, isSuccess } = useGetMarkaQuery(queryParams)

	const handleSelect = (id: number, title: string) => {
		setTimeout(() => {
			dispatch(setFormSelectedBrand({ id: id, title: title }))
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
						selectedBrand={selectedBrand ? selectedBrand : undefined}
					/>
				))
			) : (
				"Ошибка при загрузки"
			)}
		</Stack>
	)
}

export default BrandList
