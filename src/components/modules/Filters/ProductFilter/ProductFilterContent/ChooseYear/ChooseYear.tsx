import { Formik } from "formik"
import { Stack, Typography } from "@mui/material"

import { StyledMainInput } from "@components/ui/Input"
import { FC, useEffect, useState } from "react"
import { useTypedSelector } from "@store/index"

interface Props {
	handleChangeQuery: (value: any) => void
}

const ChooseYear: FC<Props> = ({ handleChangeQuery }) => {
	const selectedYearFrom = useTypedSelector(
		(state) => state.filter.values.yearFrom
	)
	const selectedYearTo = useTypedSelector((state) => state.filter.values.yearTo)

	const [year, setYear] = useState<any>({
		yearFrom: selectedYearFrom,
		yearTo: selectedYearTo
	})

	const handleYearChange = (e: any, type: "yearFrom" | "yearTo") => {
		const { value } = e.target

		if (type === "yearFrom") {
			setYear({ yearFrom: value })
		}
		if (type === "yearTo") {
			setYear({ yearTo: value })
		}
	}

	useEffect(() => {
		handleChangeQuery(year)
	}, [year])

	return (
		<Stack>
			<Typography>По времени</Typography>
			<Stack direction={"row"} spacing={2.5}>
				<Stack>
					<Typography>От</Typography>
					<StyledMainInput
						value={year.yearFrom}
						onChange={(e) => handleYearChange(e, "yearFrom")}
						bordercolor="grey.200"
					/>
				</Stack>
				<Stack>
					<Typography>До</Typography>
					<StyledMainInput
						value={year.yearTo}
						onChange={(e) => handleYearChange(e, "yearTo")}
						bordercolor="grey.200"
					/>
				</Stack>
			</Stack>
		</Stack>
	)
}

export default ChooseYear
