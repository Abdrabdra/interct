import { Stack, Container, Typography } from "@mui/material"

import { MainButton } from "@components/ui/Button"
import { StyledMainInput } from "@components/ui/Input"

const SettingsCards = () => {
	return (
		<Container>
			<Stack spacing={3}>
				<Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
					Банковские карты
				</Typography>

				<Stack spacing={2}>
					<Stack spacing={1}>
						<Typography>Карта</Typography>
						<StyledMainInput />
					</Stack>
				</Stack>

				<MainButton>Добавить новую карту</MainButton>
				<MainButton bgcolor="primary.main">Сохранить</MainButton>
			</Stack>
		</Container>
	)
}

export default SettingsCards
