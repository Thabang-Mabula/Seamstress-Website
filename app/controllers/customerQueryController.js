var sanitizeHtml = require('sanitize-html')

function generateEmail (name, email, contactNumber, comment) {
  var nodemailer = require('nodemailer')

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'emailAddress',
      pass: 'password'
    }
  })

  var mailOptions = {
    from: 'emailAddre',
    to: 'elolamfashion1@yahoo.com',
    subject: 'Customer Request from Website',
    text: `Name: ${name} \n Email: ${email} \n Contact number: ${contactNumber} \n Comment/Query: ${comment}`
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
