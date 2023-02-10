const db = require('../db')
const Cars = require('../models/cars')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const seedCars = async () => {
    const cars = [
        {
            image: '',
            owner: '',
            make: '',
            model: '',
            year: 2000,
        },
        {
            image: '',
            owner: '',
            make: '',
            model: '',
            year: 2000,
        },
        {
            image: '',
            owner: '',
            make: '',
            model: '',
            year: 2000,
        },
        {
            image: '',
            owner: '',
            make: '',
            model: '',
            year: 2000,
        },
        {
            image: '',
            owner: '',
            make: '',
            model: '',
            year: 2000,
        },
        {
            image: '',
            owner: '',
            make: '',
            model: '',
            year: 2000,
        },
        {
            image: '',
            owner: '',
            make: '',
            model: '',
            year: 2000,
        },
        {
            image: '',
            owner: '',
            make: '',
            model: '',
            year: 2000,
        },
        {
            image: '',
            owner: '',
            make: '',
            model: '',
            year: 2000,
        },
        {
            image: '',
            owner: '',
            make: '',
            model: '',
            year: 2000,
        },
    ]

    await Cars.insertMany(cars)
    console.log('Created some cars!')
}
const run = async () => {
    await seedCars()
    db.close()
}

run()
