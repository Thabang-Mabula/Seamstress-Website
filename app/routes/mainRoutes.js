'use strict'

let express = require('express')
let mainRouter = express.Router()
let app = express()
let path = require('path')

let { getFileNames } = require('../controllers/galleryController')

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
  res.render('gallery.html', { /* data */ })
  res.status(200)
})

// mainRouter.post('/api/gallery', function (req, res) {
//   res.send(getFileNames())
//   res.status(200)
// })

mainRouter.post('/api/submitQuery', function (req, res) {
  console.log('Post made')
  console.log(req.body)
  res.sendStatus(200)
})
module.exports = mainRouter
