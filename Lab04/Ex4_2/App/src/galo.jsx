import { useState } from 'react';
import './galo.css';

function Square({ value, onSquareClick }) {
    const backColor = value === 'X' ? 'lightblue' : value === 'O' ? 'lightpink' : 'white';
    return (
        <button className="square" onClick={onSquareClick} style={{backgroundColor: backColor}}>
        {value}
        </button>
    );
}

function Board({ xIsNext, squares, onPlay, onReset }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
  <>
    <div className="status">{status}</div>
    <div className='reset' style={{padding: "10px"}}>
      <button onClick={onReset}>Reset Game</button>
    </div>
    {[0, 1, 2, 3, 4, 5].map((row) => (
      <div className="board-row" key={row}>
        {[0, 1, 2, 3, 4, 5].map((col) => {
          const index = row * 6 + col;
          return (
            <Square
              key={index}
              value={squares[index]}
              onSquareClick={() => handleClick(index)}
            />
          );
        })}
      </div>
    ))}
  </>
);
}

export default function Game() {
  const [history, setHistory] = useState([Array(36).fill(null)]);
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

  // Função para resetar o jogo
  function resetGame() {
    setHistory([Array(36).fill(null)]);
    setCurrentMove(0);
  }

  const moves = history.map((squares, move) => {
    const description = move > 0 ? `Go to move #${move}` : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} onReset={resetGame} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
    const size = 6; 
    const lineLength = 3;
  
    function checkLine(start, step) {
      const [a, b, c] = start.map(i => squares[i]);
      return a && a === b && a === c ? a : null;
    }
  
    // Verificar linhas horizontais
    for (let row = 0; row < size; row++) {
      for (let col = 0; col <= size - lineLength; col++) {
        const start = [row * size + col, row * size + col + 1, row * size + col + 2];
        const winner = checkLine(start, 1);
        if (winner) return winner;
      }
    }
  
    // Verificar colunas verticais
    for (let col = 0; col < size; col++) {
      for (let row = 0; row <= size - lineLength; row++) {
        const start = [row * size + col, (row + 1) * size + col, (row + 2) * size + col];
        const winner = checkLine(start, size);
        if (winner) return winner;
      }
    }
  
    // Verificar diagonais (direção ↘)
    for (let row = 0; row <= size - lineLength; row++) {
      for (let col = 0; col <= size - lineLength; col++) {
        const start = [
          row * size + col,
          (row + 1) * size + col + 1,
          (row + 2) * size + col + 2,
        ];
        const winner = checkLine(start, size + 1);
        if (winner) return winner;
      }
    }
  
    // Verificar diagonais (direção ↙)
    for (let row = 0; row <= size - lineLength; row++) {
      for (let col = lineLength - 1; col < size; col++) {
        const start = [
          row * size + col,
          (row + 1) * size + col - 1,
          (row + 2) * size + col - 2,
        ];
        const winner = checkLine(start, size - 1);
        if (winner) return winner;
      }
    }
  
    return null;
}
