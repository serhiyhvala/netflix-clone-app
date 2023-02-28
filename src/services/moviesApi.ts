import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IGetAllMovies } from './getAllMovies.types'

const API_KEY = process.env.REACT_APP_API_KEY

export const moviesApi = createApi({
	reducerPath: 'moviesApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
	endpoints: build => ({
		getAllMovies: build.query<IGetAllMovies, 'trending'>({
			query: prop => `${prop}/all/week?api_key=${API_KEY}&language=en-US`
		})
	})
})

export const { useGetAllMoviesQuery } = moviesApi
