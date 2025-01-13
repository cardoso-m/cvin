const db = require('../config/database/database')

const createUser = async (userData) => {
    console.log('userModel')
    try {
        const user = await db('user')
                            .insert(userData)
                            .returning('id')
        return user
        
    } catch (error) {
        console.log(error)
        res.status(400).send('Erro ao criar usuário')
    }
}

module.exports = {
    createUser
}