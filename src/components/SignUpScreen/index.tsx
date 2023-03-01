import React, { FormEvent, useState } from 'react'

import { createUser, signInUser } from '../../firebase/signUpForm'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setError, setUserEmail } from '../../store/userSlice'

import styles from './sign_up_screen.module.scss'

const SignUpScreen = () => {
	const { userEmail, errorAuth } = useAppSelector(state => state.user)
	const dispatch = useAppDispatch()
	const [inputValue, setInputValue] = useState({
		email: userEmail,
		password: ''
	})
	const [isSignIn, setIsSignIn] = useState(true)

	const { email, password } = inputValue

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue({ ...inputValue, [e.target.type]: e.target.value })
		dispatch(setError(null))
	}

	const isEmailAndPasswordExist = email && password
	const isUserError = errorAuth ? styles.errorInput : ''

	const signUp = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		isEmailAndPasswordExist &&
			(await createUser(email, password).catch(error =>
				dispatch(setError(error.code))
			))
		dispatch(setUserEmail(''))
		setInputValue({ ...inputValue, password: '' })
	}

	const signIn = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		isEmailAndPasswordExist &&
			(await signInUser(email, password).catch(error =>
				dispatch(setError(error.code))
			))
		dispatch(setUserEmail(''))
		setInputValue({ ...inputValue, password: '' })
	}

	return (
		<div className={styles.content}>
			<form onSubmit={isSignIn ? signIn : signUp} className={styles.signInForm}>
				<h1>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
				<input
					type='email'
					value={inputValue.email}
					placeholder='Email'
					onChange={e => handleChangeInput(e)}
					required={true}
					className={isUserError}
				/>
				<input
					type='password'
					value={inputValue.password}
					placeholder='Password'
					onChange={e => handleChangeInput(e)}
					required={true}
					className={isUserError}
				/>
				<span className={styles.errorMessage}>{errorAuth}</span>
				<button type='submit' className={styles.button}>
					{isSignIn ? 'Sign In' : 'Sign Up'}
				</button>
				<h4>
					<span className={styles.grayColor}>
						{isSignIn ? 'New To Netflix? ' : 'Already Have Account? '}
					</span>
					<span className={styles.link} onClick={() => setIsSignIn(!isSignIn)}>
						{isSignIn ? 'Sign Up Now' : 'Sign In Now'}
					</span>
				</h4>
			</form>
		</div>
	)
}

export default SignUpScreen
