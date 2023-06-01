import { Pagination } from "@mui/material"
import { useTypedSelector } from "@store/index"
import { setFilter } from "@store/reducers/filter/filter.slice"
import { FC, useState } from "react"
import { useDispatch } from "react-redux"

interface Props {
	count: number
}

const ContentListPagination: FC<Props> = ({ count }) => {
	const dispatch = useDispatch()
	const totalPages = Math.ceil(count / 10)
	const selectedPage = useTypedSelector((state) => state.filter.values.page)

	const [page, setPage] = useState(selectedPage)
	const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
		setPage(value)
		dispatch(setFilter({ page: value }))
	}

	return count ? (
		<Pagination
			page={page}
			onChange={(e, value) => handleChange(e, value)}
			count={totalPages}
		/>
	) : null
}

export default ContentListPagination
