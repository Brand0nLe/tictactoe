//Brandon Le
//3-10-23
//Tic Tac Toe Tutorial but made with React and bootstrap. My special features were a bunch of different animations and effects from framer-motion. I had a lot of fun messing around with them and trying to ge them to work.


import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Board from './components/BoardComponent';
import './css/style.css';
import { motion } from 'framer-motion';

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button className="move-btn" onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  const breathe = (element) => {
    element.style.transform = 'scale(1.1)';
    element.style.transition = 'all 0.5s ease-in-out';
    setTimeout(() => {
      element.style.transform = 'scale(1)';
      setTimeout(() => breathe(element), 500);
    }, 500);
  };

  return (
    <div className="container-fluid">
      <div className="game">
        <div className="row">
          <div className="col-8">
            <div className="game-board">
              <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
          </div>
          <div className="col-4  d-flex mx-auto">
            <div className="game-info LRPad">
              <div className="moves-header d-flex justify-content-center">Moves:</div>
              <ul className="moves-list">
                {moves.map((move, index) => (
                  <motion.li
                    key={index}
                    onHoverStart={(event) => breathe(event.target)}
                    onHoverEnd={(event) => {
                      event.target.style.transform = 'scale(1)';
                      event.target.style.transition = 'all 4s ease-in-out';
                    }}
                  >
                    {move}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;