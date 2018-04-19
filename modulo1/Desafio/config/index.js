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

module.exports = app
