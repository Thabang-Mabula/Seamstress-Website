var dir = '../images/gallery/'
var imgList = document.getElementsByClassName('img-list')[0]

function createThumbnails (fileList) {
  let populateImages = new Promise((resolve, reject) => {
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
    resolve('success')
  })
  return populateImages
}

async function getImages () {
  await $.ajax({
    url: '/api/gallery',
    method: 'POST',
    contentType: 'application/json',
    success: async function (response) {
      await createThumbnails(response)
    }
  })
}

$(document).ready(async function () {
  $('#ul-li').lightGallery()
})
