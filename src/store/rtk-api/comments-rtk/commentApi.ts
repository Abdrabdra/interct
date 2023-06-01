import { createApi } from "@reduxjs/toolkit/query/react"
import { baseQuery, baseQueryWithReauth } from "../rtkApi"

export default createApi({
	reducerPath: "commentApi",
	baseQuery: baseQueryWithReauth,
	tagTypes: ["comment"],
	endpoints: () => ({})
})
