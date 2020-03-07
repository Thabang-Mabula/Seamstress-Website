const { WEBSITE_NAME, WEBSITE_PASSWORD, SEND_TO_ADDRESS } = require('./../../config.js')
var sanitizeHtml = require('sanitize-html')

function generateEmail (name, email, contactNumber, comment) {
  var nodemailer = require('nodemailer')

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: WEBSITE_NAME,
      pass: WEBSITE_PASSWORD
    }
  })

  var mailOptions = {
    from: WEBSITE_PASSWORD,
    to: SEND_TO_ADDRESS,
    subject: 'Customer Request from Website',
    text: `Name: ${name} \n \n Email: ${email} \n \n Contact number: ${contactNumber} \n \n Comment/Query: ${comment}`
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
}

function sendMail (queryObj) {
  let name = sanitizeHtml(queryObj.name)
  let email = sanitizeHtml(queryObj.emailAddress)
  let contactNumber = sanitizeHtml(queryObj.contactNumber)
  let comment = sanitizeHtml(queryObj.comment)

  generateEmail(name, email, contactNumber, comment)
}

module.exports = { sendMail: sendMail }
