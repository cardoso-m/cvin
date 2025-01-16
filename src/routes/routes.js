const express = require('express')
const router = express.Router()
const userRouter = require('./userRoutes')
const authRouter = require('./authRoutes')

router.use(userRouter)
router.use(authRouter)

module.exports = router