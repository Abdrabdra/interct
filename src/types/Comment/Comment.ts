import { TypeofEntityEnum } from "types/enums"
import { IOneComment } from "./OneComment"

export interface ICommentResponse {
	data: IOneComment[]
	count: number
}

export interface ICreateCommentRequest {
	parentCommentId?: number
	announcementId: number
	text: string
	kind: TypeofEntityEnum
}
