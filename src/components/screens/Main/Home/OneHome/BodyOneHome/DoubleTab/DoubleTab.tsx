import * as React from "react"
import { Box, Stack, Tab, Tabs } from "@mui/material"

import { a11yProps, TabPanel } from "./TabConfig"
import { CommentsTab, DetailsTab } from "./Tabs"

interface Props {
	details: any
	commentsCount: number
	forPreview?: boolean
}

const DoubleTab: React.FC<Props> = ({ details, commentsCount, forPreview }) => {
	const [value, setValue] = React.useState(0)

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	return (
		<Stack spacing={2} sx={{ width: "100%" }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs value={value} onChange={handleChange} aria-label="basic tabs">
					<Tab label="Детали" {...a11yProps(0)} sx={{ flex: "1" }} />
					<Tab
						label={`Комментарии (${commentsCount})`}
						{...a11yProps(1)}
						sx={{ flex: "1" }}
					/>
				</Tabs>
			</Box>
			<Box>
				<TabPanel value={value} index={0}>
					<DetailsTab details={details} />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<CommentsTab commentsCount={commentsCount} forPreview={forPreview} />
				</TabPanel>
			</Box>
		</Stack>
	)
}

export default DoubleTab
