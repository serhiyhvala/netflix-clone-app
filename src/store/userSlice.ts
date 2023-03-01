import { createSlice } from '@reduxjs/toolkit'

export type InitialStateType = {
	isLogin: boolean
}

const initialState: InitialStateType = {
	isLogin: false
}

export const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {
		loginUser: (state: InitialStateType, action) => {
			state.isLogin = action.payload
		},
		logoutUser: state => {
			state.isLogin = false
		}
	}
})

export const { loginUser, logoutUser } = userSlice.actions
export default userSlice.reducer
