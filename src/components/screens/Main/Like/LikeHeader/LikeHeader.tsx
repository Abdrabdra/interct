import { Button, Container, Stack, Typography } from "@mui/material"

import PersonIcon from "@mui/icons-material/Person"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { IAnnouncement } from "types/Announcement/Announcement.type"
import { ISessionData } from "types/Session/ISession"

interface Props {
	data: ISessionData
}

const LikeHeader: FC<Props> = ({ data }) => {
	const navigate = useNavigate()

	const handleNavigate = () => {
		navigate(`/app/home/one/${data.id}`)
	}

	return (
		<Container>
			<Stack direction="row" justifyContent="space-between">
				<Stack direction="row" spacing={1.5} alignItems="center">
					<PersonIcon />
					<Typography>{`${data.cityFrom.title} ${data.cityTo.title}`}</Typography>
				</Stack>
				<Button onClick={handleNavigate}>
					Перейти <ArrowForwardIosIcon />
				</Button>
			</Stack>
		</Container>
	)
}

export default LikeHeader
