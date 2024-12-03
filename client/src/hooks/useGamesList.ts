import { useEffect, useState } from "react";
import GameService from "../API/GameService";
import { displayError } from "../utils/displayMessage";
import { IGameCard } from "../types/types";

export function useGamesList() {
  const [games, setGames] = useState<IGameCard[]>([]);

  const fetchGames = async () => {
    try {
      const games = await GameService.getAll();
      setGames(games);
    } catch (e: any) {
      displayError(e?.response?.data?.message || "Server error");
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return { games, fetchGames };
}
