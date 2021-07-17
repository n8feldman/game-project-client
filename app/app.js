// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const eventHandler = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', eventHandler.onSignUp)
  $('#sign-in-form').on('submit', eventHandler.onSignIn)
  $('#sign-out').on('click', eventHandler.onSignOut)
  $('#play-button').on('click', eventHandler.newGame)
  $('#game-content').hide()
})
