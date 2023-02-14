import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ViewCars from './pages/Cars'
import Project from './pages/Project'
import CarDetail from './pages/CarDetail'

const App = () => {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/cars' element={<ViewCars />} />
                <Route path='/cars/:carId' element={<CarDetail />} />
                <Route path='/cars/project/${car._id}' element={<Project />} />
            </Routes>
        </div>
    )
}

export default App
