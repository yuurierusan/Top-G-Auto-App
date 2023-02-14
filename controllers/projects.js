const Project = require('../models/projects')

const createProject = async (req, res) => {
    try {
        let { carId } = req.params
        req.body = { ...req.body, car: carId }
        const project = await new Project(req.body)
        await project.save()
        return res.status(201).json({
            project,
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllProjects = async (req, res) => {
    try {
        const projects = await Projects.find()
        return res.status(200).json({ projects })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getProjectById = async (req, res) => {
    try {
        const { id } = req.params
        const project = await Project.findById(id)
        if (project) {
            return res.status(200).json({ project })
        }
        return res
            .status(404)
            .send('A project with the specified ID does not exists')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        )
        res.status(200).json(project)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteProject = async (req, res) => {
    try {
        const { id } = req.params
        const project = await Project.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Project deleted')
        }
        throw new Error('Project not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getProjectsByCarId = async (req, res) => {
    try {
        const { carId } = req.params
        const projects = await Project.find({ car: carId }).populate('car')

        return res.status(200).json(projects)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject,
    getProjectsByCarId,
}
