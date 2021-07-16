'use strict'

const onSignUp = (event) => {
  event.preventDefault()
  console.log('here')
  $('h3').html('signed up')
}

module.exports = {
  onSignUp
}
