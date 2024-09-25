import { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Delivery from './pages/Delivery'
import Home from './pages/Home'
import Loader from './pages/Loader' // Import the Loader
import OneTire from './pages/OneTire'
import OneWheel from './pages/OneWheel'
import Payment from './pages/Payment'
import Tires from './pages/Tires'
import Wheels from './pages/Wheels'

const App = () => {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 0)

		return () => clearTimeout(timer)
	}, [])

	return (
		<Router>
			<div className='bg-[#fcfcfc] w-100%'>
				<Navbar />
				{loading ? (
					<Loader />
				) : (
					<Routes>
						<Route path='/tires' element={<Tires />} />
						<Route path='/wheels' element={<Wheels />} />
						<Route path='/about' element={<About />} />
						<Route path='/tire/:id' element={<OneTire />} />
						<Route path='/contacts' element={<Contacts />} />
						<Route path='/payment' element={<Payment />} />
						<Route path='/wheel/:id' element={<OneWheel />} />
						<Route path='/delivery' element={<Delivery />} />
						<Route path='/' element={<Home />} />
					</Routes>
				)}
				<Footer />
			</div>
		</Router>
	)
}

export default App
