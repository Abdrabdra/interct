import * as React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Box, Divider, Stack } from "@mui/material"

import SelectTransportForm from "./SelectTransportForm"
import SelectSparesForm from "./SelectSparesForm"
import AbsoluteBox from "@components/modules/AbsoluteBox"
import SubmitButton from "@components/ui/Button/SubmitButton"

const PostSelectTransport = () => {
	const [expanded, setExpanded] = React.useState<string | false>("panel1")

	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false)
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
					<Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
						Машины
					</Typography>
				</AccordionSummary>
				<Divider variant="middle" />
				<AccordionDetails>
					<SelectTransportForm expanded={expanded} />
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
						Запчасти
					</Typography>
				</AccordionSummary>
				<Divider variant="middle" />
				<AccordionDetails>
					<SelectSparesForm expanded={expanded} />
				</AccordionDetails>
			</Accordion>

			<Box sx={{ display: expanded === false ? "initial" : "none" }}>
				<AbsoluteBox>
					<SubmitButton type="submit" disabled={expanded === false && true} />
				</AbsoluteBox>
			</Box>
		</Stack>
	)
}

export default PostSelectTransport
