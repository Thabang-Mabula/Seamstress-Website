'use strict'

let express = require('express')
let mainRouter = express.Router()
let app = express()
let path = require('path')

const { getFileNames } = require('../controllers/galleryController')
const { sendMail } = require('../controllers/customerQueryController')
const { retrieveProducts } = require('../models/dbQueries.js')

let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

mainRouter.get('/', function (req, res) {
  res.render('index.html', { /* data */ })
  res.status(200)
})

mainRouter.get('/gallery', async function (req, res) {
  retrieveProducts().then((items) => {
    res.render('gallery.ejs', { title: 'Gallery', items })
    res.status(200)
  }).catch((err) => {
    console.log(err)
    res.redirect('/')
    res.status(200)
  })
})

// mainRouter.post('/api/gallery', function (req, res) {
//   res.send(getFileNames())
//   res.status(200)
// })

mainRouter.post('/api/submitQuery', function (req, res) {
  if (sendMail(req.body)) {
    res.sendStatus(200)
  } else {
    res.sendStatus(501)
  }
  res.status(200)
})
module.exports = mainRouter
