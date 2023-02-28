import { Route, Routes } from 'react-router-dom'

import './App.css'
import HomeScreen from './components/HomeScreen'
import LoginScreen from './components/LoginScreen'

const App = () => {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<HomeScreen />} />
				<Route path='/login' element={<LoginScreen />} />
			</Routes>
		</div>
	)
}

export default App
