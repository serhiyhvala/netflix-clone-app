import { FC, useEffect, useState } from 'react'

import { ITopRatedRow } from '../../app.types'
import { pointForImage } from '../../constants'
import { IMovie } from '../../services/getAllMovies.types'
import { useGetTopRatedQuery } from '../../services/moviesApi'
import '../Row/Row.scss'

const TopRatedRow: FC<ITopRatedRow> = ({ title }) => {
	const { data: topRated } = useGetTopRatedQuery('top_rated')
	const [topRatedRow, setTopRatedRow] = useState<IMovie[] | undefined>()
	useEffect(() => {
		setTopRatedRow(topRated?.results)
	}, [topRated])
	return (
		<div className='row'>
			<h2>{title}</h2>
			<div className='row__posters'>
				{topRatedRow?.map(
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

export default TopRatedRow
