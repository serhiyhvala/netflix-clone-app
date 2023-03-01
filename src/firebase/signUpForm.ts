import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword
} from 'firebase/auth'

import { auth } from './firebase'

export const createUser = async (email: string, password: string) => {
	await createUserWithEmailAndPassword(auth, email, password).catch(error => {
		console.error(error)
	})
}

export const signInUser = async (emailRef: string, passwordRef: string) => {
	await signInWithEmailAndPassword(auth, emailRef, passwordRef)
		.then(authUser => {
			console.log(authUser)
		})
		.catch(error => {
			console.error(error)
		})
}
