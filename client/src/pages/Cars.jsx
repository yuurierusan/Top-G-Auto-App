import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const Key = process.env.MONGODB_KEY

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

    useEffect(()=>{
        getCars()
    },[carId])

    return (
        <div className='car-container'>
            {cars.map((car) =>(
                <div key={car.id}>
                    <Link to={``
            )
        </div>
    )
}
export default Cars
