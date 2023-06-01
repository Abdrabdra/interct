import { Route, Routes } from "react-router-dom"
import { Post } from "../../../components/screens/Main/Post"

const PostPage = () => {
	return (
		<Routes>
			<Route>
				<Route index element={<Post />} />

				<Route path="*" element={<Post />} />
			</Route>
		</Routes>
	)
}

export default PostPage
