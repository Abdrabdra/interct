import React, { ReactNode } from "react"

export function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`
	}
}

type TabPanelProps = {
	children?: React.ReactNode
	index: number
	value: number
}

const TabPanel: React.FC<TabPanelProps> = (props) => {
	const { children, value, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && children}
		</div>
	)
}

export default TabPanel
