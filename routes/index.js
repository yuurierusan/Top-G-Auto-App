const { Router } = require('express')
const controllers = require('./controllers')
const router = Router()

router.get('/', (req, res) => res.send('Deez Nuts!'))

router.post('/cars', controllers.createCar)

module.exports = router
