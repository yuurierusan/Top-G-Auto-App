const Car = require('../models/cars')

const createCar = async (req, res) => {
    try {
        const car = await new Car(req.body)
        await car.save()
        return res.status(201).json({
            car,
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find()
        return res.status(200).json({ plants })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    createCar,
    getAllCars,
}
