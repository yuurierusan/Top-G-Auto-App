import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import axios from 'axios'
import '../styles/cardetail.css'
// import { updateComment } from '../../../controllers/comments'

const CarDetail = () => {
    let { carId } = useParams()

    const [car, setCar] = useState({})
    const [projects, setProjects] = useState([])
    const [comments, setComments] = useState([])

    const getCar = async () => {
        const res = await axios.get(`http://localhost:3001/app/cars/${carId}`)
        setCar(res.data.car)
    }

    const getProjects = async () => {
        const resTwo = await axios.get(
            `http://localhost:3001/app/projects/car/${carId}`
        )
        setProjects(resTwo.data)
    }

    const getComments = async () => {
        const resTwo = await axios.get(
            `http://localhost:3001/app/comments/car/${carId}`
        )
        setComments(resTwo.data.comment)
    }

    const updateProject = async () => {}

    const updateComments = async () => {}

    const deleteProject = async (project) => {
        console.log(project)
        await axios.delete(
            `http://localhost:3001/app/projects/delete/${project._id}`
        )
        try {
            const res = await axios.get(
                `http://localhost:3001/app/projects/car/${carId}`
            )
            setProjects(res.data)
        } catch (e) {
            console.error('Error Deleting Project', e)
        }
    }

    const deleteComment = async (comment) => {
        console.log(comment)
        await axios.delete(
            `http://localhost:3001/app/comments/delete/${comment._id}`
        )
        try {
            const resTwo = await axios.get(
                `http://localhost:3001/app/comments/car/${carId}`
            )
            setComments(resTwo.data.comment)
        } catch (e) {
            console.error('Error Deleting Comment', e)
        }
    }

    useEffect(() => {
        getCar()
        getProjects()
        getComments()
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
                {projects.map((project) => (
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
                        <Link
                            to={`/project/edit/${project._id}`}
                            state={{ project: project }}>
                            <button className='button-link'>
                                Edit Project
                            </button>
                        </Link>
                        <button
                            className='button-link'
                            onClick={() => deleteProject(project)}>
                            Delete Project
                        </button>
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
                {comments.map((comment) => (
                    <div key={comment._id}>
                        <p>
                            <br />
                            Name: {comment.name}
                            <br />
                            Comment:{comment.comment}
                            <br />
                        </p>
                        <Link
                            to={`/comment/edit/${comment._id}`}
                            state={{ comment: comment }}>
                            <button className='button-link'>
                                Edit Comment
                            </button>
                        </Link>
                        <button
                            className='button-link'
                            onClick={() => deleteComment(comment)}>
                            Delete Comment
                        </button>
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
