const Comment = require('../models/comments')

const createComment = async (req, res) => {
    try {
        let { carId } = req.params
        req.body = { ...req.body, car: carId }
        console.log(req.body)
        const comment = await new Comment(req.body)
        await comment.save()
        return res.status(201).json({
            comment,
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllComments = async (req, res) => {
    try {
        const comments = await Comments.find()
        return res.status(200).json({ comments })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getCommentById = async (req, res) => {
    try {
        const { carId } = req.params
        const comment = await Comment.find({ car: carId })
        if (comment) {
            return res.status(200).json({ comment })
        }
        return res
            .status(404)
            .send('A comment with the specified ID does not exists')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateComment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        )
        res.status(200).json(comment)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteComment = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Comment.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Comment deleted')
        }
        throw new Error('Comment not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    createComment,
    getAllComments,
    getCommentById,
    updateComment,
    deleteComment,
}
