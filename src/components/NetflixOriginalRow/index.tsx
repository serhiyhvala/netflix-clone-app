import { FC, useEffect, useState } from 'react'

import { INetflixOriginalRow } from '../../app.types'
import { pointForImage } from '../../constants'
import { IMovie } from '../../services/getAllMovies.types'
import { useGetNetflixOriginalsQuery } from '../../services/moviesApi'
import '../Row/Row.scss'

const NetflixOriginalRow: FC<INetflixOriginalRow> = ({ title, isLarge }) => {
	const { data: netflixOriginal } = useGetNetflixOriginalsQuery('tv')
	const [netflixOriginalRow, setNetflixOriginalRow] = useState<
		IMovie[] | undefined
	>()
	useEffect(() => {
		setNetflixOriginalRow(netflixOriginal?.results)
	}, [netflixOriginal])
	return (
		<div className='row'>
			<h2>{title}</h2>
			<div className='row__posters'>
				{netflixOriginalRow?.map(
					item =>
						item.backdrop_path && (
							<img
								className={`row__poster ${isLarge && 'row__posterLarge'}`}
								key={item.id}
								src={`${pointForImage}/${
									isLarge ? item.poster_path : item.backdrop_path
								}`}
								alt={item.name}
								draggable={false}
							/>
						)
				)}
			</div>
		</div>
	)
}

export default NetflixOriginalRow
