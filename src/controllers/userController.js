const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')

const createUser = async (req, res) => {
    
    var {first_name, last_name, email, password} = req.body

    if (!first_name || !last_name || !email || !password) {
        return res.status(400).json({ message: 'Preencha todos os campos!' })
    }

    try {
        var password = await bcrypt.hash(password, 12)
        var userData = {first_name, last_name, email, password}
        const user = await userModel.createUser(userData)

        res.status(200).send('Created')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getUserById = async (req, res) => {
    var id = req.params

    if (!id) {
        return res.status(400).json({ message: 'Informe o ID' })
    }

    try {
        var user = await userModel.getUserById(id)
        console.log(user)
        return res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    createUser,
    getUserById
}