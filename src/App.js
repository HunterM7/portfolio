import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Screens/Home/Home'
import Projects from './components/Screens/Projects/Projects'

function App() {
	return (
		<div className='App'>
			<div className='header'>
				<Navbar />
			</div>
			<div className='container App__container'>
				<Routes>
					<Route element={<Home />} path='/' />
					<Route element={<Projects />} path='projects' />
				</Routes>
			</div>
		</div>
	)
}

export default App
