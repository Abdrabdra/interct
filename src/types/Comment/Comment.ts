// import { TypeofEntityEnum } from "types/enums"
import { IOneComment } from "./OneComment"

export interface ICommentResponse {
	data: IOneComment[]
	count: number
}

export interface ICreateCommentRequest {
	parentId?: number
	busId: number
	text: string
	// kind: TypeofEntityEnum
}
