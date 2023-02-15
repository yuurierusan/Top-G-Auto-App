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
        const res = await axios.get(`/projects/car/${carId}`)
        setProjects(res.data)
        setCar(res.data[0].car)
    }

    const fetchComments = async () => {
        const response = await axios.get(`/comments/car/${carId}`)
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
            <br />
            <h3>Projects</h3>
            <div className='project-map'>
                {projects?.map((project) => (
                    <div key={project._id}>
                        <p>
                            <br />
                            Title: {project.title}
                            <br />
                            Duration: {project.startDate} - {project.endDate}
                            <br />
                            Content: {project.content}
                            <br />
                            Location: {project.location}
                        </p>
                    </div>
                ))}
            </div>
            <br />
            <div className='create-project'>
                <a href={`/projects/${carId}`} className='button-link'>
                    Create New Project
                </a>
            </div>
            <br />
            <h3>Comments</h3>
            <div className='comment-map'>
                {comments?.map((comment) => (
                    <div key={comment._id}>
                        <p>
                            <br />
                            Name: {comment.name}
                            <br />
                            Comment:{comment.comment}
                            <br />
                        </p>
                    </div>
                ))}
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
