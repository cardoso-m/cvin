const userModel = require('../models/userModel')

const createUser = async (req, res) => {
    
    var {first_name, last_name, email, password} = req.body

    if (!first_name || !last_name || !email || !password) {
        return res.status(400).json({ message: 'Preencha todos os campos!' })
    }

    try {
        var userData = {first_name, last_name, email, password}
        const user = await userModel.createUser(userData)

        res.status(200).send('Created')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    createUser
}