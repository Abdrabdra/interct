import { Avatar, Box, Divider, Stack, Typography } from "@mui/material"
import { useTypedSelector } from "@store/index"
import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { IChatRoom } from "types/IUser"

interface Props {
	data: IChatRoom
}

const ChatRow: FC<Props> = ({ data }) => {
	const navigate = useNavigate()
	const userId = useTypedSelector((state) => state.auth.userId)
	const user = userId && data.users.filter((row) => row.id !== Number(userId))

	console.log("userId: ", userId)
	console.log("user: ", user)

	const handleClick = () => {
		user && navigate(`/app/chat/one/${user[0].id}`)
	}

	const date = new Date(data.updatedAt)

	return (
		<Stack spacing={1}>
			<Stack
				direction="row"
				justifyContent={"space-between"}
				onClick={handleClick}
			>
				<Stack direction="row" spacing={2} alignItems="center">
					<Avatar sx={{ width: 65, height: 65 }}></Avatar>
					<Stack>
						<Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
							{user && user[0].phone}
						</Typography>
						<Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
							{user && user[0].phone}
						</Typography>
					</Stack>
				</Stack>
				<Box>
					<Typography sx={{ color: "secondary.900", fontSize: "12px" }}>
						{date.getDay() +
							"." +
							(date.getMonth() + 1) +
							"." +
							date.getFullYear()}
					</Typography>
				</Box>
			</Stack>
			<Divider variant={"middle"} />
		</Stack>
	)
}

export default ChatRow
