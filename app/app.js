// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const eventHandler = require('./events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', eventHandler.onSignUp)
})
