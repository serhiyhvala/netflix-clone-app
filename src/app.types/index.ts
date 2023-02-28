import { MoviesByGenreEnum } from '../services/moviesByGenre.enum'

export interface IRowProps {
	title: string
	fetchData: MoviesByGenreEnum
}

export interface INetflixOriginalRow {
	title: string
	isLarge: boolean
}

export interface IAllMoviesRow {
	title: string
}

export interface ITopRatedRow extends IAllMoviesRow {}
