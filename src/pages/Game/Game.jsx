import { useState } from "react";
import Board from "../../components/Board/Board";
import "./Game.scss";

const Game = () => {
  const [isX, setIsX] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  const handlePlay = (updatedSquares) => {
    setHistory([...history, updatedSquares]);
    setIsX(!isX);
  };

  return (
    <div className="game">
      <div className="game__board">
        <Board isX={isX} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game__info"></div>
    </div>
  );
};

export default Game;
