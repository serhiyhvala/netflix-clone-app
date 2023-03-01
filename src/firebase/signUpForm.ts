import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword
} from 'firebase/auth'

import { auth } from './firebase'

export const createUser = async (email: string, password: string) => {
	await createUserWithEmailAndPassword(auth, email, password)
}

export const signInUser = async (email: string, password: string) => {
	await signInWithEmailAndPassword(auth, email, password)
}
