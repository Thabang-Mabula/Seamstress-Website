'use strict'
// ------------------------------------------ PRELOADER ------------------------------------------
$(window).on('load', () => {
  $('#preloader-animation').fadeOut('slow')
})

// -------------------------------- HTML and THREE.JS INTERACTION ---------------------------------

// Ensures that click button interactions work for both THREE.JS animation elements and
// the HTML DOM elements
$('#web-content').bind('click', function (event) {
  event.stopPropagation()
})

// ------------------------------------------ ABOUT MENU ------------------------------------------

$(document).on('click', '.menu-btn', () => {
  $('.company-name-area').remove()
  $('.page-center-container').append(`
    <a href="#" class="home-btn-link">
      <img class="home-btn-img" src="/images/home.png">
    </a>

    <div class="topic-descirption">
      <h1 class="topic-description-heading" id="topic-description-heading"> </h1>

      <p class="topic-description-text" id="topic-description-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>


    </div>

    <div class="sidebar-menu-topics">
      <ul class="sidebar-menu-topics">
        <li><a href="#" class="sidebar-menu-topics" id="NLP">NLP </a></li>
        <li><a href="#" class="sidebar-menu-topics" id="DeepLearning">Deep Learning </a></li>
        <li><a href="#" class="sidebar-menu-topics" id="ReinforcementLearning">Reinforcement Learning </a></li>
        <li><a href="#" class="sidebar-menu-topics" id="MachineLearning">Machine Learning </a></li>
        <li><a href="#" class="sidebar-menu-topics" id="SelfDrivingCars">Self-driving Cars</a></li>
      </ul>
  </div>
  `)
})

$(document).on('click', '.home-btn-link', () => {
  $('.page-center-container').empty()
  $('.page-center-container').append(`
  <div class="company-name-area">
    <p>
      <span class="company-name">Artificial Intelligence</span>
    </p>
    <p>
      <span class="company-slogan">Company slogan</span>
    </p>

    <a class="menu-btn" href="#">
      <img class="menu-btn-img" src="/images/menu.png">
    </a>


  </div>    
`)
})

// Loads text for when NLP is pressed
$(document).on('click', '#NLP', () => {
  let topic = { topic: 'NLP' }

  $.ajax({
    url: '/api/topics',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(topic),
    success: function (response) {
      $('#topic-description-heading').text(response.heading)
      $('#topic-description-text').text(response.text)
    }
  })
})

// Loads text for when Reinforcement Learning is pressed
$(document).on('click', '#ReinforcementLearning', () => {
  let topic = { topic: 'Reinforcement Learning' }

  $.ajax({
    url: '/api/topics',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(topic),
    success: function (response) {
      $('#topic-description-heading').text(response.heading)
      $('#topic-description-text').text(response.text)
    }
  })
})

// Loads text for when Deep Learning is pressed
$(document).on('click', '#DeepLearning', () => {
  let topic = { topic: 'Deep Learning' }

  $.ajax({
    url: '/api/topics',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(topic),
    success: function (response) {
      $('#topic-description-heading').text(response.heading)
      $('#topic-description-text').text(response.text)
    }
  })
})

// Loads text for when Machine Learning is pressed
$(document).on('click', '#MachineLearning', () => {
  let topic = { topic: 'Machine Learning' }

  $.ajax({
    url: '/api/topics',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(topic),
    success: function (response) {
      $('#topic-description-heading').text(response.heading)
      $('#topic-description-text').text(response.text)
    }
  })
})

// Loads text for when Self-Driving Cars is pressed
$(document).on('click', '#SelfDrivingCars', () => {
  let topic = { topic: 'Self-driving Cars' }

  $.ajax({
    url: '/api/topics',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(topic),
    success: function (response) {
      $('#topic-description-heading').text(response.heading)
      $('#topic-description-text').text(response.text)
    }
  })
})

// -------------------------------------------------- LOGIN --------------------------------------------------
$(document).on('click', '#login-link', (event) => {
  event.stopPropagation()
  $('div.page-center-container').empty()
  $('.page-center-container').append(`
  <a href="#" class="home-btn-link">
    <img class="home-btn-img" src="/images/home.png">
  </a>
  
  <div class="login-area">
    <button class="button login-option-active" id="login-option-btn">Login</button>
    <button class="button login-option-inactive" id="signup-option-btn"> Signup </button>

    <input type="text" placeholder="Username" class="login" id="login-username">
    <input type="password" placeholder="Password" class="login" id="login-password">
    <button class="btn btn-success login password" id="submit-login-btn"> Submit </button>
  </div>    
`)
})

// Format the div area for login options
$(document).on('click', '#login-option-btn', () => {
  $('.login-area').empty()

  $('.login-area').append(`
    <button class="button login-option-active" id="login-option-btn">Login</button>
    <button class="button login-option-inactive" id="signup-option-btn"> Signup </button>

    <input type="text" placeholder="Username" class="login" id="login-username">
    <input type="password" placeholder="Password" class="login" id="login-password">
    <button class="btn btn-success login password" id="submit-login-btn"> Submit </button>
  `)

  $('#login-option-btn').prop('class', 'button login-option-active')
  $('#signup-option-btn').prop('class', 'button login-option-inactive')
})

// Format the div area for signup options
$(document).on('click', '#signup-option-btn', () => {
  $('.login-area').empty()

  $('.login-area').append(`
    <button class="button login-option-active" id="login-option-btn">Login</button>
    <button class="button login-option-inactive" id="signup-option-btn"> Signup </button>

    <input type="text" placeholder="Firstname" class="login" id="signup-firstname">
    <input type="text" placeholder="Lastname" class="login" id="signup-lastname">
    <input type="email" placeholder="Email Address" class="login" id="signup-email">
    <input type="text" placeholder="Username" class="login" id="signup-username">
    <input type="password" placeholder="Password" class="login" id="signup-password">
    <input type="password" placeholder="Retype password" class="login" id="signup-password-retype">
    <button class="btn btn-success login password" id="submit-signup-btn"> Submit </button>
  `)

  $('#login-option-btn').prop('class', 'button login-option-inactive')
  $('#signup-option-btn').prop('class', 'button login-option-active')
})
