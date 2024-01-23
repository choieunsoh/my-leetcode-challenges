// 10027. Tic Tac Toe
// https://leetcode.com/problems/tic-tac-toe/description/
import React from 'react';

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
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
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}

// Styling for individual cells and rows
const cellStyle = {
  width: 30,
  height: 30,
  backgroundColor: '#aaa',
  lineHeight: '30px',
  textAlign: 'center',
  cursor: 'pointer',
};

const rowStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 30px)',
  gap: '5px',
  marginBottom: '5px',
};

/**
 * @return {JSX.Element}
 */
export const TicTacToe = () => {
  // State variables to manage the game state
  const [board, setBoard] = React.useState(new Array(9).fill(null));
  const [isXNext, setIsXNext] = React.useState(true);

  const winner = calculateWinner(board);
  const isBoardFull = !board.includes(null);

  // Handle click on a cell
  function handleClick(event) {
    const cellIndex = event.target.dataset.index;

    // Check if the cell is already filled or there's a winner
    if (board[cellIndex] || winner) {
      return;
    }

    // Update the clicked cell based on the current player (X or O)
    const newBoard = board.slice();
    newBoard[cellIndex] = isXNext ? 'X' : 'O';

    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  // Handle restart game button click
  function restartGame() {
    setBoard(new Array(9).fill(null));
    setIsXNext(true);
  }

  return (
    <div>
      <div>
        {/* Display the game status: Winner, Draw, or Next Player */}
        {winner ? 'Winner: ' + winner : isBoardFull ? 'Draw' : 'Next Player: ' + (isXNext ? 'X' : 'O')}
      </div>

      {/* Render the game board cells using the map function */}
      <div style={rowStyle} onClick={handleClick}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <div key={index} data-index={index} id={`cell_${index}`} style={cellStyle}>
            {/* Display the value (X, O, or null) in the cell */}
            {board[index]}
          </div>
        ))}
      </div>

      <button onClick={restartGame}>Restart</button>
    </div>
  );
};
