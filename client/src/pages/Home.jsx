import '../styles/Header.css'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Header from '../components/Header'
import AboutCard from '../components/AboutCard'
import CarsCard from '../components/CarsCard'

const Home = () => {
    return (
        <div>
            <div className='nav-home'>
                <Nav />
            </div>
            <div className='header-home'>
                <Header />
            </div>
            <div>
                <Link to={'/about'}>
                    <AboutCard />
                </Link>
            </div>
            <div>
                <Link to={'/cars'}>
                    <CarsCard />
                </Link>
            </div>
        </div>
    )
}

export default Home
