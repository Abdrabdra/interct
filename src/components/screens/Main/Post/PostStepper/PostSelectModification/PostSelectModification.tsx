import * as React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Box, Divider, Stack } from "@mui/material"

import AbsoluteBox from "@components/modules/AbsoluteBox"
import SubmitButton from "@components/ui/Button/SubmitButton"

import SelectEngineForm from "./SelectEngineForm"
import SelectGearForm from "./SelectGearForm"
import { useTypedSelector } from "@store/index"
import SelectWheelForm from "./SelectWheelForm"
import { useDispatch } from "react-redux"
import { incrementStep } from "@store/reducers/stepper/stepper.slice"

const PostSelectModification = () => {
	const dispatch = useDispatch()
	const [expanded, setExpanded] = React.useState<string | false>("panel1")

	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false)
		}

	const selectedEngine = useTypedSelector(
		(state) => state.stepper.form.selectedEngine
	)
	const selectedGear = useTypedSelector(
		(state) => state.stepper.form.selectedGear
	)
	const selectedWheel = useTypedSelector(
		(state) => state.stepper.form.steeringWheel
	)

	const handleClick = () => {
		dispatch(incrementStep())
	}

	return (
		<Stack spacing={1.25}>
			<Accordion
				disableGutters
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
				>
					<Typography
						sx={{
							fontSize: "18px",
							fontWeight: 600,
							display: "flex",
							gap: "5px"
						}}
					>
						Двигатель
						<Typography
							variant={"caption"}
							sx={{ color: "grey.100", fontSize: "18px" }}
						>
							{selectedEngine && ` - ${selectedEngine}`}
						</Typography>
					</Typography>
				</AccordionSummary>
				<Divider variant="middle" />
				<AccordionDetails>
					<SelectEngineForm />
				</AccordionDetails>
			</Accordion>

			<Accordion
				expanded={expanded === "panel2"}
				onChange={handleChange("panel2")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2bh-content"
					id="panel2bh-header"
				>
					<Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
						Привод
						<Typography
							variant={"caption"}
							sx={{ color: "grey.100", fontSize: "18px" }}
						>
							{selectedGear && ` - ${selectedGear}`}
						</Typography>
					</Typography>
				</AccordionSummary>
				<Divider variant="middle" />
				<AccordionDetails>
					<SelectGearForm />
				</AccordionDetails>
			</Accordion>

			<Accordion
				expanded={expanded === "panel5"}
				onChange={handleChange("panel5")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2bh-content"
					id="panel2bh-header"
				>
					<Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
						Руль
						<Typography
							variant={"caption"}
							sx={{ color: "grey.100", fontSize: "18px" }}
						>
							{selectedWheel &&
								` - ${selectedWheel === "left" ? "Левый" : "Правый"}`}
						</Typography>
					</Typography>
				</AccordionSummary>
				<Divider variant="middle" />
				<AccordionDetails>
					<SelectWheelForm />
				</AccordionDetails>
			</Accordion>

			<Box
				sx={{
					display:
						selectedWheel && selectedEngine && selectedGear ? "initial" : "none"
				}}
			>
				<AbsoluteBox>
					<SubmitButton
						onClick={handleClick}
						disabled={expanded === false && true}
					/>
				</AbsoluteBox>
			</Box>
		</Stack>
	)
}

export default PostSelectModification
