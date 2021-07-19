'use strict'

const store = require('./store')

const onNewGameSuccess = response => {
  // Is this the best syntax?
  const gameID = response.game_id; store.gameID = gameID
  const cells = response.game.cells; store.cells = cells
  const over = response.game.over; store.over = over
  const nextMove = 'X'; store.nextMove = nextMove
  updateBoard(gameID, cells, nextMove, over)
}

const onNewGameFailure = () => {
  $('#new-game-failure').html('Failed to start game')
}

const updateBoard = (gameID, cells, nextMove, over) => {
  if ($('#game-board').is(':hidden')) $('#game-board').show()
  $('#turn-indicator').text(`Next turn: ${nextMove}`)
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure
}
