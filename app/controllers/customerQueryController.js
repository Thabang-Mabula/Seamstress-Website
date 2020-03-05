var sanitizeHtml = require('sanitize-html')

function sendMail (queryObj) {
  let queryContent = sanitizeHtml(queryObj.comment)
  console.log(queryContent)
}

module.exports = { sendMail: sendMail }
