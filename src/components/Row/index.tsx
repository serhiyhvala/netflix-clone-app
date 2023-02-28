import { FC, useEffect, useState } from 'react'

import { IRowProps } from '../../app.types'
import { pointForImage } from '../../constants'
import { IMovie } from '../../services/getAllMovies.types'
import { useGetMoviesByGenreQuery } from '../../services/moviesApi'

import './Row.scss'

const Row: FC<IRowProps> = ({ title, fetchData }) => {
	const { data } = useGetMoviesByGenreQuery(fetchData)
	const [movies, setMovies] = useState<IMovie[] | undefined>()
	useEffect(() => {
		setMovies(data?.results)
	}, [fetchData, data])
	return (
		<div className='row'>
			<h2>{title}</h2>
			<div className='row__posters'>
				{movies?.map(
					item =>
						item.backdrop_path && (
							<img
								className='row__poster'
								key={item.id}
								src={`${pointForImage}/${item.backdrop_path}`}
								alt={item.name}
								draggable={false}
							/>
						)
				)}
			</div>
		</div>
	)
}

export default Row
