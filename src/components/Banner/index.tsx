import { useEffect, useState } from 'react'

import { pointForImage } from '../../constants'
import { IMovie } from '../../services/getAllMovies.types'
import { useGetNetflixOriginalsQuery } from '../../services/moviesApi'

import './Banner.scss'

const Banner = () => {
	const { data } = useGetNetflixOriginalsQuery('tv')

	const [movie, setMovies] = useState<IMovie | undefined>()

	const truncate = (string: string, n: number): string => {
		return string?.length > n ? string.substring(0, n - 1) + '...' : string
	}

	const randomNumber =
		data && Math.floor(Math.random() * data?.results.length - 1)

	useEffect(() => {
		randomNumber && setMovies(data?.results[randomNumber])
	}, [data, randomNumber])

	return (
		<header
			className='banner'
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url(${pointForImage}/${movie?.backdrop_path})`,
				backgroundPosition: 'center'
			}}
		>
			<div className='banner__contents'>
				<h1 className='banner__title'>
					{movie?.name || movie?.original_name || movie?.title}
				</h1>
				<div className='banner__buttons'>
					<button className='banner__button'>Play</button>
					<button className='banner__button'>My List</button>
				</div>
				<div className='banner__description'>
					{movie?.overview && truncate(movie.overview, 150)}
				</div>
			</div>
			<div className='banner__fadeBottom'></div>
		</header>
	)
}

export default Banner
