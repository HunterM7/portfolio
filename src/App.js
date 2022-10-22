import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'

function App() {
	return (
		<div className='App'>
			<div className='header'>
				<Navbar />
			</div>
			<div className='container'>
				<Home />
			</div>
		</div>
	)
}

export default App
