import React, { FC, useState } from "react"
import { Box, IconButton, Modal } from "@mui/material"

import CloseRoundedIcon from "@mui/icons-material/CloseRounded"

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",

	"&:focus-visible": {
		outline: "none !important"
	}
}

interface Props {
	open: boolean
	handleModalClose: () => void
	children: React.ReactNode
	withCloseIcon?: boolean
}

const BaseModal: FC<Props> = ({
	open,
	handleModalClose,
	children,
	withCloseIcon
}) => {
	// const [open, setOpen] = useState(false)
	// const handleOpen = () => setOpen(true)
	// const handleClose = () => setOpen(false)

	return (
		<Modal
			open={open}
			onClose={handleModalClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<>
				{withCloseIcon && (
					<IconButton
						onClick={handleModalClose}
						sx={{
							color: "common.white",
							position: "absolute",
							top: "5%",
							right: "5%"
						}}
					>
						<CloseRoundedIcon sx={{ fontSize: "40px" }} />
					</IconButton>
				)}
				<Box sx={style}>{children}</Box>
			</>
		</Modal>
	)
}

export default BaseModal
