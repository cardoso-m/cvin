const express = require('express')
const app = express()
const userRoutes = require('./routes/userRoutes')

app.use(express.json()); // para analisar application/json
app.use(express.urlencoded({ extended: true })); // para analisar application/x-www-form-urlencoded

app.use('/',userRoutes)

app.get('/', (req, res) => {
    console.log('OK')
})

app.listen('8000', () => {
    console.log('Server ON!')
})