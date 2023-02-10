const db = require('../db')
const Comments = require('../models/comments')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const comments = []

    await Comments.insertMany(comments)
    console.log('Created some comments!')
}
const run = async () => {
    await main()
    db.close()
}

run()
