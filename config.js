const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  WEBSITE_NAME: process.env.WEBSITE_NAME,
  WEBSITE_PASSWORD: process.env.WEBSITE_PASSWORD,
  SEND_TO_ADDRESS: process.env.SEND_TO_ADDRESS
}
