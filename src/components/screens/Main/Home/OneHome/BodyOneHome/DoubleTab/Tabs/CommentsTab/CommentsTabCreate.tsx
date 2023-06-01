import { Formik } from "formik"
import { Stack } from "@mui/material"
import { useParams } from "react-router-dom"

import { TypeofEntityEnum } from "types/enums"

import { useCreateCommentMutation } from "@store/rtk-api/comments-rtk/commentEndpoints"
import { StyledMainInput } from "@components/ui/Input"
import { MainButton } from "@components/ui/Button"
import { FC } from "react"

interface Props {
	parentCommentId?: number
}

const CommentsTabCreate: FC<Props> = ({ parentCommentId }) => {
	const { announceId } = useParams()
	const [create] = useCreateCommentMutation()

	const body = announceId && {
		announcementId: Number(announceId),
		parentCommentId: parentCommentId ? parentCommentId : undefined,
		text: "",
		kind: TypeofEntityEnum.ANNOUNCEMENT
	}

	return (
		<Stack
			sx={{
				padding: "16px",
				borderRadius: "12px",
				backgroundColor: "common.white"
			}}
		>
			<Formik
				initialValues={{ text: "" }}
				onSubmit={(values) => {
					body && create({ ...body, ...values })
				}}
			>
				{({ handleSubmit, handleChange, errors, values }) => (
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
				)}
			</Formik>
		</Stack>
	)
}

export default CommentsTabCreate
