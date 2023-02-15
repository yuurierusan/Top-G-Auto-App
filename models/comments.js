const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Comments = new Schema(
    {
        name: { type: String, required: true },
        comment: { type: String, required: true },
        car: { type: Schema.Types.ObjectId, ref: 'Cars' },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Comments', Comments)
