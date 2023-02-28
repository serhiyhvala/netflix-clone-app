import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IGetAllMovies } from './getAllMovies.types'
import { MoviesByGenreEnum } from './moviesByGenre.enum'

const API_KEY = `api_key=${process.env.REACT_APP_API_KEY}`
const language = 'language=en-US'

export const moviesApi = createApi({
	reducerPath: 'moviesApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
	endpoints: build => ({
		getAllMovies: build.query<IGetAllMovies, 'trending'>({
			query: prop => `${prop}/all/week?${API_KEY}&${language}`
		}),
		getNetflixOriginals: build.query<IGetAllMovies, 'tv'>({
			query: prop => `discover/${prop}?${API_KEY}&with_networks=213`
		}),
		getTopRated: build.query<IGetAllMovies, 'top_rated'>({
			query: prop => `movies/${prop}?${API_KEY}&${language}`
		}),
		getMoviesByGenre: build.query<IGetAllMovies, MoviesByGenreEnum>({
			query: number => `discover/movie?${API_KEY}&with_genres=${number}`
		})
	})
})

export const {
	useGetAllMoviesQuery,
	useGetNetflixOriginalsQuery,
	useGetTopRatedQuery,
	useGetMoviesByGenreQuery
} = moviesApi
