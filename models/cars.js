const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Cars = new Schema(
    {
        image: { type: String, required: false },
        owner: { type: String, required: true },
        make: { type: String, required: true },
        model: { type: String, required: true },
        year: { type: Number, required: false },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Cars', Cars)
