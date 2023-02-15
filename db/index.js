const mongoose = require('mongoose')
require('dotenv').config()
const MONGODB = process.env.MONGODB_URI

mongoose
    .connect(MONGODB)
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch((e) => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
