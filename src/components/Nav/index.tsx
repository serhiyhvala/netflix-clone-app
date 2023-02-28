import { useEffect, useState } from 'react'

import NetflixLogo from '../../assets/NetflixLogo.png'
import NetflixUserLogo from '../../assets/NetflixUserLogo.png'

import './Nav.scss'

const Nav = () => {
	const [show, handleShow] = useState(false)
	const transitionNavBar = () => {
		if (window.scrollY > 100) {
			handleShow(true)
		} else {
			handleShow(false)
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', transitionNavBar)
		return () => window.removeEventListener('scroll', transitionNavBar)
	}, [])
	return (
		<div className={`nav ${show && 'nav__black'}`}>
			<div className='nav__contents'>
				<img className='nav__logo' src={NetflixLogo} alt='Netflix Logo' />
				<img
					className='nav__avatar'
					src={NetflixUserLogo}
					alt='Netflix User Logo'
				/>
			</div>
		</div>
	)
}

export default Nav
