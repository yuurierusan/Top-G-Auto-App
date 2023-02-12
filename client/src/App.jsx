import { useState } from 'react'
import { Routes } from 'react-router-dom'
import './styles/App.css'
import Home from './pages/Home'
import About from './pages/About'
import Cars from './pages/Cars'
const App = () => {
    return (
        <div className='App'>
            <Home />
            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/cars' element={<Cars />} />
            </Routes>
        </div>
    )
}

export default App
