import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Form } from 'react-router-dom'

const CarDetail = () => {
    let { carId } = useParams()
    const [projects, setProjects] = useState([])
    const [car, setCar] = useState({})
    const fetchDetails = async () => {
        const res = await axios.get(
            `http://localhost:3001/projects/car/${carId}`
        )
        console.log(res.data)
        setProjects(res.data)
        setCar(res.data[0].car)
    }

    useEffect(() => {
        fetchDetails()
    }, [carId])

    return (
        <div>
            {car.make}
            {car.model}
            {car.year}
            {projects?.map((project) => (
                <div>
                    {project.title}
                    {project.content}
                </div>
            ))}
            <button>Create Comment</button>
            <button>Create Project</button>
        </div>
    )
}
export default CarDetail
