const db = require('../db')
const Projects = require('../models/projects')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const projects = []

    await Projects.insertMany(projects)
    console.log('Created some projects!')
}
const run = async () => {
    await main()
    db.close()
}

run()
