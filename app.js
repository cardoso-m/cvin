const express = require('express')
const app = express()
const routes = require('./src/routes/routes')

require('dotenv').config()
const PORT = process.env.PORT

app.use(express.json()) // Middleware para ler o corpo da requisição como JSON
app.use(routes)

app.get('/', (req, res) => {
    console.log('Route main!')
    res.send('Route main!')
})



app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})