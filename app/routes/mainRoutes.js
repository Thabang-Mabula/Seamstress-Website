'use strict'

let express = require('express')
let mainRouter = express.Router()
let app = express()
let path = require('path')

const { sendMessage } = require('../controllers/journeyController.js')

let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

mainRouter.get('/', function (req, res) {
  // res.sendFile('/Car, Home & Business Insurance _ 1st for Women Insurance.html', { root: req.app.get('views') })
  res.render('index.html', { /* data */ })
  res.status(200)
})

mainRouter.get('/gallery', function (req, res) {
  res.render('gallery.html', { /* data */ })
  res.status(200)
})
module.exports = mainRouter
