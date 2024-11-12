import { useEffect, useState } from "react";
import GameService from "../API/GameService";
import { displayError } from "../utils/displayMessage";

export function useGamesList() {
  const [games, setGames] = useState([]);

  async function fetchGames() {
    try {
      const games = await GameService.getAll();
      console.log(games);
      setGames(games);
    } catch (e) {
      displayError(e?.response?.data?.message || "Server error");
    }
  }

  useEffect(() => {
    fetchGames();
  }, []);

  return { games, fetchGames };
}
