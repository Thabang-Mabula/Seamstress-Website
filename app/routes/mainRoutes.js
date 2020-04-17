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
  res.render('index.ejs', { /* data */ })
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

// var ReCAPTCHA = require('recaptcha2')

// var recaptcha = new ReCAPTCHA({
//   siteKey: process.env.RECAPTCHA_SITE_KEY,
//   secretKey: process.env.RECAPTCHA_SECRET_KEY,
//   ssl: false
// })

const axios = require('axios')
const FormData = require('form-data')

function verifyCaptcha (captcha) {
  var formBody = new FormData()
  formBody.append('secret', process.env.RECAPTCHA_SECRET_KEY)
  formBody.append('response', captcha)
  return axios({
    method: 'post',
    url: ` https://www.google.com/recaptcha/api/siteverify`,
    headers: formBody.getHeaders(),
    data: formBody
  })
}

mainRouter.post('/api/submitQuery', function (req, res) {
  verifyCaptcha(req.body.captcha)
    .then((apiRes) => {
      if (apiRes.data.success) {
        console.log('Captch validated')
      }

      // if (sendMail(req.body)) {
      //   res.sendStatus(200)
      // } else {
      //   res.sendStatus(501)
      // }
    })
    .catch(() => {
      let error = new Error('Could not connect to reCAPTCHA server')
      res.send(error)
      res.sendStatus(501)
      // console.error(recaptcha.translateErrors(errorCodes))
    })
})
module.exports = mainRouter
