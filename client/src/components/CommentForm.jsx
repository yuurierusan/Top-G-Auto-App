import axios from 'axios'

const CommentForm = ({ newComment }) => {
    const initialState = {
        name: '',
        message: '',
    }

    const [formState, setFormState] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('/comments/:projectId', formState)
        setFormState(initialState)
        newComment()
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
                id='message'
                cols='30'
                rows='10'
                onChange={handleChange}
                value={formState.message}></textarea>
            <button type='submit'>Create</button>
        </form>
    )
}

export default CommentForm
