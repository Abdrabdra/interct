import { Box, Stack, Typography } from "@mui/material"
import { useTypedSelector } from "@store/index"
import React from "react"
import { IChatMessages } from "types/IUser"

interface Props {
	messages: IChatMessages[]
}

const ChatOneMessages: React.FC<Props> = ({ messages }) => {
	const userId = useTypedSelector((state) => state.auth.userId)

	return (
		<Stack spacing={2} sx={{ height: "100%" }}>
			{messages
				.slice(0)
				.reverse()
				.map((row, index) => (
					<Message
						key={index}
						text={row.text}
						isLeft={userId && row.user.id === Number(userId) ? false : true}
					/>
				))}
		</Stack>
	)
}

export default ChatOneMessages

const Message: React.FC<{ isLeft: boolean; text: string }> = ({
	isLeft,
	text
}) => {
	return (
		<Stack
			sx={{
				alignSelf: isLeft ? "start" : "end",
				backgroundColor: isLeft ? "common.white" : "primary.main",
				padding: "0.75rem 1rem",
				borderRadius: isLeft ? "0px 5px 5px 5px" : "5px 0px 5px 5px",
				maxWidth: "75%"
			}}
		>
			<Typography sx={{ wordWrap: "break-word" }}>{text}</Typography>
		</Stack>
	)
}
