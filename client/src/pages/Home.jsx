import '../styles/Home.css'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Header from '../components/Header'
import AboutCard from '../components/CardToAbout'
import CarsCard from '../components/CardToCars'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='nav-home'>
                <Nav />
            </div>
            <div className='header-home'>
                <Header />
            </div>
            <div className='about-a'>
                <Link to={'/about'}>
                    <AboutCard />
                </Link>
            </div>
            <div className='cars-a'>
                <Link to={'/cars'}>
                    <CarsCard />
                </Link>
            </div>
        </div>
    )
}

export default Home
