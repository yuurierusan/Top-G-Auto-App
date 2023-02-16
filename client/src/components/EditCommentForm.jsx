import '../styles/commentform.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const EditCommentForm = ({ comment }) => {
    const navigate = useNavigate()
    console.log(comment)
    const initialState = {
        name: `${comment.name}`,
        comment: `${comment.comment}`,
    }

    const [formState, setFormState] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put(
            `http://localhost:3001/app/comments/edit/${comment._id}`,
            formState
        )
        navigate(`/car/detail/${comment.car}`)
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
                rows='2'
                onChange={handleChange}
                value={formState.comment}></textarea>
            <button type='submit'>Finish</button>
        </form>
    )
}

export default EditCommentForm
