import {
	BaseQueryFn,
	FetchArgs,
	fetchBaseQuery,
	FetchBaseQueryError,
	FetchBaseQueryMeta
} from "@reduxjs/toolkit/query/react"
import { logout } from "@store/reducers/auth/auth.action"
import { DEV_API } from "../../api"
// import { $api } from '../../api/index';

export const baseQuery = fetchBaseQuery({
	baseUrl: DEV_API,
	prepareHeaders: (headers) => {
		const token = localStorage.getItem("access_token")
		if (token) {
			headers.set("Authorization", `Bearer ${token}`)
		} else {
			headers.set("Authorization", "NO HEADER")
		}
		return headers
	}
})

export const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError,
	{},
	FetchBaseQueryMeta
> = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions)

	if (result?.error?.status === 403 || result?.error?.status === 401) {
		const refreshResult = await baseQuery("/auth/refresh", api, extraOptions)

		if (refreshResult?.data) {
			localStorage.setItem("access_token", refreshResult.data as string)
			result = await baseQuery(args, api, extraOptions)
		} else {
			api.dispatch(logout())
		}
	}

	return result
}
