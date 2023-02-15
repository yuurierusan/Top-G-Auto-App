import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/projectform.css'

const ProjectForm = () => {
    const initialState = {
        title: '',
        startDate: '',
        endDate: '',
        location: '',
        content: '',
    }

    const [formState, setFormState] = useState(initialState)

    let { carId } = useParams()
    console.log(carId)
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`/projects/${carId}`, formState)
        setFormState(initialState)
    }

    const handleChange = (e) =>
        setFormState({ ...formState, [e.target.id]: e.target.value })

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Project Title:</label>
                <input
                    type='text'
                    id='title'
                    onChange={handleChange}
                    value={formState.title}
                />
                <label htmlFor='startDate'>Start Date:</label>
                <input
                    type='text'
                    id='startDate'
                    onChange={handleChange}
                    value={formState.startDate}
                />
                <label htmlFor='endDate'>End Date:</label>
                <input
                    type='text'
                    id='endDate'
                    onChange={handleChange}
                    value={formState.endDate}
                />
                <label htmlFor='location'>Location:</label>
                <input
                    type='text'
                    id='location'
                    onChange={handleChange}
                    value={formState.location}
                />
                <label htmlFor='content'>Content:</label>
                <textarea
                    id='content'
                    cols='30'
                    rows='10'
                    onChange={handleChange}
                    value={formState.content}></textarea>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default ProjectForm
