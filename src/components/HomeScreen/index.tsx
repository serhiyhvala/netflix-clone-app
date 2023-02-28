import {
	ActionMovies,
	ComedyMovies,
	DocumentaryMovies,
	HorrorMovies,
	RomanceMovies
} from '../../services/moviesByGenre.enum'
import AllMoviesRow from '../AllMoviesRow'
import Banner from '../Banner'
import Nav from '../Nav'
import NetflixOriginalRow from '../NetflixOriginalRow'
import Row from '../Row'
import TopRatedRow from '../TopRatedRow'

import './HomeScreen.scss'

const HomeScreen = () => {
	return (
		<div className='homeScreen'>
			<Nav />
			<Banner />
			<NetflixOriginalRow title='Netflix Original' isLarge={true} />
			<AllMoviesRow title='Trending Now' />
			<TopRatedRow title='Top Rated' />
			<Row title='Action Movie' fetchData={ActionMovies} />
			<Row title='Comedy Movie' fetchData={ComedyMovies} />
			<Row title='Horror Movie' fetchData={HorrorMovies} />
			<Row title='Romance Movie' fetchData={RomanceMovies} />
			<Row title='Documentaries' fetchData={DocumentaryMovies} />
		</div>
	)
}

export default HomeScreen
