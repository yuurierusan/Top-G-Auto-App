const { Router } = require('express')
const router = Router()
const carController = require('../controllers/cars')
const projectController = require('../controllers/projects')
const commentController = require('../controllers/comments')

router.get('/app', (req, res) => res.send('This is Groot!'))

// post controllers
router.post('/cars/create', carController.createCar)
router.post('/projects/create/:carId', projectController.createProject)
router.post('/comments/create/:carId', commentController.createComment)

// get controllers
router.get('/cars', carController.getAllCars)
router.get('/cars/:id', carController.getCarById)
router.get('/projects', projectController.getAllProjects)
router.get('/projects/car/:carId', projectController.getProjectsByCarId)
router.get('/projects/:id', projectController.getProjectById)
router.get('/comments', commentController.getAllComments)
router.get('/comments/car/:carId', commentController.getCommentById)

// put controller
router.put('/cars/edit/:id', carController.updateCar)
router.put('/projects/edit/:id', projectController.updateProject)
router.put('/comments/edit/:id', commentController.updateComment)

// delete controllers
router.delete('/cars/delete/:id', carController.deleteCar)
router.delete('/projects/delete/:id', projectController.deleteProject)
router.delete('/comments/delete/:id', commentController.deleteComment)

module.exports = router
