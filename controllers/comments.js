const Comments = require('../models/cars')

const createComment = async (req, res) => {
    try {
        const comment = await new Comment(req.body)
        await comment.save()
        return res.status(201).json({
            car,
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createComment,
}
