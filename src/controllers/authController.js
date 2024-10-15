const db = require('../config/database')
const bcrypt = require('bcrypt')
const validate = require('validator')

exports.loginUser = async (req, res) => {
    var {email, password} = req.body

    if (!validate.isEmail(email)) {
        return res.status(422).send('E-mail inválido')
    }

        try {
            var user = await db('user').where({ email }).first()

            if (!user) {
                return res.status(404).send('E-mail não encontrado')
            }
                var comparePassword = await bcrypt.compare(password, user.password)

                if(comparePassword){
                    res.status(200).send('Logado')
                }else{
                    res.status(422).send('Senha incorreta!')
                }

        } catch (err) {
            res.status(400).json(err)
        }
    }