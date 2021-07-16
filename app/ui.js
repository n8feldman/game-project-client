'use strict'

const store = require('./store')

const onSignUpSuccess = response => {
  $('#sign-up-message').text(`Thank you for signing up. Your login email is ${response.user.email}`)
  $('#sign-up-form').trigger('reset')
}

const onSignUpFailure = () => {
  $('#sign-up-message').text('Failed sign-up attempt. Please try again.')
  $('#sign-up-form').trigger('reset')
}

const onSignInSuccess = response => {
  $('#sign-in-message').text(`You are now logged in ${response.user.email}`)
  $('#sign-in-failure').text('')
  $('#sign-in-form').trigger('reset')
  $('#sign-up-message').text('')
  store.token = response.user.token
  $('#login-forms').hide()
  $('#game-content').show()
}

const onSignInFailure = () => {
  $('#sign-in-failure').text('Failed sign-in attempt. Please try again.')
  $('#sign-in-form').trigger('reset')
}

const onSignOutSuccess = () => {
  $('#game-content').hide()
  $('#login-forms').show()
  $('#sign-out-message').text('Thank you for signing out')
}

const onSignOutFailure = () => {
  $('#sign-out-failure').text('Sign out failure')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure
}
