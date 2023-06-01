import { Input } from "@mui/material"

import { ProductFilterButton } from "@components/modules/Filters/ProductFilter"



const TopHomeDrawer = () => {
	return (
		<>
			<Input placeholder="Поиск" disableUnderline sx={{ flex: 1 }} />
			<ProductFilterButton withIcon />
		</>
	)
}

export default TopHomeDrawer
