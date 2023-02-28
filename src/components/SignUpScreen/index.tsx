import { FormEvent } from 'react'

import './SignUpScreen.scss'

const SignUpScreen = () => {
	const signIn = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}
	return (
		<div className='signUpScreen'>
			<form onSubmit={signIn}>
				<h1>Sign In</h1>
				<input type='email' placeholder='Email' />
				<input type='password' placeholder='Password' />
				<button type='submit'>Sign In</button>
				<h4>
					<span className='signUpScreen__grayColor'>New To Netflix? </span>
					<span className='signUpScreen__link'>Sign Up Now</span>
				</h4>
			</form>
		</div>
	)
}

export default SignUpScreen
