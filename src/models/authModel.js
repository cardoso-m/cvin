const db = require('../config/database/database')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const login = async (userData) => {

    try {
        let user = await db('user')
            .where({
                "email": userData.email
            })
            .first()

        if (!await bcrypt.compare(userData.password, user.password)) {
            return false
        }
        return user

    } catch (error) {
        return false
    }
}

const getToken = async (userData) => {
    console.log(userData)
    try {
        let token = await jwt.sign({
            'id': userData.id,
            'first_name': userData.first_name,
            'last_name': userData.last_name,
            'email': userData.email
        }, process.env.JWT_SECRET, {expiresIn: '2h'})

        return token
    } catch (error) {
        return false
    }

}

module.exports = {
    login,
    getToken
}