import { useParams } from "react-router-dom";
import { GameProvider } from "../../context/GameContext";
import Game from "../../components/game/Game";

const GamePage = () => {
  const { gameId } = useParams();

  return (
    <main>
      <GameProvider gameId={Number(gameId)}>
        <Game />
      </GameProvider>
    </main>
  );
};

export default GamePage;
