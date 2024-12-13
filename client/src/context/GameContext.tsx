import { createContext, ReactNode, useContext } from "react";
import { useGame } from "../hooks/useGame";
import { IPlayer } from "../types/Player";
import { IGame } from "../types/Game";
import { ICell, ISelectedCell } from "../types/Cell";
import GameService from "../api/GameService";

type IGameDataAndApiActions = {
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

const GameContext = createContext<IGameDataAndApiActions | null>(null);
export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context)
    throw new Error("useGameContext must be used within a GameProvider");
  return context;
};

interface GameProviderProps {
  gameId: number;
  children: ReactNode;
}

export function GameProvider({ gameId, children }: GameProviderProps) {
  const gameData = useGame(gameId);

  async function sendMessage(message: string) {
    await GameService.sendMessage(gameId, message);
  }

  async function startGame() {
    await GameService.start(gameId);
  }

  const game = { ...gameData, startGame, sendMessage };

  return <GameContext.Provider value={game}>{children}</GameContext.Provider>;
}
