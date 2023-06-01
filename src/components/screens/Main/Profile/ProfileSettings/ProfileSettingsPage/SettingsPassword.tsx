import { MainButton } from "@components/ui/Button"
import { StyledMainInput } from "@components/ui/Input"
import { Stack, Container, Typography } from "@mui/material"

const SettingsPassword = () => {
	return (
		<Container>
			<Stack spacing={3}>
				<Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
					Изменить пароль
				</Typography>

				<Stack spacing={2}>
					<Stack spacing={1}>
						<Typography>Ваш пароль</Typography>
						<StyledMainInput type={"password"} />
					</Stack>
					<Stack spacing={1}>
						<Typography>Новый пароль</Typography>
						<StyledMainInput type={"password"} />
					</Stack>
					<Stack spacing={1}>
						<Typography>Подтвердить пароль</Typography>
						<StyledMainInput type={"password"} />
					</Stack>
				</Stack>

				<MainButton bgcolor="primary.main">Сохранить</MainButton>
			</Stack>
		</Container>
	)
}

export default SettingsPassword
