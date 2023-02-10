const { Router } = require('express')
const carController = require('../controllers/cars')
const router = Router()

router.get('/', (req, res) => res.send('Deez Nuts!'))
router.post('/cars', carController.createCar)
router.get('/cars', carController.getAllCars)

module.exports = router
