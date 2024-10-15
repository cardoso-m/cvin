const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/user',userController.getUser)
router.post('/user',userController.createUser)

module.exports = router