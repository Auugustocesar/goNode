const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
})

app.set('view engine', 'njk')

app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/auth', (req, res) => {
  res.send(`Voce logou com o usuario: ${req.body.username} com a senha: ${req.body.password}`)
})

app.listen(3000)
