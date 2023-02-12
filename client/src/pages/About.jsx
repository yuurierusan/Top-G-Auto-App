import Nav from '../components/Nav'
import '../styles/About.css'
const About = () => {
    return (
        <div className='about-content'>
            <div className='nav-home'>
                <Nav />
            </div>
            <div className='about-h1'>
                <h1>About</h1>
            </div>
            <div className='about-h3'>
                <h3>
                    "Welcome to our car club! We are a community of automobile
                    enthusiasts who share a passion for all things automotive.
                    From classic muscle cars to modern sports cars, we
                    appreciate them all. Our club offers a platform for members
                    to connect, share their knowledge and experiences, and
                    organize events and road trips. Whether you are a seasoned
                    collector or just have a love for cars, we invite you to
                    join us and become part of our automotive family. Let's hit
                    the roads and have some fun together!"
                </h3>
            </div>
        </div>
    )
}

export default About
