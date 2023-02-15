import '../styles/home.css'
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import CardToCars from '../components/CardToCars'
import CardToAbout from '../components/CardToAbout'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='header-home'>
                <Header />
            </div>
            <div className='link-container'>
                <div className='about-link'>
                    <Link to={'/about'}>
                        <CardToAbout />
                    </Link>
                </div>
                <div className='cars-link'>
                    <Link to={'/cars'}>
                        <CardToCars />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
