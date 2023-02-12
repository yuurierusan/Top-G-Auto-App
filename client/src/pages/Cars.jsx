import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import CarCard from '../components/CarCard'

const ViewCars = (props) => {
    let { carId } = useParams()
    console.log(carId)

    const [cars, setCars] = useState([])

    const getCars = async () => {
        try {
            const response = await axios.get(Key)
            setCars(response.data)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getCars()
    }, [carId])

    return (
        <div className='car-container'>
            {cars.map((car) => (
                <div key={car.id}>
                    <Link to={`cars/projects/${car.id}`}>
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
