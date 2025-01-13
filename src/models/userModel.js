const db = require('../config/database/database')

const createUser = async (userData) => {
    
    try {
        const user = await db('user')
                            .insert(userData)
                            .returning('id')
        return user

    } catch (error) {
        res.status(400).send('Erro ao criar usuário')
    }
}

const getUserById = async(userId) => {

    try {
        const user = await db('user')
                            .where(userId)
                            .first()
        return user
    } catch (error) {
        res.status(400).send('Erro ao buscar usuário')
    }
}

module.exports = {
    createUser,
    getUserById
}