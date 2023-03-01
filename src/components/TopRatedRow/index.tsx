import { FC, useEffect, useState } from 'react'

import { ITopRatedRow } from '../../app.types'
import { pointForImage } from '../../constants'
import { IMovie } from '../../services/getAllMovies.types'
import { useGetTopRatedQuery } from '../../services/moviesApi'
import styles from '../Row/row.module.scss'

const TopRatedRow: FC<ITopRatedRow> = ({ title }) => {
	const { data: topRated } = useGetTopRatedQuery('top_rated')
	const [topRatedRow, setTopRatedRow] = useState<IMovie[] | undefined>()
	useEffect(() => {
		setTopRatedRow(topRated?.results)
	}, [topRated])
	return (
		<div className={styles.row}>
			<h2>{title}</h2>
			<div className={styles.posters}>
				{topRatedRow?.map(
					item =>
						item.backdrop_path && (
							<img
								className={styles.poster}
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
