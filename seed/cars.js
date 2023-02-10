const db = require('../db')
const Cars = require('../models/cars')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const cars = []

    await Cars.insertMany(plants)
    console.log('Created some plants!')
}
const run = async () => {
    await main()
    db.close()
}

run()
