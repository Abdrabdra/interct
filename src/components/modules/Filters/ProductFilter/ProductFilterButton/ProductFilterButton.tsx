import * as React from "react"
import { useDispatch } from "react-redux"
import {
	Slide,
	Dialog,
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Button,
	Icon,
	Input,
	Stack,
	Box
} from "@mui/material"
import { TransitionProps } from "@mui/material/transitions"

import CloseIcon from "@mui/icons-material/Close"
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined"

import { ProductFilterContent } from "../ProductFilterContent"
import { FC } from "react"
import { setFilterReset } from "@store/reducers/filter/filter.slice"
import { MainButton } from "@components/ui/Button"
import WithIconButton from "./WithIconButton"
import SmallTextIconButton from "./SmallTextIconButton"

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />
})

interface Props {
	withIcon?: boolean
}

const ProductFilterButton: FC<Props> = ({ withIcon }) => {
	const dispatch = useDispatch()
	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleFilterReset = () => {
		dispatch(setFilterReset())
		setOpen(false)
	}

	return (
		<>
			{withIcon ? (
				<WithIconButton onClick={handleClickOpen} />
			) : (
				<Box>
					<SmallTextIconButton title="Фильтры" onClick={handleClickOpen} />
				</Box>
			)}
			<Dialog
				fullScreen
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}
			>
				<AppBar sx={{ position: "relative" }}>
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							onClick={handleClose}
							aria-label="close"
						>
							<CloseIcon />
						</IconButton>
						<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
							Фильтры
						</Typography>
						<Stack>
							<MainButton onClick={handleFilterReset} bgcolor="transparent">
								Сбросить
							</MainButton>
						</Stack>
					</Toolbar>
				</AppBar>

				<ProductFilterContent handleClose={handleClose} />
			</Dialog>
		</>
	)
}

export default ProductFilterButton
