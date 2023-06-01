import { FC, useState } from "react"
import { Box, Button, IconButton, Stack, Typography } from "@mui/material"

import { IOneComment } from "types/Comment/OneComment"
import { useGetCommentsQuery } from "@store/rtk-api/comments-rtk/commentEndpoints"
import CommentsTabOneSkeleton from "./CommentsTabOneSkeleton"

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import CloseIcon from "@mui/icons-material/Close"
import CommentsTabCreate from "../CommentsTabCreate"

interface Props {
	row: IOneComment
}

const CommentsTabOne: FC<Props> = ({ row }) => {
	const { id, text, subCount } = row
	const [isOpen, setIsOpen] = useState(false)
	const [isReplyClick, setIsReplyClick] = useState(false)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}
	const handleReplyClick = () => {
		setIsReplyClick(!isReplyClick)
	}

	const queryParams = {
		parentId: id
	}

	const { data, isLoading, isSuccess } = useGetCommentsQuery(queryParams, {
		skip: isOpen ? false : true
	})

	return (
		<Stack spacing={0.5}>
			<Stack
				key={id}
				spacing={1}
				sx={{
					// height: "122px",
					padding: "16px",
					borderRadius: "12px",
					backgroundColor: "common.white"
				}}
			>
				<Stack
					direction="row"
					justifyContent={"space-between"}
					alignContent={"end"}
				>
					<Typography
						alignSelf={"center"}
						sx={{ fontSize: 16, fontWeight: 600 }}
					>
						Пользователь
						{/* {row.name} */}
					</Typography>
					<IconButton color="primary" sx={{ padding: 0 }}>
						<FavoriteBorderIcon />
					</IconButton>
				</Stack>
				<Typography
					sx={{
						color: "secondary.900",
						width: "100%",
						wordWrap: "break-word"
					}}
				>
					{text}
				</Typography>
				{!isReplyClick && (
					<Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
						<Button
							onClick={handleReplyClick}
							sx={{
								width: "60px",
								height: "20px",
								fontSize: "14px",
								fontWeight: 500,
								textDecoration: "underline"
							}}
						>
							Ответить
						</Button>
					</Box>
				)}

				{isReplyClick && <CommentsTabCreate parentCommentId={id} />}
			</Stack>
			{Number(subCount) ? (
				<Button
					onClick={handleClick}
					endIcon={isOpen && <CloseIcon />}
					sx={{
						justifyContent: "flex-start",
						width: "146px",
						height: "20px",
						fontSize: "14px",
						fontWeight: 500,
						textDecoration: isOpen ? "none" : "underline",
						color: isOpen ? "grey.800" : "primary"
					}}
				>
					{isOpen ? `${subCount} комментарий` : "Посмотреть ответы"}
				</Button>
			) : null}

			{isOpen ? (
				<Box
					sx={{
						paddingLeft: "50px",
						paddingBottom: "10px",
						paddingTop: "5px"
					}}
				>
					{isLoading ? (
						<CommentsTabOneSkeleton />
					) : isSuccess ? (
						<Stack spacing={4}>
							{data.data.map((row) => (
								<CommentsTabOne key={row.id} row={row} />
							))}
						</Stack>
					) : null}
				</Box>
			) : null}
		</Stack>
	)
}

export default CommentsTabOne
