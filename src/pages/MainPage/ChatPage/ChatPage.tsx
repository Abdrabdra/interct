import { Navigate, Route, Routes } from "react-router-dom"

import { ChatList } from "@components/screens/Main"
import ChatOneWrapper from "@components/screens/Main/Chat/ChatOne/ChatOneWrapper"

const ChatPage = () => (
	<>
		<Routes>
			<Route>
				<Route index element={<ChatList />} />
				<Route path="one" element={<Navigate to="/" />} />
				<Route path="one/:chatId" element={<ChatOneWrapper />} />

				<Route path="*" element={<ChatList />} />
			</Route>
		</Routes>
	</>
)

export default ChatPage
