import { Box } from "@mui/material"
import { Navigate, Route, Routes } from "react-router-dom"
import Login from "../../components/screens/Auth/Login"
import Registration from "../../components/screens/Auth/Registration"

const AuthPage = () => {
	return (
		<Box
			sx={{
				backgroundColor: "common.white",
				minHeight: "100%",
				paddingBottom: "50px"
			}}
		>
			<Routes>
				<Route path="/">
					<Route index element={<Navigate to="login" />} />
					<Route path="login" element={<Login />} />
					<Route path="registration" element={<Registration />} />
				</Route>
			</Routes>
		</Box>
	)
}

export default AuthPage
