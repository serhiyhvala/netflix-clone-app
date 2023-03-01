import { configureStore } from '@reduxjs/toolkit'

import { moviesApi } from '../services/moviesApi'

import user from './userSlice'

export const store = configureStore({
	reducer: {
		[moviesApi.reducerPath]: moviesApi.reducer,
		user
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(moviesApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
