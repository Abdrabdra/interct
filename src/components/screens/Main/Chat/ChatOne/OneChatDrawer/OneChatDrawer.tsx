import { Box, Container, IconButton, Stack, TextField } from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import { useState } from "react"
import { useFormik } from "formik"

interface Props {
	handleSendMessage: (text: string) => void
}

const OneChatDrawer: React.FC<Props> = ({ handleSendMessage }) => {
	const formik = useFormik({
		initialValues: {
			message: ""
		},
		onSubmit: async (values) => {
			if (values.message) {
				handleSendMessage(values.message)
				values.message = ""
			}
		}
	})

	const { values, handleChange, handleSubmit } = formik

	return (
		<Stack
			sx={{
				position: "fixed",
				bottom: 0,
				width: "100%",
				backgroundColor: "common.white"
			}}
			p={2}
		>
			<form onSubmit={handleSubmit}>
				<Stack direction={"row"} spacing={1.75} alignItems={"center"}>
					<TextField
						id={"message"}
						variant="standard"
						placeholder="Напишите сообщение..."
						value={values.message}
						onChange={(e) => handleChange(e)}
						InputProps={{
							disableUnderline: true
						}}
						sx={{
							flex: "1",
							fontSize: "17px",
							borderRadius: "12px",

							input: {
								fontSize: "17px",
								backgroundColor: "grey.200",
								color: "common.black",

								"&::placeholder": {
									color: "grey.800"
								}
							}
						}}
					/>
					<Box>
						<IconButton
							type="submit"
							color="primary"
							sx={{ backgroundColor: "secondary.300", width: 44, height: 44 }}
						>
							<SendIcon />
						</IconButton>
					</Box>
				</Stack>
			</form>
		</Stack>
	)
}

export default OneChatDrawer
