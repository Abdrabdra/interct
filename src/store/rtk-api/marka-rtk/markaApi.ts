import { createApi } from "@reduxjs/toolkit/query/react"
import { baseQuery, baseQueryWithReauth } from "../rtkApi"

export default createApi({
	reducerPath: "markaApi",
	baseQuery: baseQueryWithReauth,
	tagTypes: ["marka", "model", "body", "description"],
	endpoints: () => ({})
})
