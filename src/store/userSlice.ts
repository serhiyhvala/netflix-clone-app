import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type isLoginUserData = {
	email: string | null
	uid: string | null
}

export type InitialStateType = {
	isLogin: boolean
	isLoginUserData: isLoginUserData
}

const initialState: InitialStateType = {
	isLogin: false,
	isLoginUserData: { email: '', uid: '' }
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
		}
	}
})

export const { loginUser, logoutUser } = userSlice.actions
export default userSlice.reducer
