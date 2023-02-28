import './Banner.scss'

const Banner = () => {
	const truncate = (string: string, n: number): string => {
		return string?.length > n ? string.substring(0, n - 1) + '...' : string
	}
	return (
		<header
			className='banner'
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/c/cd/Black_flag.svg")`,
				backgroundPosition: 'center center'
			}}
		>
			<div className='banner__contents'>
				<h1 className='banner__title'>Movie Name</h1>
				<div className='banner__buttons'>
					<button className='banner__button'>Play</button>
					<button className='banner__button'>My List</button>
				</div>
				<div className='banner__description'>
					{truncate('This is a test description', 120)}
				</div>
				<div className='banner__fadeBottom'></div>
			</div>
		</header>
	)
}

export default Banner
