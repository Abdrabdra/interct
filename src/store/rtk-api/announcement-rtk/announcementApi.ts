import { createApi } from "@reduxjs/toolkit/query/react"
import { baseQuery, baseQueryWithReauth } from "../rtkApi"

export default createApi({
	reducerPath: "announcementApi",
	baseQuery: baseQueryWithReauth,
	tagTypes: ["announcements"],
	endpoints: () => ({})
})
