import { DEV_API } from "api"
import { useEffect, useRef } from "react"
import io, { ManagerOptions, Socket, SocketOptions } from "socket.io-client"

export const useSocket = (): Socket => {
	const { current: socket } = useRef(
		io(DEV_API, {
			reconnectionAttempts: 5,
			reconnectionDelay: 5000,
			autoConnect: false,
			query: {
				token: localStorage.getItem("access_token")
			}
		})
	)

	useEffect(() => {
		return () => {
			if (socket) socket.close()
		}
	}, [])

	return socket
}
