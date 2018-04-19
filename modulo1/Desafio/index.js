const app = require('./config')
const moment = require('moment')

app.get('/', (req, res) => {
  res.render('main')
})

app.post('/check', (req, res) => {
  // Tentei utilizar o novo jeito de se formatar data porem não deu certo,
  // ficou com invalid Date - moment(data, 'DD/MM/YYYY')
  const DATA_NASCIMENTO = moment(req.body.dataNascimento).format('DD/MM/YYYY')
  const idade = moment().diff(DATA_NASCIMENTO, 'years')
  let viewNext = 'minor'
  if (idade > 18) {
    viewNext = 'major'
  }
  res.redirect(`${viewNext}?nome=${req.body.nome}`)
})

const middlewareCheck = (req, res, next) => {
  if (req.query.nome && req.query.nome !== '') {
    next()
  } else {
    res.redirect('/')
  }
}

app.get('/major', middlewareCheck, (req, res) => {
  res.render('major', { nome: req.query.nome })
})

app.get('/minor', middlewareCheck, (req, res) => {
  res.render('minor', { nome: req.query.nome })
})

app.listen(3000)
