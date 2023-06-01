import { FC } from "react"
import { Stack } from "@mui/material"
import {
	useGetCityQuery,
	useGetMarkaQuery
} from "@store/rtk-api/marka-rtk/markaEndpoints"

import { useTypedSelector } from "@store/index"
import { useDispatch } from "react-redux"
import {
	incrementStep,
	setFormSelectedCity
} from "@store/reducers/stepper/stepper.slice"
import BrandSkeleton from "../PostSelectBrand/BrandList/BrandSkeleton"
import BrandOne from "../PostSelectBrand/BrandList/BrandOne"
import CityListBox from "./CityListBox"

interface Props {
	searchValue?: string
}

const CityList: FC<Props> = ({ searchValue }) => {
	const queryParams = {
		title: searchValue ? searchValue : undefined
	}

	const { data, isLoading, isSuccess } = useGetCityQuery("")

	return (
		<Stack spacing={1.25}>
			{isLoading ? (
				<BrandSkeleton />
			) : isSuccess ? (
				data.map((row) => <CityListBox key={row.id} cityData={row} />)
			) : (
				"Ошибка при загрузки"
			)}
		</Stack>
	)
}

export default CityList
