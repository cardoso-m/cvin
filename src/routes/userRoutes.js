const userController = require('../controllers/userController')
const express = require('express')
const router = express.Router()

router.post('/user', userController.createUser)
router.get('/user', userController.getUserById)

module.exports = router