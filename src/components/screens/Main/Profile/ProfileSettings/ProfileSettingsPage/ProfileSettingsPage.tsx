import { Link } from "react-router-dom"
import { Container, Icon, Stack, Typography } from "@mui/material"

import KeyIcon from "@mui/icons-material/Key"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import RestoreIcon from "@mui/icons-material/Restore"

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"

const rows = {
	main: [
		{
			value: "Изменить пароль",
			link: "password",
			icon: KeyIcon
		},
		{
			value: "Банковские карты",
			link: "cards",
			icon: CreditCardIcon
		},
		{
			value: "Архив",
			link: "archive",
			icon: RestoreIcon
		}
	]
}

const ProfileSettingsPage = () => {
	return (
		<Container>
			<Stack spacing={3}>
				<Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
					Статистика
				</Typography>

				<Stack
					spacing={1.5}
					sx={{
						padding: "16px",
						backgroundColor: "common.white",
						borderRadius: "10px"
					}}
				>
					{rows.main.map((row) => (
						<Link
							key={row.value}
							to={row.link}
							style={{ textDecoration: "none" }}
						>
							<Stack
								key={row.value}
								direction="row"
								justifyContent="space-between"
								alignItems="center"
							>
								<Stack direction="row" spacing={1.5} alignItems="center">
									<Stack
										justifyContent={"center"}
										alignItems={"center"}
										sx={{
											width: "32px",
											height: "32px",
											backgroundColor: "secondary.300",
											borderRadius: "8px"
										}}
									>
										<Icon
											color="primary"
											component={row.icon}
											sx={{ fontSize: "20px" }}
										/>
									</Stack>
									<Typography
										sx={{
											fontWeight: 600,
											fontSize: "16px",
											color: "secondary.300"
										}}
									>
										{row.value}
									</Typography>
								</Stack>
								<Icon
									sx={{ color: "grey.800" }}
									component={KeyboardArrowRightIcon}
								/>
							</Stack>
						</Link>
					))}
				</Stack>
			</Stack>
		</Container>
	)
}

export default ProfileSettingsPage
