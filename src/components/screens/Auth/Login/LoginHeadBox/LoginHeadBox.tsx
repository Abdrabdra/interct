import { Box } from "@mui/material"

import AuthBg from "@assets/images/Auth/auth_bg.png"
import AuthLogo from "@assets/images/logo/auto_like.svg"

const LoginHeadBox = () => {
	return (
		<Box
			sx={{
				paddingTop: "40px",
				backgroundColor: "secondary.100",
				borderBottomLeftRadius: "70px",
				borderBottomRightRadius: "70px"
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					marginBottom: "50px"
				}}
			>
				<img src={AuthLogo} alt={"Auto Like"} />
			</Box>
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<img src={AuthBg} alt={"Auth Background"} />
			</Box>
		</Box>
	)
}

export default LoginHeadBox
