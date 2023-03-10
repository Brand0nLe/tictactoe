//Brandon Le
//3-10-23
//Tic Tac Toe Tutorial but made with React and bootstrap. My special features were a bunch of different animations and effects from framer-motion. I had a lot of fun messing around with them and trying to ge them to work.


import React, { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';
import Square from './SquareComponent';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Board({ xIsNext, squares, onPlay }) {
  const [setFinished] = useState(false);

  useEffect(() => {
    // Call the breathe function on each square element
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => breathe(square));
  }, []);

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <motion.div
        className={winner ? "status-background winner fade-out" : "status-background fade-out"}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 4 }}
        onAnimationComplete={() => setFinished(true)}
      />
      <motion.div
        className="status-text"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1.4 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 1000 }}
      >
        {status}
      </motion.div>
      <div className="board-row row justify-content-center align-items-center">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} isWinner={winner && winner.includes(0)} />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)} isWinner={winner && winner.includes(1)} />
      <Square value={squares[2]} onSquareClick={() => handleClick(2)} isWinner={winner && winner.includes(2)} />
      </div>
      <div className="board-row row justify-content-center align-items-center">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} isWinner={winner && winner.includes(3)} />
      <Square value={squares[4]} onSquareClick={() => handleClick(4)} isWinner={winner && winner.includes(4)} />
      <Square value={squares[5]} onSquareClick={() => handleClick(5)} isWinner={winner && winner.includes(5)} />
      </div>
      <div className="board-row row justify-content-center align-items-center">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)} isWinner={winner && winner.includes(6)} />
      <Square value={squares[7]} onSquareClick={() => handleClick(7)} isWinner={winner && winner.includes(7)} />
      <Square value={squares[8]} onSquareClick={() => handleClick(8)} isWinner={winner && winner.includes(8)} />
      </div>
      {winner && (
        <motion.div
          className="explosion"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
      )}
    </>
  );


  function breathe(element, isWinner) {
    if (isWinner) {
      animate(element, {
        scale: [1, 5, 1], // increase the scale more for the winner
        transition: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }
      });
    } else {
      animate(element, {
        scale: [1, 5, 1],
        transition: {
          duration: Infinity,
          repeat: Infinity,
          ease: "easeInOut"
        }
      });
    }
  }

  function calculateWinner(squares) {
    const lines = [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
}

export default Board;