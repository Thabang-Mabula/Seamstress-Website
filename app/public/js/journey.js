$(document).ready(function () {
  sendMessageToApi('')

  $('#send-btn').click(() => {
    let message = $('#user-message').val()
    sendMessageToApi(message)
    // $.ajax({
    //   url: '/api/send_message',
    //   method: 'POST',
    //   contentType: 'application/json',
    //   data: JSON.stringify({ message: message }),
    //   beforeSend: () => {
    //     $('#chatbox-response').text('...')
    //   },
    //   success: function (chatBotResponse) {
    //     // Display to user that an invite has been sent to the desired email address
    //     displayChatbotResponse(chatBotResponse)
    //   }
    // })

    $('#user-message').val('')
  })
})

function displayChatbotText (text) {
  $('.chatbox-response-bubble').append(
    `<p> ${text} <\p>`
  )
}

function displayChatbotImage (link) {
  if (link !== '') {
    $('.chatbox-response-bubble').append(
      `<img src=${link} class='chatbox-image'>`
    )
  }
}

function generateOptionButtons (options) {
  options.forEach((option) => {
    $('.chatbox-response-bubble').append(
      `<button type="button" class="btn btn-info" name=>${option.text}</button>`
    )
  })
}

function displayChatbotResponse (chatBotResponse) {
  let responseDiplayArea = $('.chatbox-response-bubble')
  // let responseTextArea = $('#chatbox-response')

  responseDiplayArea.empty()

  chatBotResponse.forEach((responseObject) => {
    displayChatbotImage(responseObject.link)
    displayChatbotText(responseObject.text)
    generateOptionButtons(responseObject.options)
  })
}

function sendMessageToApi (message) {
  $.ajax({
    url: '/api/send_message',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ message: message }),
    beforeSend: () => {
      console.log('The text send is: ' + message)
      displayChatbotText('...')
    },
    success: function (chatBotResponse) {
      // Display to user that an invite has been sent to the desired email address
      displayChatbotResponse(chatBotResponse)
    }
  })
}
