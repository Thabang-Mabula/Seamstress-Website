// const AssistantV1 = require('ibm-watson/assistant/v1')
// const { IamAuthenticator } = require('ibm-watson/auth')
// const { ASSISTANT_IAM_APIKEY, ASSISTANT_WORKSPACE_ID, ASSISTANT_URL } = require('./../../config.js')

// class ResponseObj {
//   constructor (text = '', link = '', options = []) {
//     this.text = text
//     this.link = link
//     this.options = options
//   }
// }
// const service = new AssistantV1({
//   version: '2019-02-28',
//   authenticator: new IamAuthenticator({
//     apikey: ASSISTANT_IAM_APIKEY
//   }),
//   url: ASSISTANT_URL
// })

// // service.message({
// //   workspaceId: ASSISTANT_WORKSPACE_ID,
// //   input: { 'text': 'Anna' }
// // })
// //   .then(res => {
// //     console.log(JSON.stringify(res, null, 2))
// //   })
// //   .catch(err => {
// //     console.log(err)
// //   })

// let prevContext = {}
// let isFirstMessage = true

// let sendMessage = async (message) => {
//   let messageBody = {
//     workspaceId: ASSISTANT_WORKSPACE_ID,
//     input: { 'text': message },
//     context: prevContext
//   }
//   if (!isFirstMessage) {
//     messageBody.context = prevContext
//   }

//   let messagePromise = new Promise((resolve, reject) => {
//     service.message(messageBody)
//       .then(res => {
//         let chatbotResponse = []
//         res.result.output.generic.forEach((responseObject) => {
//           let typeOfResponse = responseObject.response_type

//           if (typeOfResponse === 'text') {
//             chatbotResponse.push(new ResponseObj(responseObject.text))
//           } else if (typeOfResponse === 'image') {
//             chatbotResponse.push(new ResponseObj(responseObject.title, responseObject.source))
//           } else if (typeOfResponse === 'option') {
//             let options = []
//             responseObject.options.forEach((optionObj) => {
//               options.push({ text: optionObj.label, value: optionObj.value.text })
//             })
//             chatbotResponse.push(new ResponseObj(responseObject.title, '', options))
//           }
//         })

//         prevContext = res.result.context
//         // console.log(JSON.stringify(res, null, 2))
//         resolve(chatbotResponse)
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   })

//   let chatbotResponse = await messagePromise
//   isFirstMessage = false
//   return chatbotResponse
// }

// module.exports = {
//   sendMessage
// }
