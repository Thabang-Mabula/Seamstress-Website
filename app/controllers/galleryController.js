const fs = require('fs')

function getFileNames () {
  let path = global.__basedir + '/app/public/images/gallery'
  let fileList = []
  fs.readdirSync(path).forEach(file => {
    fileList.push(file)
  })
  return fileList
}
module.exports = {
  getFileNames: getFileNames
}
