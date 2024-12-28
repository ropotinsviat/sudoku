import { useEffect, useState } from "react";
import GameService from "../api/gameService";
import { displayError } from "../components/notification/Notification";
import { IGameCard } from "../types/Game";
import { useAsync } from "./useAsynk";

export function useGamesList() {
  const [games, setGames] = useState<IGameCard[]>([]);

  async function fetchGames() {
    try {
      const games = await GameService.getAll();
      setGames(games);
    } catch (e: any) {
      displayError(e?.response?.data?.message || "Server error");
    }
  }

  const { execute, loading } = useAsync(fetchGames);

  useEffect(() => {
    execute();
  }, []);

  return { games, fetchGames: execute, loading };
}
