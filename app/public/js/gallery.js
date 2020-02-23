var dir = '../images/gallery/'
var imgList = document.getElementsByClassName('img-list')[0]

function createThumbnails (fileList) {
  fileList.forEach(filename => {
    let listElement = document.createElement('li')
    listElement.className = 'img-list-item'
    listElement.setAttribute('data-src', dir + filename)

    let thumbnailImg = document.createElement('img')
    thumbnailImg.className = 'img-thumbnail'
    thumbnailImg.setAttribute('src', dir + filename)

    listElement.appendChild(thumbnailImg)

    imgList.appendChild(listElement)
  })
}

$.ajax({
  url: '/api/gallery',
  method: 'POST',
  contentType: 'application/json',
  success: function (response) {
    createThumbnails(response)
  }
})
// $.ajax({
//   // This will retrieve the contents of the folder if the folder is configured as 'browsable'
//   url: dir,
//   success: function (data) {
//     // List all .png file names in the page
//     $(data).find('a:contains(' + fileextension + ')').each(function () {
//       var filename = this.href.replace(window.location.host, '').replace('http://', '')
//       let listElement = document.createElement('li')
//       listElement.className = 'img-list-item'
//       listElement.setAttribute('data-src', dir + filename)

//       let thumbnailImg = document.createElement('img')
//       thumbnailImg.className = 'img-thumbnail'
//       thumbnailImg.setAttribute('src', dir + filename)

//       listElement.appendChild(thumbnailImg)

//       imgList.appendChild(listElement)
//     })
//   }
// })
$(document).ready(function () {
  $('#lightgallery').lightGallery()
})
