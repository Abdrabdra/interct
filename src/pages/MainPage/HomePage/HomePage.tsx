import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"

const MainHome = React.lazy(
	() => import("@components/screens/Main/Home/MainHome")
)

const OneHome = React.lazy(
	() => import("@components/screens/Main/Home/OneHome")
)

const HomeCars = React.lazy(
	() => import("@components/screens/Main/Home/HomeCars")
)

const HomePage = () => {
	return (
		<Routes>
			<Route>
				<Route index element={<MainHome />} />

				<Route path="one" element={<Navigate to="/" />} />
				<Route path="one/:announceId" element={<OneHome />} />

				<Route path="cars" element={<HomeCars />} />

				<Route path="*" element={<MainHome />} />
			</Route>
		</Routes>
	)
}

export default HomePage
