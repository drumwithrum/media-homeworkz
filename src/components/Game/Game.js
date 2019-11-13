import React, { Component } from 'react';
import Button from './Button';
import Board from './Board';
import { getResultMessage, getGameStatus } from './Game.util';
import './Game.css';
import { gameStates } from './Game.config';

const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

const players = {
  0: {
    name: 'Player one',
    char: 'O',
  },
  1: {
    name: 'Player two',
    char: 'X',
  },
}

const initialState = {
  activePlayer: 0,
  isGameInProgress: false,
  resultMessage: '',
  gameBoxes: Array(9).fill(undefined),
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  
  render() {
    const {
      resultMessage,
      isGameInProgress,
      activePlayer,
      gameBoxes,
    } = this.state;
    return (
      <div className="game">
        <Board
          activePlayer={activePlayer}
          onBoxClick={this.onBoxClick}
          gameBoxes={gameBoxes}
          isActive={isGameInProgress}
        />
        <div className="control-panel">
          <Button content={(isGameInProgress || resultMessage) ? 'Reset game' : 'Start game'} onClick={this.restartGame} className="button" />
          {(isGameInProgress && !resultMessage) && (
            <div>{`Current turn: ${players[activePlayer].name}(${players[activePlayer].char})`}</div>
          )}
          {resultMessage && <div>{resultMessage}</div>}
        </div>
      </div>
    );
  }

  onBoxClick = boxNumber => {
    const { gameBoxes, activePlayer } = this.state;
    const content = players[activePlayer].char;
    const updatedBoxes = gameBoxes.map((item, index) => index === boxNumber ? content : item);
    const gameStatus = getGameStatus(updatedBoxes);
    this.setState({
      gameBoxes: updatedBoxes,
      activePlayer: activePlayer ? 0 : 1,
      resultMessage: getResultMessage(gameStatus, activePlayer),
      isGameInProgress: gameStatus === gameStates.inProgress,
    });
  }

  restartGame = () => {
    this.setState({ ...initialState, isGameInProgress: true });
  }

}

export default Game;
