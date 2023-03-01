import { FormEvent, useRef } from 'react'

import { createUser, signInUser } from '../../firebase/signUpForm'

import styles from './sign_up_screen.module.scss'

const SignUpScreen = () => {
	const emailRef = useRef<HTMLInputElement>(null)
	const passwordRef = useRef<HTMLInputElement>(null)
	const isEmailAndPasswordExist =
		emailRef.current !== null && passwordRef.current !== null
	const signIn = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (isEmailAndPasswordExist) {
			await createUser(emailRef.current.value, passwordRef.current.value)
		}
	}
	const signUp = async (e: FormEvent<HTMLInputElement>) => {
		e.preventDefault()
		if (isEmailAndPasswordExist) {
			await signInUser(emailRef.current.value, passwordRef.current.value)
		}
	}
	return (
		<div className={styles.content}>
			<form onSubmit={signIn} className={styles.signInForm}>
				<h1>Sign In</h1>
				<input ref={emailRef} type='email' placeholder='Email' />
				<input ref={passwordRef} type='password' placeholder='Password' />
				<button type='submit' className={styles.button}>
					Sign In
				</button>
				<h4>
					<span className={styles.grayColor}>New To Netflix? </span>
					{/*@ts-ignore*/}
					<span className={styles.link} onClick={signUp}>
						Sign Up Now
					</span>
				</h4>
			</form>
		</div>
	)
}

export default SignUpScreen
