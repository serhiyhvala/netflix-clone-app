import { onAuthStateChanged } from 'firebase/auth'
import React, { FormEvent, useEffect, useState } from 'react'

import { auth } from '../../firebase/firebase'
import { createUser } from '../../firebase/signUpForm'
import { useAppDispatch } from '../../store/hooks'
import { loginUser, logoutUser } from '../../store/userSlice'

import styles from './sign_up_screen.module.scss'

const SignUpScreen = () => {
	const dispatch = useAppDispatch()
	const [inputValue, setInputValue] = useState({ email: '', password: '' })
	const { email, password } = inputValue
	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue({ ...inputValue, [e.target.type]: e.target.value })
	}
	const isEmailAndPasswordExist = email !== null && password !== null
	const signIn = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		isEmailAndPasswordExist && (await createUser(email, password))
		setInputValue({ email: '', password: '' })
	}
	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				dispatch(
					loginUser({
						uid: user.uid,
						email: user.email
					})
				)
			} else {
				dispatch(logoutUser())
			}
		})
	}, [dispatch])
	return (
		<div className={styles.content}>
			<form onSubmit={signIn} className={styles.signInForm}>
				<h1>Sign In</h1>
				<input
					type='email'
					value={inputValue.email}
					placeholder='Email'
					onChange={e => handleChangeInput(e)}
				/>
				<input
					type='password'
					value={inputValue.password}
					placeholder='Password'
					onChange={e => handleChangeInput(e)}
				/>
				<button type='submit' className={styles.button}>
					Sign In
				</button>
				<h4>
					<span className={styles.grayColor}>New To Netflix? </span>
					<span className={styles.link}>Sign Up Now</span>
				</h4>
			</form>
		</div>
	)
}

export default SignUpScreen
