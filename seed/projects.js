const db = require('../db')
const Projects = require('../models/projects')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const seedProjects = async () => {
    const projects = [
        {
            title: '',
            startDate: '',
            endDate: '',
            location: '',
            content: '',
        },
        {
            title: '',
            startDate: '',
            endDate: '',
            location: '',
            content: '',
        },
        {
            title: '',
            startDate: '',
            endDate: '',
            location: '',
            content: '',
        },
        {
            title: '',
            startDate: '',
            endDate: '',
            location: '',
            content: '',
        },
        {
            title: '',
            startDate: '',
            endDate: '',
            location: '',
            content: '',
        },
        {
            title: '',
            startDate: '',
            endDate: '',
            location: '',
            content: '',
        },
        {
            title: '',
            startDate: '',
            endDate: '',
            location: '',
            content: '',
        },
        {
            title: '',
            startDate: '',
            endDate: '',
            location: '',
            content: '',
        },
        {
            title: '',
            startDate: '',
            endDate: '',
            location: '',
            content: '',
        },
        {
            title: '',
            startDate: '',
            endDate: '',
            location: '',
            content: '',
        },
    ]

    await Projects.insertMany(projects)
    console.log('Created some projects!')
}
const run = async () => {
    await seedProjects()
    db.close()
}

run()
