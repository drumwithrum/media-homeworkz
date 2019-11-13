export const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]
  
export const players = {
  0: {
    name: 'Player one',
    char: 'O',
  },
  1: {
    name: 'Player two',
    char: 'X',
  },
}

export const gameStates = {
  inProgress: 'Game is in progress',
  winner: 'Game is over, we have a winner: ',
  draw: 'Game is over, we have a draw',
  notStartedYet: 'Game has not started yet',
}