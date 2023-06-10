import { Chip } from "@mui/material"
import { FC } from "react"
import { SessionStatus } from "types/enums"

interface Props {
	status: SessionStatus
}

const ChipStatus: FC<Props> = ({ status }) => {
	return (
		<Chip
			label={
				status === SessionStatus.COLLECTS
					? "В ожиданий"
					: status === SessionStatus.InTransit
					? "В пути"
					: status === SessionStatus.FINISH
					? "Выполнено"
					: "Ошибка"
			}
			sx={{
				color: "#FFF",
				backgroundColor:
					status === SessionStatus.COLLECTS
						? "#222222"
						: status === SessionStatus.InTransit
						? "secondary.main"
						: status === SessionStatus.FINISH
						? "#2DC36A"
						: "secondary.light"
			}}
		/>
	)
}

export default ChipStatus
