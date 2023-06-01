import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"

import { AppDispatch, useTypedSelector } from "./store"
import { refresh } from "@store/reducers/auth/auth.action"

import SuspenseLoader from "@components/modules/SuspenseLoader"
import { setAuth, setUserId } from "@store/reducers/auth/auth.slice"
import { useGetUserMeQuery } from "@store/rtk-api/user-rtk/userEndpoints"

const MainPage = React.lazy(() => import("./pages/MainPage"))
const Auth = React.lazy(() => import("./pages/AuthPage"))
const Error = React.lazy(() => import("./pages/ErrorPage"))

function App() {
	const { isAuth } = useTypedSelector((state) => state.auth)
	const dispatch = useDispatch<AppDispatch>()
	const { data, refetch, isSuccess } = useGetUserMeQuery("")

	const token = localStorage.getItem("access_token")

	React.useEffect(() => {
		const token = localStorage.getItem("access_token")

		if (!token) {
			dispatch(setAuth(false))
		}

		if ((isAuth === true && !token) || (isAuth === false && token)) {
			dispatch(setAuth(false))
			localStorage.removeItem("access_token")
		}

		refetch()
	}, [isAuth])

	React.useEffect(() => {
		if (data) {
			dispatch(setUserId(data.id))
		}
	}, [data, isSuccess])

	return (
		<>
			<Routes>
				<Route index element={<Navigate to="app" />} />
				<Route
					path="/app/*"
					element={
						<React.Suspense fallback={<SuspenseLoader />}>
							<MainPage />
						</React.Suspense>
					}
				/>
				<Route
					path="/auth/*"
					element={
						<React.Suspense fallback={<SuspenseLoader />}>
							{isAuth ? <Navigate to="/app" /> : <Auth />}
						</React.Suspense>
					}
				/>
				<Route
					path="error"
					element={
						<React.Suspense fallback={<SuspenseLoader />}>
							<Error />
						</React.Suspense>
					}
				/>
				{/* <Route path="*" element={<Navigate to={"/error"} />} /> */}
			</Routes>
		</>
	)
}

export default App
