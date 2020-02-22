// // Make an instance of two and place it on the page.
// var elem = document.getElementById('landing-image')
// var params = { fullscreen: true }
// var two = new Two(params).appendTo(elem)

// // two has convenience methods to create shapes.

// let pictureHeight = document.getElementById('landing-image').clientHeight
// let pictureWidth = document.getElementById('landing-image').clientWidth

// let triangleHeight = pictureHeight * 0.5
// let triangleWidth = screen.width * 0.5
// let originX = pictureWidth * 0.05
// let originY = pictureHeight * 1.05
// let point1X = originX
// let point1Y = originY - triangleHeight
// let point2X = originX + triangleWidth
// let point2Y = originY
// var triangleBottom = two.makePath(originX, originY, point1X, point1Y, point2X, point2Y, false)

// triangleBottom.fill = 'rgb(255, 189, 0)'
// triangleBottom.opacity = 0.25
// triangleBottom.noStroke()

// originX = screen.width * 0.95
// originY = pictureHeight * 0.15
// point1X = originX
// point1Y = originY + triangleHeight
// point2X = originX - triangleWidth
// point2Y = originY
// var triangleTop = two.makePath(originX, originY, point1X, point1Y, point2X, point2Y, false)

// triangleTop.fill = 'rgb(255, 189, 0)'
// triangleTop.opacity = 0.25
// triangleTop.noStroke()

// // Don't forget to tell two to render everything
// // to the screen
// two.update()

$(function () {
  // $('[data-toggle="tooltip"]').tooltip()
})

// $('.spec-btn').click(() => {
//   // let waitDuration = 5000
//   // setTimeout(() => {
//   // $('.spec-row').toggleClass('transition')
//   // }, waitDuration)
//   $(this).remove()

//   console.log($(this).attr('Value'))
// })

// $('.spec-btn').on('click', () => {
//   // $(this).remove()
//   console.log('Button clicked')
// })

$(document).ready(function () {
  $(document).on('click', '.spec-btn', () => {
    $(this).text('Done nigga')
    // console.log('Button clicked')
  })

  $('#ul-li').lightGallery()
})
