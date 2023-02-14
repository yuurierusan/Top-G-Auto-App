import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ViewCars from './pages/Cars'
import CarDetail from './pages/CarDetail'
import CreateProject from './components/ProjectForm'
import CreateComment from './components/CommentForm'

const App = () => {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/cars' element={<ViewCars />} />
                <Route path='/cars/:carId' element={<CarDetail />} />
                <Route path='/projects/:carId' element={<CreateProject />} />
                <Route path='/project/${car._id}' element={<CreateComment />} />
            </Routes>
        </div>
    )
}

export default App
