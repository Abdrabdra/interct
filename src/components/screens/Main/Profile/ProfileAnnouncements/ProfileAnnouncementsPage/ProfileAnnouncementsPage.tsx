import ContentList from "@components/screens/Main/Home/MainHome/Announcement/Content/ContentList"
import TabPanel, { a11yProps } from "@components/ui/Tab/TabPanel/TabPanel"
import { Box, Tab, Tabs } from "@mui/material"
import { Container, Stack, Typography } from "@mui/material"
import { useState } from "react"
import { Status } from "types/enums"

const ProfileAnnouncementsPage = () => {
	const [value, setValue] = useState(0)

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	return (
		<Container>
			<Stack spacing={3}>
				<Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
					Мои объявления
				</Typography>

				<Stack spacing={1}>
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<Tabs
							value={value}
							onChange={handleChange}
							aria-label="basic tabs example"
						>
							<Tab label="Активные" {...a11yProps(0)} />
							<Tab label="На проверке" {...a11yProps(1)} />
							<Tab label="Архивные" {...a11yProps(2)} />
							<Tab label="Заблокированные" {...a11yProps(3)} />
						</Tabs>
					</Box>
					<TabPanel value={value} index={0}>
						<ContentList forMyAnnouncements={Status.ACCEPTED} />
					</TabPanel>
					<TabPanel value={value} index={1}>
						<ContentList forMyAnnouncements={Status.NEW} />
					</TabPanel>
					<TabPanel value={value} index={2}>
						<ContentList forMyAnnouncements={Status.ARCHIVED} />
					</TabPanel>
					<TabPanel value={value} index={3}>
						<ContentList forMyAnnouncements={Status.DENIED} />
					</TabPanel>
				</Stack>
			</Stack>
		</Container>
	)
}

export default ProfileAnnouncementsPage
