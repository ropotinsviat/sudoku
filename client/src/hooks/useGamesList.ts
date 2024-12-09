import { useEffect, useState } from "react";
import GameService from "../api/GameService";
import { displayError } from "../components/notification/Notification";
import { IGameCard } from "../types/Game";

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

  useEffect(() => {
    fetchGames();
  }, []);

  return { games, fetchGames };
}
