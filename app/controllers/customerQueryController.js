var sanitizeHtml = require('sanitize-html')

function sendMail (queryObj) {
  let name = sanitizeHtml(queryObj.name)
  let email = sanitizeHtml(queryObj.emailAddress)
  let contactNumber = sanitizeHtml(queryObj.contactNumber)
  let comment = sanitizeHtml(queryObj.comment)

  console.log(name + ' ' + email + ' ' + contactNumber + ' ' + comment)
}

module.exports = { sendMail: sendMail }
