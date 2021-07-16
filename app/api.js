'use strict'

const config = require('./config')

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = data => {
  console.log(data)
  console.log(config.apiUrl)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

module.exports = {
  signUp,
  signIn
}
