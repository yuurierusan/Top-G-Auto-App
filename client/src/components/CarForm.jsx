import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CarForm = () => {
    const navigate = useNavigate()
    const initialState = {
        image: '',
        owner: '',
        make: '',
        model: '',
        year: '',
    }

    const [formState, setFormState] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`http://localhost:3001/app/cars/create`, formState)
        setFormState(initialState)
        navigate(`/cars`)
    }

    const handleChange = (e) =>
        setFormState({ ...formState, [e.target.id]: e.target.value })

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='image'>Image: </label>
                <input type='file' id='image' onChange={handleChange} />
                <br />
                <label htmlFor='owner'>Owner: </label>
                <input
                    type='text'
                    id='owner'
                    onChange={handleChange}
                    value={formState.owner}
                />
                <br />
                <label htmlFor='make'>Make:</label>
                <input
                    type='text'
                    id='make'
                    onChange={handleChange}
                    value={formState.make}
                />
                <br />
                <label htmlFor='model'>Model:</label>
                <input
                    type='text'
                    id='model'
                    onChange={handleChange}
                    value={formState.model}
                />
                <br />
                <label htmlFor='year'>Year:</label>
                <input
                    type='text'
                    id='year'
                    onChange={handleChange}
                    value={formState.year}
                />
                <br />
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default CarForm
