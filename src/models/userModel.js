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

const getUserById = async (userId) => {

    try {
        const user = await db('user')
            .where(userId)
            .first()
        return user
    } catch (error) {
        res.status(400).send('Erro ao buscar usuário')
    }
}

const updateUser = async (userId, userData) => {
    
    try {
        var user = await db('user')
            .where(userId)
            .update({
                'first_name': userData.first_name,
                'last_name': userData.last_name,
                'email': userData.email,
                'password': userData.password
            })
        return user
    } catch (error) {
        res.status(400).send('Erro ao editar usuário')
    }
}

const deleteUser = async (userId) => {
    
    try {
        var user = await db('user')
            .where(userId)
            .del()
        return user
    } catch (error) {
        res.status(400).send('Erro ao deletar usuário')
    }
}

module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUser
}