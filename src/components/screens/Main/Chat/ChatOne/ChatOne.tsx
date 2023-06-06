import React, { useEffect, useRef, useState } from "react"
import { Box, Button, Container } from "@mui/material"
import { useSocket } from "@hooks/useSocket"
import OneChatDrawer from "./OneChatDrawer"
import { useTypedSelector } from "@store/index"
import ChatOneMessages from "./ChatOneMessages"
import { IChatMessages, ICreateChatRoom } from "types/IUser"
import ChatOneTopDrawer from "./ChatOneTopDrawer"
import { useParams } from "react-router-dom"

type Props = {
	messages: IChatMessages[]
	chatData: ICreateChatRoom
	handleSetNewMessages: (value: IChatMessages) => void
}

const ChatOne: React.FC<Props> = ({
	messages,
	chatData,
	handleSetNewMessages
}) => {
	const socket = useSocket()
	socket.connect()
	useEffect(() => {
		socket.emit("join-room", chatData.id)
	}, [])
	const handleSendMessage = (text: string) => {
		socket.emit("add-message", {
			text: text,
			userId: userId,
			roomId: chatData.id
		})
	}
	socket.once("messageAdded", (data: IChatMessages) => {
		handleSetNewMessages(data)
	})

	const { chatId: userId } = useParams()

	const secondUser = chatData.users.filter((row) => row.id === Number(userId))

	return (
		<Box>
			<ChatOneTopDrawer name={secondUser[0]?.phone} />

			<Container>
				{messages && <ChatOneMessages messages={messages} />}
			</Container>

			<OneChatDrawer handleSendMessage={handleSendMessage} />
		</Box>
	)
}

export default ChatOne
