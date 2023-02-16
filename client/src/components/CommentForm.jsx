import '../styles/commentform.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const CommentForm = () => {
    const navigate = useNavigate()
    const initialState = {
        name: '',
        comment: '',
    }

    const { carId } = useParams()
    const [formState, setFormState] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(
            `http://localhost:3001/app/comments/create/${carId}`,
            formState
        )
        setFormState(initialState)
        navigate(`/car/detail/${carId}`)
    }

    const handleChange = (e) =>
        setFormState({ ...formState, [e.target.id]: e.target.value })

    return (
        <form className='form' onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input
                type='text'
                id='name'
                onChange={handleChange}
                value={formState.name}
            />
            <br />
            <textarea
                id='comment'
                cols='30'
                rows='2'
                onChange={handleChange}
                value={formState.comment}></textarea>
            <br />
            <button type='submit'>Create</button>
        </form>
    )
}

export default CommentForm
