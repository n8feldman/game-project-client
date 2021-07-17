'use strict'

// const store = require('./store')

const onNewGameSuccess = () => {
  updateBoard(['', '', '', '', '', '', '', '', ''], 'O')
}

const onNewGameFailure = () => {
  $('#new-game-failure').html('Failed to start game')
}

const updateBoard = (cells, lastMove) => {
  if ($('#game-board').is(':hidden')) $('#game-board').show()
  let nextMove = ''
  lastMove === 'X' ? nextMove = 'O' : nextMove = 'X'
  $('#turn-indicator').html(`Next turn: ${nextMove}`)
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure
}
