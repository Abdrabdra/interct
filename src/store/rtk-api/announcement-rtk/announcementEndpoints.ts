import announcementApi from "./announcementApi"
import {
	IAnnouncementsResponse,
	ILikeAnnouncement
} from "types/Announcement/Announcement.type"
import { IOneAnnouncementResponse } from "types/Announcement/OneAnnouncement.type"
import { IPlaceType } from "types/IPlace/IPlace"
import { IOneSession, ISession, ISessionResponse } from "types/Session/ISession"
import { ICity } from "types/ICity"
import { ITicket } from "types/ITicket"

export const announcementEndpoints = announcementApi.injectEndpoints({
	endpoints: (builder) => ({
		getAnnouncements: builder.query<IAnnouncementsResponse, any>({
			query: (arg) => {
				return {
					url: `/session`,
					params: { ...arg }
				}
			},
			providesTags: ["announcements"]
		}),
		getAdminAnnouncements: builder.query<IAnnouncementsResponse, object>({
			query: (arg) => {
				return {
					url: `/announcement/admin`,
					params: { ...arg, limit: 100 }
				}
			},
			providesTags: ["announcements"]
		}),
		likeAnnouncement: builder.mutation<string, ILikeAnnouncement>({
			query: (body) => ({
				url: `/like`,
				method: "POST",
				body
			}),
			invalidatesTags: ["announcements"]
		}),
		getOneAnnouncement: builder.query<IOneAnnouncementResponse, string>({
			query: (id) => ({
				url: `/announcement/one/${id}`
			}),
			providesTags: ["announcements"]
		}),
		createAnnouncement: builder.mutation<any, FormData>({
			query: (body) => ({
				url: `/announcement`,
				method: "POST",
				body
			}),
			invalidatesTags: ["announcements"]
		}),

		// Place
		getPlaceType: builder.query<IPlaceType[], any>({
			query: () => ({
				url: `place/type`,
				method: "GET"
			}),
			providesTags: ["place"]
		}),

		// Bus
		createBus: builder.mutation<
			any,
			{ number: string; typeId?: number; image: File }
		>({
			query: (arg) => {
				const formData = new FormData()

				formData.append("number", String(arg.number))
				formData.append("typeId", String(arg.typeId))
				formData.append("image", arg.image)

				return {
					url: `/bus`,
					method: "POST",
					body: formData
				}
			},
			invalidatesTags: ["bus"]
		}),

		// Session
		createSession: builder.mutation<any, ISession>({
			query: (arg) => {
				return {
					url: `/session`,
					method: "POST",
					body: arg
				}
			},
			invalidatesTags: ["session"]
		}),
		getSession: builder.query<ISessionResponse, any>({
			query: (arg) => ({
				url: `session`,
				params: { ...arg, page: 1, limit: 100 }
			}),
			providesTags: ["session"]
		}),
		getOneSession: builder.query<IOneSession, any>({
			query: (arg) => ({
				url: `session/${arg}`,
				params: { ...arg, page: 1, limit: 100 }
			}),
			providesTags: ["session"]
		}),

		// City
		getCity: builder.query<ICity[], any>({
			query: () => ({
				url: `city`
			}),
			providesTags: ["city"]
		}),
		getDistrict: builder.query<ICity[], any>({
			query: (arg) => ({
				url: `district/${arg}`
			}),
			providesTags: ["city"]
		}),

		// Ticket
		createTicket: builder.mutation<
			any,
			{ sessionPlaceId: number; busId: number }
		>({
			query: (arg) => {
				return {
					url: `/ticket`,
					method: "POST",
					body: arg
				}
			},
			invalidatesTags: ["ticket", "session"]
		}),
		getTickets: builder.query<ITicket[], any>({
			query: (arg) => ({
				url: `ticket`
			}),
			providesTags: ["ticket"]
		})
	})
})

export const {
	useGetAnnouncementsQuery,
	useGetAdminAnnouncementsQuery,
	useLikeAnnouncementMutation,
	useGetOneAnnouncementQuery,
	useCreateAnnouncementMutation,

	// place
	useGetPlaceTypeQuery,

	// Bus
	useCreateBusMutation,

	// Session
	useCreateSessionMutation,
	useGetSessionQuery,
	useLazyGetOneSessionQuery,
	useGetOneSessionQuery,

	// City
	useGetCityQuery,
	useGetDistrictQuery,

	// Ticket
	useCreateTicketMutation,
	useGetTicketsQuery
} = announcementEndpoints
