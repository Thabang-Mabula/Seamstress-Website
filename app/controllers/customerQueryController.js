// const { WEBSITE_NAME, WEBSITE_PASSWORD, SEND_TO_ADDRESS } = require('./../../config.js')
var sanitizeHtml = require('sanitize-html')

function generateEmail (name, email, contactNumber, comment) {
  var nodemailer = require('nodemailer')

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.WEBSITE_NAME,
      pass: process.env.WEBSITE_PASSWORD
    }
  })

  var mailOptions = {
    from: process.env.WEBSITE_PASSWORD,
    to: process.env.SEND_TO_ADDRESS,
    subject: 'Customer Request from Website',
    text: `Name: ${name} \n \n Email: ${email} \n \n Contact number: ${contactNumber} \n \n Comment/Query: ${comment}`
  }

  return transporter.sendMail(mailOptions)
}

function sendMail (queryObj) {
  let name = sanitizeHtml(queryObj.name)
  let email = sanitizeHtml(queryObj.emailAddress)
  let contactNumber = sanitizeHtml(queryObj.contactNumber)
  let comment = sanitizeHtml(queryObj.comment)

  return generateEmail(name, email, contactNumber, comment)
}

module.exports = { sendMail: sendMail }
