import React, { FC, useState } from "react"
import { Box, Modal } from "@mui/material"

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)"
}

interface Props {
	open: boolean
	handleModalClose: () => void
	children: React.ReactNode
}

const BaseModal: FC<Props> = ({ open, handleModalClose, children }) => {
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
			<Box sx={style}>{children}</Box>
		</Modal>
	)
}

export default BaseModal
