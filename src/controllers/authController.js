const jwt = require('jsonwebtoken')
const authModel = require('../models/authModel')

const login = async (req, res) => {
    let {email, password} = req.body

    let userData = {email, password}
    let user = await authModel.login(userData)

    if(!user){
        res.status(401).send('Email ou senha inválidos')
    }

    let token = await authModel.getToken(user)

    console.log(token)
    return true
}

module.exports = {
    login
}