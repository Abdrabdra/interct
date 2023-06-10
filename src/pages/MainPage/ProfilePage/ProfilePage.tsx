import ProfileTicketsPage from "@components/screens/Main/Profile/ProfileTickets/ProfileTicketsPage"
import React from "react"
import { Route, Routes } from "react-router-dom"

const Profile = React.lazy(() => import("@components/screens/Main/Profile"))
const ProfileInfoEdit = React.lazy(
	() => import("@components/screens/Main/Profile/ProfileInfo/ProfileInfoEdit")
)
const ProfileSettingsPage = React.lazy(
	() =>
		import(
			"@components/screens/Main/Profile/ProfileSettings/ProfileSettingsPage"
		)
)
const SettingsArchive = React.lazy(
	() =>
		import(
			"@components/screens/Main/Profile/ProfileSettings/ProfileSettingsPage/SettingsArchive"
		)
)
const SettingsCards = React.lazy(
	() =>
		import(
			"@components/screens/Main/Profile/ProfileSettings/ProfileSettingsPage/SettingsCards"
		)
)
const SettingsPassword = React.lazy(
	() =>
		import(
			"@components/screens/Main/Profile/ProfileSettings/ProfileSettingsPage/SettingsPassword"
		)
)

const ProfileStatisticPage = React.lazy(
	() =>
		import(
			"@components/screens/Main/Profile/ProfileStatistics/ProfileStatisticPage"
		)
)
const ProfileAnnouncementsPage = React.lazy(
	() =>
		import(
			"@components/screens/Main/Profile/ProfileAnnouncements/ProfileAnnouncementsPage"
		)
)

const ProfilePage = () => {
	return (
		<Routes>
			<Route>
				<Route index element={<Profile />} />
				<Route path="edit" element={<ProfileInfoEdit />} />

				<Route path="settings" element={<ProfileSettingsPage />} />
				<Route path="settings/password" element={<SettingsPassword />} />
				<Route path="settings/cards" element={<SettingsCards />} />
				<Route path="settings/archive" element={<SettingsArchive />} />

				<Route path="stats" element={<ProfileStatisticPage />} />
				<Route path="announcements" element={<ProfileAnnouncementsPage />} />
				<Route path="tickets" element={<ProfileTicketsPage />} />

				<Route path="*" element={<Profile />} />
			</Route>
		</Routes>
	)
}

export default ProfilePage
