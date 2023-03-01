import { FC, useEffect, useState } from 'react'

import { INetflixOriginalRow } from '../../app.types'
import { pointForImage } from '../../constants'
import { IMovie } from '../../services/getAllMovies.types'
import { useGetNetflixOriginalsQuery } from '../../services/moviesApi'
import styles from '../Row/row.module.scss'

const NetflixOriginalRow: FC<INetflixOriginalRow> = ({ title, isLarge }) => {
	const { data: netflixOriginal } = useGetNetflixOriginalsQuery('tv')
	const [netflixOriginalRow, setNetflixOriginalRow] = useState<
		IMovie[] | undefined
	>()
	const isLargePost = isLarge && styles.posterLarge
	useEffect(() => {
		setNetflixOriginalRow(netflixOriginal?.results)
	}, [netflixOriginal])
	return (
		<div className={styles.row}>
			<h2>{title}</h2>
			<div className={styles.posters}>
				{netflixOriginalRow?.map(
					item =>
						item.backdrop_path && (
							<img
								className={`${styles.poster} ${isLargePost}`}
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
