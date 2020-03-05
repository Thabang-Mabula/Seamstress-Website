class ContactRequest {
  constructor (name, emailAddress, contactNumber = '', comment) {
    this.name = name
    this.emailAddress = emailAddress
    this.contactNumber = contactNumber
    this.comment = comment
  }
}

class ErrorMessage {
  constructor () {
    this.invalidName = 'Name must be less than 30 characters long'
    this.invalidEmail = 'Please insert a valid email address'
    this.invalidContactNumber = 'Please insert a ten-digit contact number'
  }
}

const ERROR_MESSAGE = new ErrorMessage()

function validName (errorArray) {
  let customerName = $('#customer-name').parsley()
  console.log('Is valid name? ' + customerName.isValid())
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
  console.log('Is valid email? ' + isValid)
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
  console.log('Is valid contact? ' + isValid)
  if (!(isValid)) {
    $('#customer-tel').val('')
    errorArray.push(ERROR_MESSAGE.invalidContactNumber)
    return false
  }
  return true
}

// function validEmail(email) {
//   let regex = /^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$/
//   return regex.test(email)
// }

// function validContactNumber (contactNumber) {
//   let isAppropritatelength = (contactNumber.length() === 10)
//   let regex = new RegExp('^[0-9]*$')
//   return regex.test(contactNumber) && isAppropritatelength
// }

// function validQuery (query) {
//   let regex = new RegExp('/^[\w .,!?]+$/')
//   const MAX_QUERY_LENGTH = 1000
//   return regex.test(query) && query.length < MAX_QUERY_LENGTH
// }

function isValid () {
  let errorMsg = []
  let isValidName = validName(errorMsg)
  let isValidEmail = validEmail(errorMsg)
  let isValidContactNumber = validContactNumber(errorMsg)
  if (isValidName && isValidEmail && isValidContactNumber) { return true } else {
    errorMsg.forEach((msg) => {
      console.log(msg)
    })
  }
}

function clearAllFields () {
  $('#customer-name').val('')
  $('#customer-email').val('')
  $('#customer-tel').val('')
  $('#customer-query').val('')
}

function confirmationModal () {
  $('#submission-response-area').append(`<div class="alert alert-success alert-dismissible">
                                            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                                            <strong>Thank you for submitting your query</strong>
                                        </div>`)
}

$(document).ready(() => {
  $('#contact-form-submit-btn').click(() => {
    let name = $('#customer-name').val()
    let email = $('#customer-email').val()
    let contactNumber = $('#customer-tel').val()
    let query = $('#customer-query').val()
    let contactRequest = new ContactRequest(name, email, contactNumber, query)
    // console.log('Is valid name: ' + validName(name))
    // console.log('Is valid email: ' + validEmail(email))
    // console.log('Is valid contact number: ' + validContactNumber(contactNumber))
    // console.log('Is valid query: ' + validQuery(query))

    if (isValid(contactRequest)) {
      $.ajax({
        type: 'POST',
        url: '/api/submitQuery',
        contentType: 'application/json',
        data: JSON.stringify(contactRequest),
        success: function (response) {
          clearAllFields()
          confirmationModal()
        }
      })
    }
  })
})
