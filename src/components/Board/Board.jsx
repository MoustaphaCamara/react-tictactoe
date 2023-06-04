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

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [status, setStatus] = useState("");

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) return;
    const updatedSquares = [...squares];
    updatedSquares[i] = isX ? "X" : "O";
    setSquares(updatedSquares);
    setIsX(!isX);
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
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
