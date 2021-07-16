'use strict'

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
  $('#sign-in-form').trigger('reset')
}

const onSignInFailure = () => {
  $('#sign-in-message').text('Failed sign-in attempt. Please try again.')
  $('#sign-in-form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure
  // onSignOutSuccess,
  // onSignOutFailure
}
