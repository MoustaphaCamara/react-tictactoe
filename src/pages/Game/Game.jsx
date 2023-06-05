import { useState } from "react";
import Board from "../../components/Board/Board";
import "./Game.scss";

const Game = () => {
  const [isX, setIsX] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  const handlePlay = (updatedSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), updatedSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setIsX(!isX);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
    setIsX(nextMove % 2 === 0);
  };

  const moves = history.map((squares, move) => {
    let description;
    description = move > 0 ? `Go back to ${move}` : `Go to game start`;
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description} </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game__board">
        <Board isX={isX} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game__info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
