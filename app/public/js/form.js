
class ContactRequest {
  constructor (name, emailAddress, contactNumber = '', comment, captcha) {
    this.name = name
    this.emailAddress = emailAddress
    this.contactNumber = contactNumber
    this.comment = comment
    this.captcha = captcha
  }
}

class ErrorMessage {
  constructor () {
    this.invalidName = 'Name field is empty or is more than 30 characters long'
    this.invalidEmail = 'Email address field is empty or the email address is invalid'
    this.invalidContactNumber = 'Contact number must be ten-digits long'
    this.invalidQuery = 'Message area cannot be left empy'
  }
}

const ERROR_MESSAGE = new ErrorMessage()

function validName (errorArray) {
  let customerName = $('#customer-name').parsley()
  // console.log('Is valid name? ' + customerName.isValid())
  if (!(customerName.isValid())) {
    $('#customer-name').val('')
    errorArray.push(ERROR_MESSAGE.invalidName)
    return false
  }
  return true
}

function validEmail (errorArray) {
  let email = $('#customer-email').parsley()
  let isValid = email.isValid()
  // console.log('Is valid email? ' + isValid)
  if (!(isValid)) {
    $('#customer-email').val('')
    errorArray.push(ERROR_MESSAGE.invalidEmail)
    return false
  }
  return true
}

function validContactNumber (errorArray) {
  let contactNumber = $('#customer-tel').parsley()
  let isValid = contactNumber.isValid()
  if (!(isValid)) {
    $('#customer-tel').val('')
    errorArray.push(ERROR_MESSAGE.invalidContactNumber)
    return false
  }
  return true
}

function validQuery (errorArray) {
  let customerQuery = $('#customer-query').parsley()
  let isValid = customerQuery.isValid()
  if (!(isValid)) {
    $('#customer-query').val('')
    errorArray.push(ERROR_MESSAGE.invalidQuery)
    return false
  }
  return true
}

function isValid (errorMsg) {
  let isValidName = validName(errorMsg)
  let isValidEmail = validEmail(errorMsg)
  let isValidContactNumber = validContactNumber(errorMsg)
  let isValidQuery = validQuery(errorMsg)
  return (isValidName && isValidEmail && isValidContactNumber && isValidQuery)
}

function clearAllFields () {
  $('#customer-name').val('')
  $('#customer-email').val('')
  $('#customer-tel').val('')
  $('#customer-query').val('')
}

function confirmationModal () {
  // $('#submission-response-area').append(`<div class="alert alert-success alert-dismissible">
  //                                           <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
  //                                           <strong>Thank you for submitting your query</strong>
  //                                       </div>`)

}

function displayErrorMessages (errorMsgArray) {
  clearErrorMessageArea()

  let errorMessageDiv = document.getElementById('error-message-div')
  let paragraph = document.createElement('p')
  paragraph.className = 'error-msg margin-lg-top'

  let textNode = document.createTextNode("Your message wasn't sent for the following reason(s):")
  paragraph.appendChild(textNode)

  let lineBreak = document.createElement('BR')
  paragraph.appendChild(lineBreak)

  errorMsgArray.forEach((msg) => {
    let textNode = document.createTextNode(' - ' + msg)
    paragraph.appendChild(textNode)

    let lineBreak = document.createElement('BR')
    paragraph.appendChild(lineBreak)
  })
  errorMessageDiv.appendChild(paragraph)
}

function clearErrorMessageArea () {
  $('#error-message-div').empty()
}

function isValidCaptcha (captcha, errorMsgArray) {
  if (captcha === undefined ||
    captcha === null ||
    captcha === '') {
    errorMsgArray.push('You must validate your submission with reCAPTCHA')
    return false
  }
  return true
}

$(document).ready(() => {
  $('#contact-form-submit-btn').click(() => {
    if (confirm('Are you sure you want to submit your message to El Olam Fashion?')) {
      clearErrorMessageArea()
      let name = $('#customer-name').val()
      let email = $('#customer-email').val()
      let contactNumber = $('#customer-tel').val()
      let query = $('#customer-query').val()
      let captcha = $('#g-recaptcha-response').val()

      let errorMsgArray = []
      if (isValid(errorMsgArray) && isValidCaptcha(captcha, errorMsgArray)) {
        let contactRequest = new ContactRequest(name, email, contactNumber, query, captcha)

        $.ajax({
          type: 'POST',
          url: '/api/submitQuery',
          contentType: 'application/json',
          data: JSON.stringify(contactRequest),
          success: function (response) {
            clearAllFields()
            console.log(response)
            if (response === 'OK') {
              alert('Your message was successfully sent. Thank you for contacting us!')
            } else {
              alert("We're so sorry, your message could not be sent at this time. Please try again, or, if you've already re-submited before, try and contact us using one of our contact details.")
            }
          },
          error: function (response) {
            alert("We're so sorry, your message could not be sent at this time. Please try again, or, if you've already re-submited before, try and contact us using one of our contact details.")
          }
        })
      } else {
        displayErrorMessages(errorMsgArray)
      }
    }
  })
})
