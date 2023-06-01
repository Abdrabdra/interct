import { Box, Stack, Tab, Tabs } from "@mui/material"

import { useDispatch } from "react-redux"

import {
	incrementStep,
	setFormSelectedCondition
} from "@store/reducers/stepper/stepper.slice"
import {
	a11yProps,
	TabPanel
} from "@components/screens/Main/Home/OneHome/BodyOneHome/DoubleTab/TabConfig"
import React from "react"
import UsedConditionTab from "./UsedConditionTab"
import NewConditionTab from "./NewConditionTab"
import AbsoluteBox from "@components/modules/AbsoluteBox"
import SubmitButton from "@components/ui/Button/SubmitButton"
import { StatementEnum } from "types/enums"
import { useTypedSelector } from "@store/index"

const PostSelectCondition = () => {
	const dispatch = useDispatch()
	const selectedMileage = useTypedSelector(
		(state) => state.stepper.form.selectedMileage
	)
	const selectedCondition = useTypedSelector(
		(state) => state.stepper.form.selectedCondition
	)

	const handleClick = () => {
		setTimeout(() => {
			dispatch(incrementStep())
		}, 250)
	}

	// Tab Functions
	const [value, setValue] = React.useState(
		selectedCondition === StatementEnum.NEW ? 1 : 0
	)

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
		if (newValue === 1) {
			dispatch(setFormSelectedCondition(StatementEnum.NEW))
		} else {
			dispatch(setFormSelectedCondition(StatementEnum.BOO))
		}
	}

	return (
		<Stack spacing={2} sx={{ width: "100%" }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
				>
					<Tab label="С пробегом" {...a11yProps(0)} sx={{ flex: "1" }} />
					<Tab label="Новая" {...a11yProps(1)} sx={{ flex: "1" }} />
				</Tabs>
			</Box>
			<Box>
				<TabPanel value={value} index={0}>
					<UsedConditionTab />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<NewConditionTab />
				</TabPanel>
			</Box>

			<Box>
				<AbsoluteBox>
					{selectedCondition === StatementEnum.NEW ||
					(selectedCondition && selectedMileage) ? (
						<SubmitButton onClick={() => handleClick()} />
					) : null}
				</AbsoluteBox>
			</Box>
		</Stack>
	)
}

export default PostSelectCondition
