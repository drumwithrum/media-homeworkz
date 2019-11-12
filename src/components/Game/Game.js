import React, { Component } from 'react';
import Button from './Button';
import './Game.css';

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
  gameBoxes: Array(9).fill(undefined),
  isGameInProgress: false,
  resultMessage: '',
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  
  render() {
    const { resultMessage, isGameInProgress } = this.state;
    return (
      <div className="game">
        <div className="board">
          {this.renderButtons()}
        </div>
        <div className="control-panel">
          <Button content={isGameInProgress ? 'Reset game' : 'Start game'} onClick={this.startOver}/>
          {resultMessage && this.renderResult()}
        </div>
      </div>
    );
  }

  renderButtons = () => {
    const { gameBoxes, isGameInProgress, resultMessage } = this.state;
    return gameBoxes.map((item, index) => (
      <div key={`game-box-${index}`} className="board-cell">
        <Button onClick={() => this.onButtonClick(index)} content={item} disabled={!isGameInProgress || Boolean(item) || Boolean(resultMessage)} />
      </div>
    ))
  }

  renderResult = () => {
    const { resultMessage } = this.state;
    return <div>{resultMessage}</div>
  }

  onButtonClick = async (boxNumber) => {
    await this.reserveBox(boxNumber);
    this.checkGameStatus();
    this.setState(({activePlayer}) => ({ activePlayer: activePlayer ? 0 : 1 }))
  }

  reserveBox = (boxNumber) => {
    const { activePlayer } = this.state;
    const content = players[activePlayer].char;
    this.setState(({gameBoxes}) => ({ gameBoxes: gameBoxes.map((item, index) => index === boxNumber ? content : item) }))
  }

  checkGameStatus = () => {
    const { gameBoxes, activePlayer } = this.state;
    const gameEndCombination = winCombinations.find(item => gameBoxes[item[0]] && gameBoxes[item[0]] === gameBoxes[item[1]] &&  gameBoxes[item[1]] === gameBoxes[item[2]]);
    if (gameEndCombination) return this.setResultMessage(`The winner is: ${players[activePlayer].name}`);
    if (this.areAllBoxesFilled()) this.setResultMessage('Draw');
  }

  setResultMessage = (msg) => {
    this.setState({ resultMessage: msg })
  }

  areAllBoxesFilled = () => {
    const { gameBoxes } = this.state;
    return gameBoxes.filter(item => Boolean(item)).length === gameBoxes.length;
  }

  startOver = () => {
    this.setState(({ isGameInProgress }) => ({ ...initialState, isGameInProgress: true }));
  }
}

export default Game;
