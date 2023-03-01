import { useEffect, useState } from 'react'

import NetflixLogo from '../../assets/NetflixLogo.png'
import NetflixUserLogo from '../../assets/NetflixUserLogo.png'

import styles from './nav.module.scss'

const Nav = () => {
	const [show, handleShow] = useState(false)
	const transitionNavBar = () => {
		if (window.scrollY > 100) {
			handleShow(true)
		} else {
			handleShow(false)
		}
	}
	const isShowNavBlack = show && styles.black
	useEffect(() => {
		window.addEventListener('scroll', transitionNavBar)
		return () => window.removeEventListener('scroll', transitionNavBar)
	}, [])
	return (
		<div className={`${styles.nav} ${isShowNavBlack}`}>
			<div className={styles.content}>
				<img className={styles.logo} src={NetflixLogo} alt='Netflix Logo' />
				<img
					className={styles.avatar}
					src={NetflixUserLogo}
					alt='Netflix User Logo'
				/>
			</div>
		</div>
	)
}

export default Nav
