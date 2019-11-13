import React, { Component } from 'react';
import Button from '../Button';
import { gameStates } from '../Game.config';
import { getGameStatus } from '../Game.util';
import './Board.css';


const initialState = {
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  
  render() {
    const { gameBoxes, isActive } = this.props;
    return (
      <div className="board">
        {gameBoxes.map((item, index) => (
          <div key={`game-box-${index}`} className="board-cell">
            <Button onClick={() => this.onButtonClick(index)} content={item} disabled={!isActive || Boolean(item)} />
          </div>
        ))}
      </div>
    );
  }

  onButtonClick = boxNumber => {
    const { onBoxClick } = this.props;
    onBoxClick(boxNumber);
  }

  clearBoard = () => {
    const { onBoardClear } = this.props;
    this.setState(initialState);
    onBoardClear();
  }
}

export default Game;
