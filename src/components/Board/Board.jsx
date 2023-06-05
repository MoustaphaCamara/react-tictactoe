import { useEffect, useState } from "react";
import Square from "../Square/Square";
import "./Board.scss";

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

const Board = ({ isX, squares, onPlay }) => {
  const [status, setStatus] = useState("");
  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) return;
    const updatedSquares = [...squares];
    updatedSquares[i] = isX ? "X" : "O";
    onPlay(updatedSquares);
  };

  const calculateWinner = (squares) => {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
  };

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setStatus("Winner: " + winner);
    } else {
      setStatus(`Next player: ${isX ? "X" : "O"}`);
    }
  }, [isX]);

  return (
    <>
      <p>{status}</p>
      <div className="board">
        {squares.map((square, index) => (
          <Square
            key={index}
            value={square}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Board;
