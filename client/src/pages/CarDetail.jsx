import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../styles/cardetail.css'
import { updateComment } from '../../../controllers/comments'

const CarDetail = () => {
    let { carId } = useParams()
    let { projectId } = useParams()
    let { commentId } = useParams()

    const [car, setCar] = useState({})
    const [projects, setProjects] = useState([])
    const [comments, setComments] = useState([])

    const getDetails = async () => {
        const res = await axios.get(
            `http://localhost:3001/app/projects/car/${carId}`
        )
        setProjects(res.data)
        setCar(res.data[0].car)
    }

    const getComments = async () => {
        const resTwo = await axios.get(
            `http://localhost:3001/app/comments/car/${carId}`
        )
        setComments(resTwo.data.comment)
    }

    const handleUpdate = async () => {
        const resFive = await axios.get(
            `http://localhost:3001/app/projects/delete/${projectId}`
        )
        console.log(resThree)
    }

    const handleDelete = async () => {
        const resFive = await axios.get(
            `http://localhost:3001/app/comments/delete/${commentId}`
        )
        console.log(resFour)    
    }

    const deleteProject = async () => {
        const resFive = await axios.get(
            `http://localhost:3001/app/projects/delete/${projectId}`
        )
        console.log(resThree)
    }

    const deleteComment = async () => {
        const resFive = await axios.get(
            `http://localhost:3001/app/comments/delete/${commentId}`
        )
        console.log(resFour)    }

    useEffect(() => {
        getDetails()
        getComments()
        updateProject()
        updateComment()
        deleteProject()
        deleteComment()
    }, [])

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
                        <button className='button-link'>Delete Project</button>
                    
                
                    </div>
                ))}
            </div>
            <br />
            <div className='create-project'>
                <a href={`/projects/create/${carId}`} className='button-link'>
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
                        <button className='button-link'>Delete Comment</button>
                    </div>
                ))}
            </div>
            <br />
            <div className='create-comment'>
                <a href={`/comments/create/${carId}`} className='button-link'>
                    Create New Comment
                </a>
            </div>
        </div>
    )
}
export default CarDetail
