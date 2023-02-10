const db = require('../db')
const Cars = require('../models/cars')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const cars = []

    await Cars.insertMany(cars)
    console.log('Created some cars!')
}
const run = async () => {
    await main()
    db.close()
}

run()
