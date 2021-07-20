'use strict'

const config = require('./config')
const store = require('./store')

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${store.token}`
    }
  })
}

const newGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${store.token}`
    },
    data: {}
  })
}

const updateGame = data => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.gameID,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${store.token}`
    },
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  newGame,
  updateGame
}
