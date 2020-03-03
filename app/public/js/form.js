class ContactRequest {
  constructor(name, emailAddress, contactNumber = '', comment) {
    this.name = name
    this.emailAddress = emailAddress
    this.contactNumber = contactNumber
    this.comment = comment
  }
}

function validName(errorArray) {
  let customerName = $('#customer-name').parsley()
  console.log('Is valid name? ' + customerName.isValid())
  if (!(customerName.isValid())) {
    $('#customer-name').val('')
    errorArray.push = 'Name must have alphanumeric characters only and be less than 30 characters long'
    return false
  }
}


function validName(errorArray) {
  let customerName = $('#customer-name').parsley()
  console.log('Is valid name? ' + customerName.isValid())
  if (!(customerName.isValid())) {
    $('#customer-name').val('')
    errorArray.push = 'Name must have alphanumeric characters only and be less than 30 characters long'
    return false
  }
  return true
}

function validEmail(errorArray) {
  let email = $('#customer-email').parsley()
  console.log('Is valid email? ' + email.isValid())
  if (!(email.isValid())) {
    $('#customer-name').val('')
    errorArray.push = 'Please insert a valid email'
    return false
  }
  return true
}

// function validEmail(email) {
//   let regex = /^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$/
//   return regex.test(email)
// }

function validContactNumber(contactNumber) {
  let isAppropritatelength = (contactNumber.length() === 10)
  let regex = new RegExp('^[0-9]*$')
  return regex.test(contactNumber) && isAppropritatelength
}

function validQuery(query) {
  let regex = new RegExp('/^[\w .,!?]+$/')
  const MAX_QUERY_LENGTH = 1000
  return regex.test(query) && query.length < MAX_QUERY_LENGTH
}

function isValid() {
  let errorMsg = []
  if (validName(errorMsg) && validEmail(errorMsg)) { return true }
  else {console.log(errorMsg)}
}

function clearAllFields() {
  $('#customer-name').val('')
  $('#customer-email').val('')
  $('#customer-tel').val('')
  $('#customer-query').val('')
}

function confirmationModal() {
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
