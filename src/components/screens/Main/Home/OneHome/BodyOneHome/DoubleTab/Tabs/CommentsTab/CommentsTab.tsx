import { FC } from "react"
import {
	Box,
	Button,
	IconButton,
	Skeleton,
	Stack,
	Typography
} from "@mui/material"
import { useParams } from "react-router-dom"

import { useGetCommentsQuery } from "@store/rtk-api/comments-rtk/commentEndpoints"

import CommentsTabSkeleton from "./CommentsTabSkeleton"
import CommentsTabOne from "./CommentsTabOne"
import CommentsTabCreate from "./CommentsTabCreate"

interface Props {
	commentsCount?: number
	forPreview?: boolean
}

const CommentsTab: FC<Props> = ({ commentsCount, forPreview }) => {
	const { announceId } = useParams()

	const queryParams = {
		busId: announceId
	}

	const { data, isLoading, isSuccess } = useGetCommentsQuery(queryParams, {
		skip: forPreview ? true : false
	})

	return (
		<Stack spacing={4}>
			{forPreview === true ? (
				<Stack
					justifyContent="center"
					alignItems="center"
					sx={{
						height: "122px",
						padding: "16px",
						borderRadius: "12px",
						backgroundColor: "common.white"
					}}
				>
					Нет Комментарий
				</Stack>
			) : isLoading ? (
				<CommentsTabSkeleton />
			) : isSuccess ? (
				<Stack spacing={2}>
					<CommentsTabCreate />
					<Stack spacing={4}>
						{data.data.map((row) => (
							<CommentsTabOne key={row.id} row={row} />
						))}
					</Stack>
				</Stack>
			) : (
				<Stack>Error</Stack>
			)}
		</Stack>
	)
}

export default CommentsTab
