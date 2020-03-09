'use strict'

let express = require('express')
let mainRouter = express.Router()
let app = express()
let path = require('path')

let { getFileNames } = require('../controllers/galleryController')
let { sendMail } = require('../controllers/customerQueryController')

let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

mainRouter.get('/', function (req, res) {
  res.render('index.html', { /* data */ })
  res.status(200)
})

mainRouter.get('/gallery', function (req, res) {
  res.render('gallery.ejs', { title: 'Gallery' })
  res.status(200)
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
