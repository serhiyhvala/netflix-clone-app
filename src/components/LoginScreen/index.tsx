import { useState } from 'react'

import NetflixLogo from '../../assets/NetflixLogo.png'
import { useAppDispatch } from '../../store/hooks'
import { setUserEmail } from '../../store/userSlice'
import SignUpScreen from '../SignUpScreen'

import './LoginScreen.scss'

const LoginScreen = () => {
	const [signIn, setSignIn] = useState(false)
	const dispatch = useAppDispatch()
	return (
		<div className='loginScreen'>
			<div className='loginScreen__background'>
				<img className='loginScreen__logo' src={NetflixLogo} alt='' />
				<button onClick={() => setSignIn(true)} className='loginScreen__button'>
					Sign In
				</button>
				<div className='loginScreen__gradient' />
			</div>
			<div className='loginScreen__body'>
				{signIn ? (
					<SignUpScreen />
				) : (
					<>
						<h1>Unlimited films, TV programmes and more.</h1>
						<h2>Watch anywhere. Cancel at any time</h2>
						<h3>
							Ready to watch? Enter email to create or restart your membership
						</h3>

						<div className='loginScreen__input'>
							<form>
								<input
									type='email'
									placeholder='Email Address'
									onChange={e => dispatch(setUserEmail(e.target.value))}
								/>
								<button
									onClick={() => setSignIn(true)}
									className='loginScreen__getStarted'
								>
									Get Started
								</button>
							</form>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default LoginScreen
