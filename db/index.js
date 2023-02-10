const mongoose = require('mongoose')
const MONGODB_API = process.env.MONGODB_KEY

mongoose
    .connect(MONGODB_API)
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch((e) => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
