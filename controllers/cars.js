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
        return res.status(200).json({ cars })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getCarById = async (req, res) => {
    try {
        const { id } = req.params
        const car = await Car.findById(id)
        if (car) {
            return res.status(200).json({ car })
        }
        return res
            .status(404)
            .send('A car with the specified ID does not exists')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateCar = async (req, res) => {
    try {
        const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        res.status(200).json(car)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteCar = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Car.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Car deleted')
        }
        throw new Error('Car not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    createCar,
    getAllCars,
    getCarById,
    updateCar,
    deleteCar,
}
