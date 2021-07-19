'use strict'

const store = require('./store')

const onNewGameSuccess = response => {
  const gameID = response.game._id
  store.gameID = gameID
  updateBoard(gameID, response.game.cells, 'O')
}

const onNewGameFailure = () => {
  $('#new-game-failure').html('Failed to start game')
}

const updateBoard = (gameID, cells, lastMove) => {
  if ($('#game-board').is(':hidden')) $('#game-board').show()
  let nextMove = ''
  lastMove === 'X' ? nextMove = 'O' : nextMove = 'X'
  $('#turn-indicator').text(`Next turn: ${nextMove}`)
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure
}
