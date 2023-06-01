export interface IUser {
	id: number
	blocked: boolean
	avatar: string | null
	email: string
	phone: string
	firstName: string
	lastName: string
}

export interface IUserMe {
	id: number
	phone: string
}

export interface IChatRoom {
	createAt: Date
	id: number
	messages: any[]
	updatedAt: Date
	users: IChatRoomUser[]
}

export interface IChatRoomUser {
	id: number
	phone: string
	profile: { id: number; firstName: string }
}

export interface IChatMessages {
	createAt: string
	id: number
	read: boolean
	text: string
	updatedAt: string
	user: IChatRoomUser
}

export interface ICreateChatRoom {
	combination: number
	createAt: string
	id: number
	updatedAt: string
	users: IChatRoomUser[]
}
