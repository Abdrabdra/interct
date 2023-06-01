import { IChatMessages, IChatRoom, ICreateChatRoom, IUserMe } from "types/IUser"
import { IGetOneProfile, IGetProfiles, IProfiles, IRole } from "./user.type"
import userApi from "./userApi"

export const userEndpoints = userApi.injectEndpoints({
	endpoints: (builder) => ({
		getUserMe: builder.query<IUserMe, string>({
			query: () => ({
				url: `/user/me`
			}),
			providesTags: ["user"]
		}),
		getRole: builder.query<IRole[], string>({
			query: () => ({
				url: `/user/check`
			}),
			providesTags: ["user"]
		}),
		//Profiles
		getProfiles: builder.query<any, object>({
			query: (filters) => ({
				url: `/profile/get-profiles`,
				params: {
					...filters
				}
			}),
			providesTags: ["user"]
		}),
		getOneProfile: builder.query<IGetOneProfile, number>({
			query: (userId) => ({
				url: `/profile/user/${userId}`
			}),
			providesTags: ["user"]
		}),

		getChatRooms: builder.query<IChatRoom[], string>({
			query: () => ({
				url: `/chat/room`
			}),
			providesTags: ["user"]
		}),
		getOneChatMessages: builder.query<
			IChatMessages[],
			{ roomId?: string | number }
		>({
			query: (arg) => ({
				url: `/chat/message/${arg.roomId}`,
				params: {
					limit: 100
				}
			}),
			providesTags: ["user"]
		}),
		createChatRoom: builder.mutation<ICreateChatRoom, {profileId: string}>({
			query: (body) => ({
				url: `/chat/room`,
				method: "POST",
				body
			}),
			invalidatesTags: ["user"]
		})
	})
})

export const {
	useGetUserMeQuery,
	useGetOneProfileQuery,
	useGetRoleQuery,
	useGetProfilesQuery,

	useGetChatRoomsQuery,
	useGetOneChatMessagesQuery,
	useCreateChatRoomMutation
} = userEndpoints
