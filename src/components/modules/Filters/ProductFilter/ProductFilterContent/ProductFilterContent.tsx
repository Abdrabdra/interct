import { FC, useState } from "react"
import { Container, Stack } from "@mui/material"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { setFilter } from "@store/reducers/filter/filter.slice"

import ChooseMark from "./ChooseMark"
import ChooseYear from "./ChooseYear"
import ChoosePrice from "./ChoosePrice"

import { MainButton } from "@components/ui/Button"
import AbsoluteBox from "@components/modules/AbsoluteBox"
import { useTypedSelector } from "@store/index"

interface Props {
	handleClose: () => void
}

const Filter: FC<Props> = ({ handleClose }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const selectedMarks = useTypedSelector((state) => state.filter.values.marks)

	const [filterValues, setFilterValues] = useState({
		marks: selectedMarks,
		models: [],

		yearFrom: null,
		yearTo: null,
		priceFrom: null,
		priceTo: null,
		orderByPriceASC: "",
		orderByPriceDESC: ""
	})

	const handleChangeQuery = (value: object) => {
		setFilterValues((prev) => {
			return {
				...prev,
				...value
			}
		})
	}

	const handleFilterSubmit = () => {
		dispatch(setFilter({ page: 1, ...filterValues }))
		handleClose()
		navigate("/app/home/cars")
	}

	return (
		<Stack sx={{ paddingTop: "20px" }}>
			{/* Состояние */}
			{/* Выбор марки/модели */}
			{/* Растаможен в РК */}
			{/* С фото */}
			{/* Регион */}

			<Container>
				<Stack spacing={2}>
					<ChooseMark
						handleChangeQuery={(value) => handleChangeQuery(value)}
						chosenValues={filterValues.marks}
					/>
					<ChooseYear handleChangeQuery={(value) => handleChangeQuery(value)} />
					<ChoosePrice
						handleChangeQuery={(value) => handleChangeQuery(value)}
					/>
				</Stack>
			</Container>

			<AbsoluteBox>
				<MainButton onClick={handleFilterSubmit} bgcolor="primary.main">
					Подтвердить
				</MainButton>
			</AbsoluteBox>
		</Stack>
	)
}

export default Filter
