const Projects = require('../models/projects')

const createProject = async (req, res) => {
    try {
        const project = await new Plant(req.body)
        await project.save()
        return res.status(201).json({
            project,
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createProject,
}
