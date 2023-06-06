import { Box, Stack } from "@mui/material"
import { Button, styled, tooltipClasses, TooltipProps } from "@mui/material"
import { ClickAwayListener, Tooltip } from "@mui/material"
import React from "react"
import { useState } from "react"
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle"
import { IconButton } from "@mui/material"

interface Props {
	body: NonNullable<React.ReactNode>
	buttonTitle: string
	test?: boolean
}

const BootstrapTooltip: React.FC<Props> = ({ body, buttonTitle, test }) => {
	const [open, setOpen] = useState(false)

	const handleTooltipClose = () => {
		setOpen(false)
	}

	const handleTooltipClick = () => {
		setOpen((prev) => !prev)
	}

	return (
		<ClickAwayListener onClickAway={handleTooltipClose}>
			<div>
				<StyledTooltip
					arrow
					PopperProps={{
						disablePortal: true
					}}
					onClose={handleTooltipClose}
					open={open}
					disableFocusListener
					disableHoverListener
					disableTouchListener
					title={body}
				>
					{test ? (
						<IconButton onClick={handleTooltipClick} color={"primary"} sx={{backgroundColor: "secondary.main"}}>
							<AirportShuttleIcon />
						</IconButton>
					) : (
						<Button
							onClick={handleTooltipClick}
							variant="outlined"
							size="small"
						>
							{buttonTitle}
						</Button>
					)}
				</StyledTooltip>
			</div>
		</ClickAwayListener>
	)
}

export default BootstrapTooltip

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
	<Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
	[`& .${tooltipClasses.arrow}`]: {
		color: theme.palette.grey[900]
	},
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: theme.palette.grey[900]
	}
}))
