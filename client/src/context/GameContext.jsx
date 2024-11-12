import React, { createContext, useContext } from "react";
import { useGame } from "../hooks/useGame";

const GameContext = createContext();
export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ gameId, children }) => {
  const game = useGame(gameId);

  return <GameContext.Provider value={game}>{children}</GameContext.Provider>;
};
