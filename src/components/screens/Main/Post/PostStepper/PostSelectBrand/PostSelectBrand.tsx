import { useState } from "react"
import { Box, InputAdornment, Stack } from "@mui/material"

import SearchIcon from "@mui/icons-material/Search"

import { StyledMainInput } from "@components/ui/Input"
import BrandList from "./BrandList"

const PostSelectBrand = () => {
	const [searchValue, setSearchValue] = useState("")

	const handleChange = (e: any) => {
		setSearchValue(e.target.value)
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
			<BrandList searchValue={searchValue} />
		</Stack>
	)
}

export default PostSelectBrand
