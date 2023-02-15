import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
const CommentForm = () => {
    const initialState = {
        name: '',
        comment: '',
    }

    const { carId } = useParams()
    const [formState, setFormState] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`/comments/${carId}`, formState)
        setFormState(initialState)
    }

    const handleChange = (e) =>
        setFormState({ ...formState, [e.target.id]: e.target.value })

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input
                type='text'
                id='name'
                onChange={handleChange}
                value={formState.name}
            />
            <textarea
                id='comment'
                cols='30'
                rows='10'
                onChange={handleChange}
                value={formState.comment}></textarea>
            <button type='submit'>Create</button>
        </form>
    )
}

export default CommentForm
