const { Router } = require('express')
const carController = require('../controllers/cars')
const commentController = require('../controllers/comments')
const projectController = require('../controllers/projects')
const router = Router()

router.get('/', (req, res) => res.send('This is Groot!'))

// car controller
router.post('/cars', carController.createCar)
router.get('/cars', carController.getAllCars)
router.get('/cars/:id', carController.getCarById)
router.put('/cars/:id', carController.updateCar)
router.delete('/cars/:id', carController.deleteCar)

// comment controller
router.post('/comments', commentController.createComment)
router.get('/comments', commentController.getAllComments)
router.get('/comments/:id', commentController.getCommentById)
router.put('/comments/:id', commentController.updateComment)
router.delete('/comments/:id', commentController.deleteComment)

// project controller
router.post('/projects', projectController.createProject)
router.get('/projects', projectController.getAllProjects)
router.get('/projects/:id', projectController.getProjectById)
router.put('/projects/:id', projectController.updateProject)
router.delete('/projects/:id', projectController.deleteProject)

module.exports = router
