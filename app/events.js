'use strict'

const getFormFields = require('./../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const gameui = require('./gameui')

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignOut = () => {
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const newGame = () => {
  api.newGame()
    .then(gameui.onNewGameSuccess)
    .catch(gameui.onNewGameFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  newGame
}
