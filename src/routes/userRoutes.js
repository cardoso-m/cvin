const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')

router.get('/user',userController.getUser)
router.post('/user',userController.createUser)
router.post('/login',authController.loginUser)

module.exports = router