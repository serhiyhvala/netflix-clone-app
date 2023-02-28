import { FC, useEffect, useState } from 'react'

import { IAllMoviesRow } from '../../app.types'
import { pointForImage } from '../../constants'
import { IMovie } from '../../services/getAllMovies.types'
import { useGetAllMoviesQuery } from '../../services/moviesApi'
import '../Row/Row.scss'

const AllMoviesRow: FC<IAllMoviesRow> = ({ title }) => {
	const { data: allMovies } = useGetAllMoviesQuery('trending')
	const [allMoviesRow, setAllMoviesRow] = useState<IMovie[] | undefined>()
	useEffect(() => {
		setAllMoviesRow(allMovies?.results)
	}, [allMovies])
	return (
		<div className='row'>
			<h2>{title}</h2>
			<div className='row__posters'>
				{allMoviesRow?.map(
					item =>
						item.backdrop_path && (
							<img
								className={`row__poster`}
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

export default AllMoviesRow
