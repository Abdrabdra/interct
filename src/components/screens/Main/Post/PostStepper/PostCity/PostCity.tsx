import { useState } from "react"
import { StyledMainInput } from "@components/ui/Input"
import { Box, InputAdornment, Stack } from "@mui/material"

import SearchIcon from "@mui/icons-material/Search"
import CityList from "./CityList"

const PostCity = () => {
	const [searchValue, setSearchValue] = useState("")

	const handleChange = (e: any) => {
		const { value } = e.target

		setSearchValue(value)
	}

	return (
		<Stack spacing={1.8}>
			<Box sx={{ display: "flex", direction: "column" }}>
				<StyledMainInput
					value={searchValue}
					onChange={(e) => handleChange(e)}
					placeholder="Поиск"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						)
					}}
				/>
			</Box>
			<CityList searchValue={searchValue} />
		</Stack>
	)
}

export default PostCity
