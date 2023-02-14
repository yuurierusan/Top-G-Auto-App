const { default: mongoose } = require('mongoose')

const Schema = mongoose.Schema

const Comments = new Schema(
    {
        name: { type: String, required: true },
        comment: { type: String, required: true },
        project: { type: Schema.Types.ObjectId, ref: 'Projects' },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Comments', Comments)
