import { Stack } from "@mui/material"

import GoBackButton from "@components/ui/Button/GoBackButton"

const TopGoBackDrawer = () => {
	return (
		<Stack>
			<GoBackButton forPost={false} />
		</Stack>
	)
}

export default TopGoBackDrawer
