import { useParams } from "react-router-dom";
import { GameProvider } from "../context/GameContext";
import GameContent from "../components/GameContent/GameContent";
import React from "react";

export default function GamePage() {
  const { gameId } = useParams();

  return (
    <main>
      <GameProvider gameId={Number(gameId)}>
        <GameContent />
      </GameProvider>
    </main>
  );
}
