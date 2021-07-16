'use strict'

const onSignUpSuccess = response => {
  $('#sign-up-message').text(`Thank you for signing up. Your login email is ${response.user.email}`)
  $('#sign-up-form').trigger('reset')
}

const onSignUpFailure = () => {
  $('#sign-up-message').text('Failed sign-up attempt. Please try again.')
  $('#sign-up-form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
  // onSignInSuccess,
  // onSignInFailure,
  // onSignOutSuccess,
  // onSignOutFailure
}
