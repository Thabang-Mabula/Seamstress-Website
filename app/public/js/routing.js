$(document).ready(() => {
  $('.gallery-link').click(() => {
    $.ajax({
      url: '/gallery',
      method: 'GET',
      contentType: 'application/json'
    })
    console.log('Button clicked')
  })
})
