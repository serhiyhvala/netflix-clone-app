import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { errorCode } from '../constants'

export type isLoginUserData = {
	email: string | null
	uid: string | null
}

export type InitialStateType = {
	isLogin: boolean
	isLoginUserData: isLoginUserData
	userEmail: string
	errorAuth: string | null
}

const initialState: InitialStateType = {
	isLogin: false,
	isLoginUserData: { email: '', uid: '' },
	userEmail: '',
	errorAuth: null
}

export const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {
		loginUser: (
			state: InitialStateType,
			action: PayloadAction<isLoginUserData>
		) => {
			state.isLoginUserData = {
				...state.isLoginUserData,
				email: action.payload.email,
				uid: action.payload.uid
			}
			state.isLogin = true
		},
		logoutUser: state => {
			state.isLogin = false
		},
		setUserEmail: (state: InitialStateType, action: PayloadAction<string>) => {
			state.userEmail = action.payload
		},
		setError: (
			state: InitialStateType,
			action: PayloadAction<string | null>
		) => {
			state.errorAuth =
				action.payload && errorCode.hasOwnProperty(action.payload)
					? // 	@ts-ignore
					  errorCode[action.payload]
					: null
		}
	}
})

export const { loginUser, logoutUser, setUserEmail, setError } =
	userSlice.actions
export default userSlice.reducer
