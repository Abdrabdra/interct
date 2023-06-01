import commentApi from "./commentApi"

import { ICommentResponse, ICreateCommentRequest } from "types/Comment/Comment"

export const commentEndpoints = commentApi.injectEndpoints({
	endpoints: (builder) => ({
		getComments: builder.query<
			ICommentResponse,
			{ carId?: string; parentId?: number }
		>({
			query: (arg) => {
				return {
					url: "/comments",
					params: { ...arg }
				}
			},
			providesTags: ["comment"]
		}),
		createComment: builder.mutation<string, ICreateCommentRequest>({
			query: (body) => ({
				url: `/comments`,
				method: "POST",
				body
			}),
			invalidatesTags: ["comment"]
		})
	})
})

export const { useGetCommentsQuery, useCreateCommentMutation } =
	commentEndpoints
