const { Router } = require('express')
const carController = require('../controllers/cars')
const router = Router()

router.get('/', (req, res) => res.send('This is Groot!'))

router.post('/cars', carController.createCar)

router.get('/cars', carController.getAllCars)

router.get('/cars/:id', carController.getCarById)

router.put('/cars/:id', carController.updateCar)

router.delete('/cars/:id', carController.deleteCar)

module.exports = router
