import EditCommentForm from '../components/EditCommentForm'
import { useLocation } from 'react-router-dom'

const EditComment = () => {
    const location = useLocation()
    const { comment } = location.state
    console.log(comment)
    return (
        <div>
            <EditCommentForm comment={comment} />
        </div>
    )
}

export default EditComment
