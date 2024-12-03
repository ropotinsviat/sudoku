import { Link } from "react-router-dom";
import "../../assets/css/games-list.css";
import { IGameCard } from "../../types/types";

export default function GamesList({ games }: { games: IGameCard[] }) {
  return (
    <div className="games-list">
      {games.map((game, i) => (
        <Link to={`/${game.gameId}`} className="game-list-item" key={i}>
          <div>
            <div>
              <strong>#{game.gameId}</strong>
            </div>
            <div>{game.playerCount}/10</div>
          </div>
          <div>{game.difficulty.replace(/^./, (c) => c.toUpperCase())}</div>
          <div>{game.timeSinceStart}</div>
        </Link>
      ))}
    </div>
  );
}
