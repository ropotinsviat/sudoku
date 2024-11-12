import { useParams } from "react-router-dom";
import { GameProvider } from "../context/GameContext";
import GameContent from "../components/GameContent/GameContent";

export default function GamePage() {
  const { gameId } = useParams();

  return (
    <main>
      <GameProvider gameId={gameId}>
        <GameContent />
      </GameProvider>
    </main>
  );
}
