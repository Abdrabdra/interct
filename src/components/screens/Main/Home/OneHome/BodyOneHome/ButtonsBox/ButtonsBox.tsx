import AbsoluteBox from "@components/modules/AbsoluteBox"
import { MainButton } from "@components/ui/Button"
import { Stack } from "@mui/material"
import { FC } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
	phone: string
	profileId: number
}

const ButtonsBox: FC<Props> = ({ phone, profileId }) => {
	const navigate = useNavigate()

	const handleNavigate = () => {
		navigate(`/app/chat/one/${profileId}`)
	}

	return (
		<AbsoluteBox>
			<Stack
				direction="row"
				justifyContent={"space-between"}
				spacing={2.5}
				sx={{ flex: 1, marginBottom: "12px" }}
			>
				<MainButton
					onClick={handleNavigate}
					sx={{
						flex: "1",
						height: "50px",
						color: "common.white",
						backgroundColor: "secondary.300",
						borderRadius: "10px"
					}}
				>
					Написать
				</MainButton>
				<a href={`tel:${phone}`} style={{ flex: "1", textDecoration: "none" }}>
					<MainButton
						sx={{
							height: "50px",
							color: "common.white",
							backgroundColor: "primary.main",
							borderRadius: "10px"
						}}
					>
						Позвонить
					</MainButton>
				</a>
			</Stack>
		</AbsoluteBox>
	)
}

export default ButtonsBox
