//library
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector } from "react-redux"
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from "redux-persist"
import storage from "redux-persist/lib/storage"

//reducer
import authReducer from "./reducers/auth/auth.slice"
import stepperReducer from "./reducers/stepper/stepper.slice"
import filterReducer from "./reducers/filter/filter.slice"
import orderReducer from "./reducers/order/order.slice"

//rtk
import announcementApi from "./rtk-api/announcement-rtk/announcementApi"
import commentApi from "./rtk-api/comments-rtk/commentApi"
import markaApi from "./rtk-api/marka-rtk/markaApi"
import userApi from "./rtk-api/user-rtk/userApi"

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["auth", "stepper"]
}

const AuthPersistConfig = {
	key: "auth",
	storage: storage
}

const StepperPersistConfig = {
	key: "stepper",
	storage: storage
}

const rootReducer = combineReducers({
	auth: persistReducer(AuthPersistConfig, authReducer),
	stepper: persistReducer(StepperPersistConfig, stepperReducer),
	filter: filterReducer,
	order: orderReducer,

	[announcementApi.reducerPath]: announcementApi.reducer,
	[commentApi.reducerPath]: commentApi.reducer,
	[markaApi.reducerPath]: markaApi.reducer,
	[userApi.reducerPath]: userApi.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false
			// serializableCheck: {
			// 	ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			// }
		}).concat(
			announcementApi.middleware,
			commentApi.middleware,
			markaApi.middleware,
			userApi.middleware
		)
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
