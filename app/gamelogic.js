'use strict'

const store = require('./store')

// Takes in a cell that the user selects.
// Uses the existing cells and the current turn (nextMove) from store.js
// Builds data for the api call to "patch" a game
// output format: data = {game: {cell {index: <0-8>, value<X|O>}, over<T|F>}}
const buildGameData = spaceTaken => {
  const moveToPush = store.nextMove
  const dataCell = {
    index: spaceTaken,
    value: moveToPush
  }
  moveToPush === 'X' ? store.nextMove = 'O' : store.nextMove = 'X'

  const cells = store.cells
  cells[spaceTaken] = moveToPush
  store.cells = cells
  const over = checkWinner(cells)

  const data = {
    game: {
      cell: dataCell,
      over: over
    }
  }
  return data
}

const checkWinner = cells => {
  const winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  let winner = false
  for (let i = 0; i < winningCombinations.length; i++) {
    const enteredValues = [winningCombinations[i][0], winningCombinations[i][1], winningCombinations[i][2]]
    if (allEqual(enteredValues) === true) winner = true
  }
  return winner
}

// Taken from stackoverflow, checks for equality among all values of an array
// https://stackoverflow.com/questions/14832603/check-if-all-values-of-array-are-equal
const allEqual = arr => arr.every((v) => v === arr[0])

module.exports = {
  buildGameData
}
