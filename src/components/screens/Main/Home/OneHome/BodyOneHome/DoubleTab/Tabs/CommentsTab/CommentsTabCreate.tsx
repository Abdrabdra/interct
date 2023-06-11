import { Formik, useFormik } from "formik"
import { Stack } from "@mui/material"
import { useParams } from "react-router-dom"

// import { TypeofEntityEnum } from "types/enums"

import { useCreateCommentMutation } from "@store/rtk-api/comments-rtk/commentEndpoints"
import { StyledMainInput } from "@components/ui/Input"
import { MainButton } from "@components/ui/Button"
import { FC, useEffect } from "react"
import {
	useGetOneSessionQuery,
	useGetSessionQuery
} from "@store/rtk-api/announcement-rtk/announcementEndpoints"

interface Props {
	parentCommentId?: number
}

const CommentsTabCreate: FC<Props> = ({ parentCommentId }) => {
	const { announceId } = useParams()
	const [create, { isSuccess }] = useCreateCommentMutation()

	const { data: sessionData } = useGetOneSessionQuery(announceId)

	const body = announceId && {
		busId: Number(sessionData?.bus.id),
		parentId: parentCommentId ? parentCommentId : undefined,
		text: ""
		// kind: TypeofEntityEnum.ANNOUNCEMENT
	}

	const formik = useFormik({
		initialValues: { text: "" },
		onSubmit: (values) => {
			body && create({ ...body, ...values })
		}
	})

	const { values, handleSubmit, handleChange, resetForm } = formik

	useEffect(() => {
		handleReset()
	}, [isSuccess])

	const handleReset = () => {
		resetForm()
	}

	return (
		<Stack
			sx={{
				padding: "16px",
				borderRadius: "12px",
				backgroundColor: "common.white"
			}}
		>
			<form onSubmit={handleSubmit}>
				<Stack spacing={1}>
					<StyledMainInput
						bgcolor="grey.200"
						type="text"
						onChange={handleChange}
						value={values.text}
						name="text"
						label={"Напишите комментарий"}
					/>
					<MainButton type="submit">Отправить</MainButton>
				</Stack>
			</form>
		</Stack>
	)
}

export default CommentsTabCreate
