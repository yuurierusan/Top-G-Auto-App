import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../styles/cardetail.css'

const CarDetail = () => {
    let { carId } = useParams()
    const [car, setCar] = useState({})
    const [projects, setProjects] = useState([])
    const [comments, setComments] = useState([])

    const fetchDetails = async () => {
        const res = await axios.get(
            `http://localhost:3001/projects/car/${carId}`
        )
        console.log(res.data)
        setProjects(res.data)
        setCar(res.data[0].car)
    }

    const fetchComments = async () => {
        const response = await axios.get(
            `http://localhost:3001/comments/car/${carId}`
        )
        console.log(response.data)
        setComments(response.data.comment)
    }

    useEffect(() => {
        fetchDetails()
        fetchComments()
    }, [carId])

    return (
        <div className='details-container'>
            <h1>{car.make} Project</h1>
            <img src={car.image} alt='car' />
            <h3>
                {car.year} {car.make}
            </h3>
            <h5>{car.model}</h5>

            <div className='project-map'>
                {projects?.map((project) => (
                    <div key={project._id}>
                        <p>
                            {project.title} <br />
                            Duration: {project.startDate} - {project.endDate}{' '}
                            <br />
                            {project.content} <br />
                            {project.location}
                        </p>
                    </div>
                ))}
            </div>
            <div className='comment-map'>
                {comments?.map((comment) => (
                    <div key={comment._id}>
                        <p>
                            Name: {comment.name} <br />
                            Comment:{comment.comment}
                        </p>
                    </div>
                ))}
            </div>
            <div className='create-project'>
                <a href={`/projects/${carId}`} className='button-link'>
                    Create New Project
                </a>
            </div>
            <br />
            <div className='create-comment'>
                <a href={`/comments/${carId}`} className='button-link'>
                    Create New Comment
                </a>
            </div>
        </div>
    )
}
export default CarDetail
