import EditProjectForm from '../components/EditProjectForm'
import { useLocation } from 'react-router-dom'

const EditProject = () => {
    const location = useLocation()
    const { project } = location.state
    console.log(project)
    return (
        <div>
            <EditProjectForm project={project} />
        </div>
    )
}

export default EditProject
