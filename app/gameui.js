'use strict'

const store = require('./store')
const gameLogic = require('./gamelogic')

const onNewGameSuccess = response => {
  // Is this the best syntax?
  const gameID = response.game._id; store.gameID = gameID
  const cells = response.game.cells; store.cells = cells
  const over = response.game.over; store.over = over
  const nextMove = 'X'; store.nextMove = nextMove
  updateBoard(cells, over)
}

const onNewGameFailure = () => {
  $('#new-game-failure').html('Failed to start game')
}

const makeMoveSuccess = response => {
  updateBoard(response.game.cells, response.game.over)
}

const makeMoveFailure = text => {
  if (text === undefined) {
    console.log('HERE')
    $('#game-message').text('Failed to record move.')
  } else {
    $('#game-message').text(text)
  }
}

const updateBoard = (cells, over) => {
  if ($('#game-board').is(':hidden')) $('#game-board').show()
  $('#turn-indicator').text(`Next turn: ${store.nextMove}`)
  updateEachSpace(cells)
  // Next up is literally the grossest thing I've ever done.
  console.log(store.gameID)
  if (over) $('#turn-indicator').text(`The game is over. The winner is ${gameLogic.checkWinner(cells)[1]}!`)
}

const updateEachSpace = cells => {
  $('#game-message').text('')
  cells.forEach((element, index) => {
    const foundSpot = $(`td[data-id='${index}']`)
    foundSpot.text(`${element}`)
  })
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  makeMoveSuccess,
  makeMoveFailure
}
