import React, { createContext, ReactNode, useContext } from "react";
import { useGame } from "../hooks/useGame";
import { IGame, IPlayer, ICell, ISelectedCell } from "../types/types";

type IGameProduct = {
  players: IPlayer[];
  board: ICell[][];
  gameData: IGame;
  onCellPut: (
    val: number,
    selectedCell: ISelectedCell,
    noteMode: boolean
  ) => Promise<void>;
  startGame: () => Promise<void>;
  sendMessage: (message: string) => Promise<void>;
};

const GameContext = createContext<IGameProduct | null>(null);
export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context)
    throw new Error("useGameContext must be used within a GameProvider");
  return context;
};

export const GameProvider = ({
  gameId,
  children,
}: {
  gameId: number;
  children: ReactNode;
}) => {
  const game = useGame(gameId);

  return <GameContext.Provider value={game}>{children}</GameContext.Provider>;
};
