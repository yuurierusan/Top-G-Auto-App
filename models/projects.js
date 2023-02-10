const { default: mongoose } = require('mongoose')

const Schema = mongoose.Schema

const Projects = new Schema(
    {
        title: { type: String, required: true },
        // car: { type: mongoose.Schema.Types.ObjectId, required: true },
        startDate: { type: String, required: true },
        endDate: { type: String, required: true },
        location: { type: String, required: false },
        content: { type: String, required: true },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Projects', Projects)
