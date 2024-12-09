import { useParams } from "react-router-dom";
import { GameProvider } from "../../context/GameContext";
import Game from "../../components/game/Game";

export default function GamePage() {
  const { gameId } = useParams();

  return (
    <main>
      <GameProvider gameId={Number(gameId)}>
        <Game />
      </GameProvider>
    </main>
  );
}
