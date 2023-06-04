import Board from "../../components/Board/Board";
import "./Game.scss";

const Game = () => {
  return (
    <div className="game">
      <div className="game__board">
        <Board />
      </div>
      <div className="game__info">
        <ol>sth</ol>
      </div>
    </div>
  );
};

export default Game;
