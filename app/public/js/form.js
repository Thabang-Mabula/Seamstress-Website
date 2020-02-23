class ContactRequest {
  constructor (name, emailAddress, contactNumber = '', comment) {
    this.name = name
    this.emailAddress = emailAddress
    this.contactNumber = contactNumber
    this.comment = comment
  }
}

function validName (name) {
  let regex = new RegExp('^[a-zA-Z0-9 ]*$')
  return regex.test(name)
}

function validEmail (email) {
  let regex = new RegExp('/\S+@\S+\.\S+/')
  return regex.test(email)
}

function validContactNumber (contactNumber) {
  let isAppropritatelength = (contactNumber.length() === 10)
  let regex = new RegExp('^[0-9]*$')
  return regex.test(contactNumber) && isAppropritatelength
}

function validQuery (query) {
  let regex = new RegExp('/^[\w .,!?]+$/')
  return regex.test(query)
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

    clearAllFields()
    confirmationModal()

    if (validName(name) && validEmail(email) && validContactNumber(contactNumber) && validQuery(query)) {
      $.ajax({
        type: 'POST',
        url: '/api/submtQuery',
        data: 'data',
        dataType: 'dataType',
        success: function (response) {
          clearAllFields()
          confirmationModal()
        }
      })
    }
  })
})
