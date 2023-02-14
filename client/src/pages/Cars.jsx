import '../styles/Cars.css'

import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CarCard from '../components/CarCard'
import Nav from '../components/Nav'

const ViewCars = (props) => {
    let { carId } = useParams()

    const [cars, setCars] = useState([])

    const getCars = async () => {
        try {
            const res = await axios.get('http://localhost:3001/cars')
            setCars(res.data.cars)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getCars()
    }, [carId])

    return (
        <div className='car-container'>
            <div className='nav-home'>
                <Nav />
            </div>
            {cars.map((car) => (
                <div className='cars-a' key={car._id}>
                    <Link to={`/cars/${car._id}`}>
                        <CarCard
                            image={car.image}
                            make={car.make}
                            model={car.model}
                            year={car.year}
                        />
                    </Link>
                </div>
            ))}
        </div>
    )
}
export default ViewCars
