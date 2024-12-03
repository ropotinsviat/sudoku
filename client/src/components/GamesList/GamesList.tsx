import "../../assets/css/games-list.css";
import { IGameCard } from "../../types/types";

export default function GamesList({
  games,
  onClick,
}: {
  games: IGameCard[];
  onClick: any;
}) {
  return (
    <div className="games-list">
      {games.map((game, i) => (
        <div
          className="game-list-item"
          key={i}
          onClick={() => onClick(game.gameId)}
        >
          <div>
            <div>
              <strong>#{game.gameId}</strong>
            </div>
            <div>{game.playerCount}/10</div>
          </div>
          <div>{game.difficulty.replace(/^./, (c) => c.toUpperCase())}</div>
          <div>{game.timeSinceStart}</div>
        </div>
      ))}
    </div>
  );
}
