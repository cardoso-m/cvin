const db = require('../config/database')
const validate = require('validator')

exports.getUser = async (req, res) => {
    var { name, email, password } = req.body

    try{
        var users = await db.select('*').from('user')
        return res.status(200).json(users)
    } catch(err){
        res.status(400).send(err)
    }
}

exports.createUser = async (req, res) => {
    var { name, email, password } = req.body

    if (!name || !validate.isEmail(email) || !password) {
        return res.status(422).send('Dados inválidos. Verifique o nome, email e senha.')
    }

    try {
        await db('user').insert({ name, email, password })
        return res.status(201).send('Dados inseridos com sucesso!')
    } catch (err) {
        return res.status(400).send(err)
    }
}