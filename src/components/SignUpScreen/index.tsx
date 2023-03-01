import React, { FormEvent, useState } from 'react'

import { createUser, signInUser } from '../../firebase/signUpForm'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setUserEmail } from '../../store/userSlice'

import styles from './sign_up_screen.module.scss'

const SignUpScreen = () => {
	const userEmail = useAppSelector(state => state.user.userEmail)
	const dispatch = useAppDispatch()
	const [inputValue, setInputValue] = useState({
		email: userEmail,
		password: ''
	})
	const [isSignIn, setIsSignIn] = useState(true)

	const { email, password } = inputValue

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue({ ...inputValue, [e.target.type]: e.target.value })
	}

	const isEmailAndPasswordExist = email !== null && password !== null

	const signUp = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		isEmailAndPasswordExist && (await createUser(email, password))
		dispatch(setUserEmail(''))
		setInputValue({ ...inputValue, password: '' })
	}

	const signIn = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		isEmailAndPasswordExist && (await signInUser(email, password))
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
				/>
				<input
					type='password'
					value={inputValue.password}
					placeholder='Password'
					onChange={e => handleChangeInput(e)}
					required={true}
				/>
				<button type='submit' className={styles.button}>
					{isSignIn ? 'Sign In' : 'Sign Up'}
				</button>
				<h4>
					<span className={styles.grayColor}>
						{isSignIn ? 'New To Netflix? ' : 'Already Have Account? '}
					</span>
					<span className={styles.link} onClick={() => setIsSignIn(!isSignIn)}>
						{isSignIn ? 'Sign In Now' : 'Sign Up Now'}
					</span>
				</h4>
			</form>
		</div>
	)
}

export default SignUpScreen
