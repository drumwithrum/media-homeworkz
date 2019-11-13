import { gameStates, winCombinations, players } from './Game.config';

export const getGameStatus = (gameBoxes) => {
  const gameEndCombination = winCombinations.find(item => gameBoxes[item[0]] && gameBoxes[item[0]] === gameBoxes[item[1]] &&  gameBoxes[item[1]] === gameBoxes[item[2]]);
  if (gameEndCombination) return gameStates.winner;
  const areAllBoxesFilled = gameBoxes.filter(item => Boolean(item)).length === gameBoxes.length;
  return areAllBoxesFilled ? gameStates.draw : gameStates.inProgress;
}

export const getResultMessage = (gameStatus, player) => {
  if (gameStatus === gameStates.draw) return gameStates.draw;
  if (gameStatus === gameStates.winner && player) return `${gameStates.winner} ${players[1].name} (${players[1].char})`;
  if (gameStatus === gameStates.winner && !player) return `${gameStates.winner} ${players[0].name} (${players[0].char})`;
  return '';
}
