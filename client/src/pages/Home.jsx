import '../styles/home.css'
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import ButtonToCars from '../components/ButtonToCars'
import ButtonToAbout from '../components/ButtonToAbout'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='header-home'>
                <Header />
            </div>
            <div className='link-container'>
                <div className='about-link'>
                    <Link to={'/about'}>
                        <ButtonToAbout />
                    </Link>
                </div>
                <div className='cars-link'>
                    <Link to={'/cars'}>
                        <ButtonToCars />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
