const db = require('../db')
const Comments = require('../models/comments')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const seedComments = async () => {
    const comments = [
        {
            title: '',
            author: '',
            content: '',
        },
        {
            title: '',
            author: '',
            content: '',
        },
        {
            title: '',
            author: '',
            content: '',
        },
        {
            title: '',
            author: '',
            content: '',
        },
        {
            title: '',
            author: '',
            content: '',
        },
        {
            title: '',
            author: '',
            content: '',
        },
        {
            title: '',
            author: '',
            content: '',
        },
        {
            title: '',
            author: '',
            content: '',
        },
        {
            title: '',
            author: '',
            content: '',
        },
        {
            title: '',
            author: '',
            content: '',
        },
        {
            title: '',
            author: '',
            content: '',
        },
    ]

    await Comments.insertMany(comments)
    console.log('Created some comments!')
}
const run = async () => {
    await seedComments()
    db.close()
}

run()
