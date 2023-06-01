import ViewHeightBox from "@components/modules/ViewHeightBox"
import { Box, Container, Stack } from "@mui/material"
import { useGetChatRoomsQuery } from "@store/rtk-api/user-rtk/userEndpoints"
import ChatRow from "./ChatRow"

const ChatList = () => {
	const { data, isSuccess } = useGetChatRoomsQuery("")

	return (
		<Box>
			<Container>
				<Stack spacing={1}>
					{data?.length === 0 ? (
						<ViewHeightBox text={"Нет сообщений"} />
					) : (
						data?.map(
							(row, index) => row.id && <ChatRow data={row} key={index} />
						)
					)}
				</Stack>
			</Container>
		</Box>
	)
}

export default ChatList
