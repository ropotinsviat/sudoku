import "../../assets/css/games-list.css";

export default function GamesList({ games, onClick }) {
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
