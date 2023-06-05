import { useState } from "react"
import { Box, InputAdornment, Stack } from "@mui/material"

import SearchIcon from "@mui/icons-material/Search"

import { StyledMainInput } from "@components/ui/Input"
import SessionCreate from "./SessionCreate"
import AbsoluteBox from "@components/modules/AbsoluteBox"
import SubmitButton from "@components/ui/Button/SubmitButton"
import { useDispatch } from "react-redux"
import { incrementStep } from "@store/reducers/stepper/stepper.slice"

const PostSelectBrand = () => {
	const dispatch = useDispatch()

	const handleSelectImages = () => {
		dispatch(incrementStep())
	}

	return (
		<Stack>
			<SessionCreate />
			<AbsoluteBox>
				<SubmitButton onClick={handleSelectImages} />
			</AbsoluteBox>
		</Stack>
	)
}

export default PostSelectBrand
