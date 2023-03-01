import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type isLoginUserData = {
	email: string | null
	uid: string | null
}

export type InitialStateType = {
	isLogin: boolean
	isLoginUserData: isLoginUserData
	userEmail: string
}

const initialState: InitialStateType = {
	isLogin: false,
	isLoginUserData: { email: '', uid: '' },
	userEmail: ''
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
		}
	}
})

export const { loginUser, logoutUser, setUserEmail } = userSlice.actions
export default userSlice.reducer
