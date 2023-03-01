import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import HomeScreen from './components/HomeScreen'
import LoginScreen from './components/LoginScreen'
import ProfileScreen from './components/ProfileScreen'
import { auth } from './firebase/firebase'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { loginUser, logoutUser } from './store/userSlice'

const App = () => {
	const user = useAppSelector(state => state.user.isLogin)
	const dispatch = useAppDispatch()
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
		<div className='app'>
			{!user ? (
				<LoginScreen />
			) : (
				<Routes>
					<Route path='/' element={<HomeScreen />} />
					<Route path='/profile' element={<ProfileScreen />} />
				</Routes>
			)}
		</div>
	)
}

export default App
