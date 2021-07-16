'use strict'

const config = require('./config')

const signUp = data => {
  console.log(data)
  console.log(config.apiUrl)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

module.exports = {
  signUp
}
