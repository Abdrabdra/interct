import markaApi from "./markaApi"

import {
	IGetDescriptionResponse,
	IGetMarkaResponse
} from "types/Marka/MarkaResponse"
import { IGeneration, IGetCityResponse, IMarka } from "types/Marka/Marka"

export const markaEndpoints = markaApi.injectEndpoints({
	endpoints: (builder) => ({
		getMarka: builder.query<IGetMarkaResponse, object>({
			query: (arg) => {
				return {
					url: `/marka`,
					params: { ...arg, limit: 100 }
				}
			},
			providesTags: ["marka"]
		}),
		getModel: builder.query<IGetMarkaResponse, object>({
			query: (arg) => {
				return {
					url: `/model`,
					params: { ...arg, limit: 100 }
				}
			},
			providesTags: ["model"]
		}),
		getBody: builder.query<IMarka[], string>({
			query: () => {
				return {
					url: `/body-type`
				}
			},
			providesTags: ["body"]
		}),
		getGeneration: builder.query<
			IGeneration[],
			{ modelId: number | undefined }
		>({
			query: (arg) => {
				return {
					url: `/generation/${arg?.modelId}`
				}
			},
			providesTags: ["model"]
		}),
		getDescriptions: builder.query<IGetDescriptionResponse[], string>({
			query: (arg) => {
				return {
					url: `/description`
				}
			},
			providesTags: ["description"]
		}),

		getCity: builder.query<IGetCityResponse[], string>({
			query: (arg) => {
				return {
					url: `/region`
				}
			},
			providesTags: ["description"]
		})
		// likeAnnouncement: builder.mutation<string, ILikeAnnouncement>({
		// 	query: (body) => ({
		// 		url: `/like`,
		// 		method: "POST",
		// 		body
		// 	}),
		// 	invalidatesTags: ["marka"]
		// }),
	})
})

export const {
	useGetMarkaQuery,
	useGetModelQuery,
	useGetBodyQuery,
	useGetGenerationQuery,
	useGetDescriptionsQuery,

	useGetCityQuery
} = markaEndpoints
