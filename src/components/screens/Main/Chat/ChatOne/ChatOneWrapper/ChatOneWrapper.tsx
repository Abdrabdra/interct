import SuspenseLoader from "@components/modules/SuspenseLoader"
import { useSocket } from "@hooks/useSocket"
import { Box, CircularProgress } from "@mui/material"
import {
	useCreateChatRoomMutation,
	useGetOneChatMessagesQuery
} from "@store/rtk-api/user-rtk/userEndpoints"
import React, {
	DetailedHTMLProps,
	HTMLAttributes,
	useEffect,
	useRef,
	useState
} from "react"
import { useParams } from "react-router-dom"
import { IChatMessages } from "types/IUser"

const ChatOne = React.lazy(() => import("../ChatOne"))

const ChatOneWrapper = () => {
	const { chatId: userId } = useParams()

	const [create, { data: chatData, isLoading: isCreateChatRoomLoading }] =
		useCreateChatRoomMutation()
	const {
		data: messages,
		isSuccess,
		isLoading: isGetOneChatMessagesLoading
	} = useGetOneChatMessagesQuery(
		{ roomId: chatData?.id },
		{ skip: !chatData?.id ? true : false }
	)

	const [newMessages, setNewMessages] = useState(messages)
	const handleSetNewMessages = (value: IChatMessages) => {
		setNewMessages((prev) => prev && [value, ...prev])
	}
	useEffect(() => {
		setNewMessages(messages)
	}, [isSuccess])

	useEffect(() => {
		if (userId) {
			create({ userId: userId })
		}
	}, [])

	const scrollToBottom = () => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" })
	}

	useEffect(() => {
		scrollToBottom()
	}, [newMessages])

	const bottomRef = useRef<HTMLDivElement | null>()

	return (
		<>
			{isCreateChatRoomLoading || isGetOneChatMessagesLoading ? (
				<SuspenseLoader />
			) : (
				newMessages &&
				chatData &&
				isSuccess && (
					<React.Suspense fallback={<SuspenseLoader />}>
						<Box pb={2}>
							<ChatOne
								messages={newMessages}
								handleSetNewMessages={handleSetNewMessages}
								chatData={chatData}
							/>
							{/* @ts-ignore */}
							<div ref={bottomRef} style={{ height: "20px" }} />
						</Box>
					</React.Suspense>
				)
			)}
		</>
	)
}

export default ChatOneWrapper
