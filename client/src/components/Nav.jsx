import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Nav = () => {
    return (
        <div>
            <nav className='nav'>
                <Link to={'/'}>Home 🏠</Link>
                <Link to={'/about'}>About 📝</Link>
                <Link to={'/cars'}>Cars 🚗</Link>
            </nav>
        </div>
    )
}
export default Nav
