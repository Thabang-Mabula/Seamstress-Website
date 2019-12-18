'use strict'
/**
 * Function for retrieving the text for each topic
 * @param  {string} topic - the topic for which information should be fetched
 */
let getTopicObject = function (topic) {
  let returnObject = Object()

  if (topic === 'NLP') {
    returnObject.heading = 'Natural Language Processing'
  } else if (topic === 'Deep Learning') {
    returnObject.heading = 'Deep Learning'
  } else if (topic === 'Reinforcement Learning') {
    returnObject.heading = 'Reinforcement Learning'
  } else if (topic === 'Machine Learning') {
    returnObject.heading = 'Machine Learning'
  } else if (topic === 'Self-driving Cars') {
    returnObject.heading = 'Self-driving Cars'
  }

  returnObject.text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  console.log(returnObject)
  return returnObject
}

module.exports = {
  getTopicObject: getTopicObject
}
