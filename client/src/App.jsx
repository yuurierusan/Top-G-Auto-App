import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Home from './pages/Home'
import About from './pages/About'
import Nav from './components/Nav'
// import Cars from './pages/Cars'
const App = () => {
    return (
        <div className='App'>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                {/* <Route path='/cars' element={<Cars />} /> */}
            </Routes>
        </div>
    )
}

export default App
