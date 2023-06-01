import { FC } from "react"
import { Outlet, RouteProps } from "react-router-dom"

import NeedAuthBox from "@components/modules/NeedAuthBox"

import { useTypedSelector } from "@store/index"
import { useDispatch } from "react-redux"
import { setAuth } from "@store/reducers/auth/auth.slice"

const PrivateRoutes = () => {
	const isAuth = useTypedSelector((state) => state.auth.isAuth)
	const token = localStorage.getItem("access_token")
	const dispatch = useDispatch()

	if (isAuth && token) {
		return <Outlet />
	} else {
		localStorage.removeItem("accessToken")
		dispatch(setAuth(false))

		return <NeedAuthBox />
	}
}

export default PrivateRoutes
