import { Routes, Route } from 'react-router-dom'
import './styles/app.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import ViewCars from './pages/Cars'
import CarDetail from './pages/CarDetail'
import CreateCar from './pages/CreateCar'
import CreateProject from './components/ProjectForm'
import CreateComment from './components/CommentForm'
import EditComment from './pages/EditComment'
import EditProject from './pages/EditProject'

const App = () => {
    return (
        <div className='App'>
            <div className='nav-home'>
                <Nav />
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/cars' element={<ViewCars />} />
                <Route path='/car/detail/:carId' element={<CarDetail />} />
                <Route path='/cars/create' element={<CreateCar />} />
                <Route
                    path='/projects/create/:carId'
                    element={<CreateProject />}
                />
                <Route
                    path='/comments/create/:carId'
                    element={<CreateComment />}
                />
                <Route
                    path='/comment/edit/:commentId/'
                    element={<EditComment />}
                />
                <Route
                    path='/project/edit/:projectId/'
                    element={<EditProject />}
                />
            </Routes>
        </div>
    )
}

export default App
