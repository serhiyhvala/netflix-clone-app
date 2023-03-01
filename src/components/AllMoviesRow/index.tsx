import { FC, useEffect, useState } from 'react'

import { IAllMoviesRow } from '../../app.types'
import { pointForImage } from '../../constants'
import { IMovie } from '../../services/getAllMovies.types'
import { useGetAllMoviesQuery } from '../../services/moviesApi'
import styles from '../Row/row.module.scss'

const AllMoviesRow: FC<IAllMoviesRow> = ({ title }) => {
	const { data: allMovies } = useGetAllMoviesQuery('trending')
	const [allMoviesRow, setAllMoviesRow] = useState<IMovie[] | undefined>()
	useEffect(() => {
		setAllMoviesRow(allMovies?.results)
	}, [allMovies])
	return (
		<div className={styles.row}>
			<h2>{title}</h2>
			<div className={styles.posters}>
				{allMoviesRow?.map(
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

export default AllMoviesRow
