const validate = require('validator');

var validateUser = (req, res, next) => {
    var { name, email, password } = req.body

    if (!name || !validate.isEmail(email) || !password) {
        return res.status(422).send('Dados inválidos. Verifique o nome, email e senha.')
    }
    next();
}

module.exports = validateUser
