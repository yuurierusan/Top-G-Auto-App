const Schema = mongoose.Schema

const Comments = new Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        content: { type: String, required: true },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Comments', Comments)
